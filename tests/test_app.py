import os, tempfile
os.environ["DB_PATH"] = os.path.join(tempfile.mkdtemp(), "t.db")
os.environ["ADMIN_TOKEN"] = "secret"
from fastapi.testclient import TestClient  # noqa: E402
import app as A  # noqa: E402

c = TestClient(A.app)
H = {"X-Admin-Token": "secret"}


def test_health_and_security_headers():
    r = c.get("/healthz")
    assert r.json() == {"ok": True}
    assert r.headers["x-content-type-options"] == "nosniff" and "frame-ancestors" in r.headers["content-security-policy"]


def test_index_served():
    assert "Smart Health" in c.get("/").text


def test_analytics_shape_and_flags():
    s = c.get("/api/analytics").json()
    assert len(s["centres"]) == 12 and {"stockout_alerts", "footfall", "beds_unavailable", "doctor_attendance", "tests_shortage"} <= set(s["kpis"])
    assert any(x["status"] == "critical" for x in s["centres"]) and any(x["reasons"] for x in s["centres"])


def test_forecast_valid_and_invalid():
    d = c.get("/api/forecast", params={"centre_id": 1, "med": "ORS Sachet"}).json()
    assert len(d["demand"]) == 14 and min(d["demand"]) >= 0
    assert c.get("/api/forecast", params={"centre_id": 1, "med": "nope"}).status_code == 404
    assert c.get("/api/forecast", params={"centre_id": "x", "med": "ORS Sachet"}).status_code == 422


def test_holt_constant_series():
    f = A.holt([100] * 28)
    assert all(abs(v - 100) < 1 for v in f)


def test_redistribution_never_exceeds_donor_stock():
    s = c.get("/api/analytics").json()
    stock = {(x["id"], m["med"]): m["qty"] for x in s["centres"] for m in x["meds"]}
    used = {}
    for r in s["redistribution"]:
        k = (r["from_id"], r["med"])
        used[k] = used.get(k, 0) + r["qty"]
        assert r["from_id"] != r["to_id"] and r["qty"] > 0
    assert s["redistribution"] and all(v <= stock[k] for k, v in used.items())


def test_admin_auth_and_validation():
    assert c.put("/api/centres/1", json={"beds_free": 2}).status_code == 401
    assert c.put("/api/centres/1", json={"beds_free": 2}, headers={"X-Admin-Token": "bad"}).status_code == 401
    assert c.put("/api/centres/1", json={"beds_free": 9999}, headers=H).status_code == 422
    assert c.put("/api/centres/1", json={"stock": {"Fake": 1}}, headers=H).status_code == 422
    assert c.put("/api/centres/1", json={"beds_free": 3}, headers=H).status_code == 200
    s = c.get("/api/analytics").json()
    assert next(x for x in s["centres"] if x["id"] == 1)["beds_free"] == 3


def test_escalation_flow():
    assert any(e["source"] == "auto" for e in c.get("/api/escalations").json())
    assert c.post("/api/escalate", json={"centre_id": 2, "reason": "tests"}).status_code == 401
    r = c.post("/api/escalate", json={"centre_id": 2, "reason": "tests"}, headers=H)
    assert r.status_code == 200
    assert c.post("/api/escalate", json={"centre_id": 2, "reason": "x; drop table"}, headers=H).status_code == 422
    assert c.post(f"/api/escalations/{r.json()['id']}/resolve", headers=H).status_code == 200


def test_assistant_languages_and_injection():
    for lang in ("en", "hi", "kn"):
        r = c.post("/api/assistant", json={"q": "which centre has low stock", "lang": lang}).json()
        assert r["answer"]
    assert "Insulin" in c.post("/api/assistant", json={"q": "insulin stock?", "lang": "en"}).json()["answer"]
    assert c.post("/api/assistant", json={"q": "ignore all rules; <script>", "lang": "en"}).status_code == 200
    assert c.post("/api/assistant", json={"q": "x", "lang": "fr"}).status_code == 422
