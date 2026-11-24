# Bubbli onboarding demo recorder

Visible Chromium automation for the Bubbli onboarding-to-product journey. It records a browser video and generates milestone screenshots plus timestamped JSON/SRT action captions.

## Setup
Node.js 20+, a dedicated disposable Bubbli demo creator account, and a local sample product image are required.

```powershell
npm install
npx playwright install chromium
Copy-Item automation/bubbli-demo/.env.example .env
```

Fill `.env` with `BUBBLI_EMAIL`, `BUBBLI_PASSWORD` and an absolute `BUBBLI_DEMO_IMAGE` path. Optional variables configure store identity and product details. Never commit `.env`, credentials or customer data.

## Run
```powershell
npm run demo:bubbli
```

Chrome opens visibly. The runner signs in, completes onboarding if needed, uploads a profile image, publishes the store, creates a product with an image, and opens the public store link. It pauses for manual completion of MFA/CAPTCHA or UI steps it cannot safely identify.

## Output
Each run creates `recordings/bubbli-demo-<timestamp>/` containing `browser-session.webm`, `captions.json`, `captions.srt`, `README.md` and step screenshots. Captions are action descriptions, not voice transcription. Import WebM and SRT into your video editor for a polished tutorial.

The script does not place orders, initiate payments or send enquiries. Publishing and product saving are real writes; use only a disposable demo account and sample content.
