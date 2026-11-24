# Bubbli onboarding demo recorder

Visible Chromium automation for the Bubbli onboarding-to-product journey. It records a browser video and generates milestone screenshots plus timestamped JSON/SRT action captions.

## Setup
Node.js 20+, a dedicated disposable Bubbli demo creator account, and two local images are required: a square creator logo/avatar and a product listing image.

```powershell
npm install
npx playwright install chromium
Copy-Item automation/bubbli-demo/.env.example .env
```

Fill `.env` with `BUBBLI_EMAIL`, `BUBBLI_PASSWORD`, `BUBBLI_PROFILE_IMAGE` and `BUBBLI_PRODUCT_IMAGE`. Use absolute local file paths. The profile image is uploaded during creator onboarding; the product image is uploaded when creating the product. `BUBBLI_DEMO_IMAGE` remains supported as a legacy fallback. Never commit `.env`, credentials or customer data.

## Run
```powershell
npm run demo:bubbli
```

Chrome opens visibly. The runner signs in, completes onboarding if needed, uploads a profile image, publishes the store, creates a product with an image, and opens the public store link. It pauses for manual completion of MFA/CAPTCHA or UI steps it cannot safely identify.

## Output
Each run creates `recordings/bubbli-demo-<timestamp>/` containing `browser-session.webm`, `captions.json`, `captions.srt`, `README.md` and step screenshots. Captions are action descriptions, not voice transcription. Import WebM and SRT into your video editor for a polished tutorial.

The script does not place orders, initiate payments or send enquiries. Publishing and product saving are real writes; use only a disposable demo account and sample content.
