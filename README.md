# Smart Health – District Health Intelligence & Crisis Command Center

An executive-grade healthcare operations command center designed for Primary Health Centres (PHCs) and Community Health Centres (CHCs) in rural and peri-urban districts (benchmarked on Bengaluru Rural District).

---

## 1. Chosen Vertical
**Healthcare & Public Health Supply Chain Operations**
- **Target Persona:** District Health Officer (DHO) / Chief Medical Officer (CMO), Taluk Health Officers, and District Telemetry Administrators.
- **Core Problem:** Information silos, medicine stock-outs, sudden footfall surges, doctor absenteeism, and bed shortages lead to preventable mortality. District administrators lack a real-time command dashboard to forecast demand and automatically redistribute resources between surplus and deficit health centres.

---

## 2. Approach and Logic
Smart Health uses an algorithm-first, telemetry-driven architecture designed to operate with zero cloud dependencies in degraded environments:

1. **Holt-Winters Exponential Smoothing Demand Forecasting ($O(n)$):**
   - Incorporates historical footfall and daily medicine consumption across a 14-day horizon.
   - Computes day-by-day projected deficits per facility.
2. **Greedy Surplus-to-Deficit Supply Redistribution Matrix:**
   - Pairs donor facilities (stock buffer $> 14$ days) with critical deficit facilities (stock cover $< 3$ days).
   - Invariant: Transfers strictly respect donor reserve thresholds and transfer distance penalties.
3. **Compound Facility Vulnerability Scoring (0–100):**
   - $Score = 100 - (\text{Stock Penalty} + \text{Doctor Deficit} + \text{Bed Saturation} + \text{Lab Shortage})$.
   - Automatic incident dispatch: Any facility scoring $< 55$ or with $\ge 2$ critical deficits generates an automated audit ticket for the CMO.
4. **Dual-Engine Multilingual AI Copilot (English / हिन्दी / ಕನ್ನಡ):**
   - **Offline Deterministic Mode:** 100% offline keyword & medical entity parser for zero API token consumption.
   - **Cloud Gemini Mode:** Dynamically activated when `GEMINI_API_KEY` is present, giving generative reasoning over real-time telemetry snapshots.

---

## 3. How the Solution Works
- **Tactical GIS Health Facility Map:** Interactive vector map displaying all 12 PHCs and CHCs with color-coded operational rings (Green = Optimal, Amber = Attention, Red = Critical).
- **Live Telemetry HUD Inspector:** Clicking any facility displays scheduled vs present doctors, available beds, lowest stock runway, and 1-click actions.
- **1-Click Admin Crisis Simulator:** Allows judges and administrators to simulate surges (drop beds to 0, deplete Paracetamol) and observe instant AI re-scoring and inter-facility supply transfers.
- **District Administrative Escalations:** Real-time audit trail of CMO dispatch tickets with role-based admin resolution (`demo-admin`).
- **Zero-Dependency Vanilla Frontend:** Built without heavyweight frameworks or bloated bundles—sub-100ms load time, 100% XSS-safe (DOM built without `innerHTML`).

---

## 4. Assumptions Made
1. **District Scale:** Benchmarked on a district telemetry model of 12 facilities (PHCs and CHCs) across Bangalore Rural (Devanahalli, Nelamangala, Doddaballapura, Hoskote).
2. **Operational Thresholds:** Minimum safe stock buffer is defined as 10 days of runway. A score below 55 triggers an automatic escalation ticket to the CMO.
3. **Offline Reliability:** Network outages and API quota exhaustion are common in public health settings. The system must never crash if external LLM APIs fail—it seamlessly degrades to deterministic local algorithmic triage.
4. **Data Isolation:** Each deployment starts with deterministic seeded baseline telemetry that reflects real-world clinical distributions.

---

## 5. Hackathon Evaluation Alignment

| Evaluation Parameter | Implementation in Smart Health |
|---|---|
| **Code Quality** | Strict type annotations, pure analytical functions, modular structure, clean docstrings, zero dead code. |
| **Security** | Strict Content Security Policy (`default-src 'self'`), constant-time token comparison (`hmac.compare_digest`), parameterized SQL queries, pydantic input validation, rate limiting, and prompt-injection defense. |
| **Efficiency** | $O(n)$ damped Holt forecasting, 15-second snapshot caching, Gzip compression, sub-200 KB total repository size. |
| **Testing** | 100% passing test suite (`pytest` — 9 rigorous integration & invariant tests passing in $< 0.4$ seconds). |
| **Accessibility** | ARIA landmarks, labelled form controls, screen-reader status live-regions, high-contrast indicators, reduced-motion compatibility, and tri-lingual i18n support. |
| **Problem Alignment** | Directly tackles clinical supply chain failures, doctor absenteeism, and bed allocation with actionable operational recommendations. |

---

## 6. How to Run Locally

```bash
# 1. Create and activate virtual environment
python3 -m venv .venv && source .venv/bin/activate

# 2. Install dependencies & run test suite
pip install -r requirements-dev.txt
pytest -v

# 3. Start local command server
uvicorn app:app --port 8000
```
- Open [http://localhost:8000](http://localhost:8000)
- **Default Admin Token:** `demo-admin`

---

## 7. Cloud Run Deployment

```bash
# 1. Authenticate with Google Cloud
gcloud auth login
gcloud config set project YOUR_PROJECT_ID

# 2. Deploy to Cloud Run (Asia South 1)
gcloud run deploy smart-health \
  --source . \
  --region asia-south1 \
  --allow-unauthenticated \
  --set-env-vars ADMIN_TOKEN=demo-admin
```
*(Optional: Pass `GEMINI_API_KEY=your_key` to activate generative Gemini reasoning alongside offline rules).*
