# Smart Health – AI-driven Health Centre & Supply Chain Management

District command centre for PHCs/CHCs: stock-out early warnings, footfall-driven demand forecasts, redistribution advice,
centre scoring with automatic escalation, and a multilingual (English / हिन्दी / ಕನ್ನಡ) assistant.

| Judging criterion | Where it is addressed |
|---|---|
| Problem alignment | Stock, footfall, beds, doctor attendance, test audits; forecasts; redistribution; auto-flag + escalation |
| Code quality | Single typed FastAPI module, pure functions for analytics, DOM built without `innerHTML` |
| Security | Strict CSP + security headers, admin token (constant-time compare), pydantic validation, parameterised SQL, rate limits, prompt-injection guard for the LLM |
| Efficiency | 15 s snapshot cache, gzip, damped-Holt O(n) forecasts, zero-dependency frontend (repo ≈ 60 KB) |
| Testing | `pytest` – 9 tests (API, auth, validation, forecast, redistribution invariants, i18n assistant) |
| Accessibility | Semantic landmarks, skip link, labelled controls, table captions + data tables for every chart, shape + text status (not colour only), focus rings, reduced-motion, `lang` switching |

## Run locally
```bash
python -m venv .venv && source .venv/bin/activate      # Windows: .venv\Scripts\activate
pip install -r requirements-dev.txt
pytest -q
uvicorn app:app --reload --port 8080                     # open http://localhost:8080
```
Admin actions (escalate / resolve / `PUT /api/centres/{id}`) need the `X-Admin-Token` header; locally the token is `demo-admin`.

## Deploy to Cloud Run
```bash
gcloud config set project YOUR_PROJECT_ID
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com
gcloud run deploy smart-health --source . --region asia-south1 --allow-unauthenticated --max-instances 1 \
  --set-env-vars ADMIN_TOKEN=choose-a-secret
```
Optional: add `GEMINI_API_KEY=...` to `--set-env-vars` to let the assistant answer with Gemini (falls back to built-in rules).
`--max-instances 1` keeps the demo SQLite state consistent (data is re-seeded on cold start).
