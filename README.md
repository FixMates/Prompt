# Prompt Master — Prompt-to-Reel Studio

Prompt Master is a local-first browser editor for turning an image prompt and a locally selected image into a vertical storyboard video and a publishing package. No account, paid service, server API, or AI key is required.

## Prerequisites and installation

- Node.js 20 or newer
- npm

```sh
npm install
npm run dev
```

The `predev` hook copies the pinned FFmpeg WebAssembly core from `node_modules` into `public/ffmpeg`. Vite prints the local address when it starts. The core files total about 32 MB; they are served by the app and loaded only after the user requests MP4 export.

## Local development and production build

```sh
npm run dev
npm run build
npm run preview
```

The build runs TypeScript checking followed by Vite production bundling. Static files are written to `dist/`, including the on-demand FFmpeg core, then copied to the repository root for branch-based GitHub Pages hosting. The Vite source entry is `app-src/index.html`; the root `index.html` is the generated production page. `npm test` runs six unit tests with Node’s built-in test runner for storyboard timing and caption/hashtag generation.

## Create and export a Reel

1. Enter a prompt and select a JPEG, PNG, or WebP image up to 20 MB. Image pixels are drawn to a 9:16 canvas without stretching. Drag and drop is also supported.
2. Edit the scene overlays, duration (20, 25, or 30 seconds), image fit, CTA, and visual controls. The default 30-second scene plan scales proportionally for shorter durations, and the first five scene end points can be edited.
3. Optionally select local audio up to 30 MB. Preview it, set trim start and end points, preview the selection, adjust volume, mute and fades, and check **Mix into video** to include the selected section in export.
4. Choose an output size. The preview is lower resolution; output choices include 360p, 720p, and 1080p. Rendering uses Canvas at 24 fps.
5. Choose **Export genuine MP4** or **Export WebM**. The app renders the composed scenes (not the editor interface) to a Canvas capture. MP4 export then converts that recording locally with the included FFmpeg WebAssembly core to H.264 video and, when audio is enabled, AAC audio. Export progress, cancellation, errors, file size, and decoded preview are shown in the studio.
6. Edit or copy each publishing field, copy the full package, or download it as text.

MP4 encoding runs on one WebAssembly thread and can be much slower than native FFmpeg, particularly at 1080p. It uses additional memory for the canvas, recording, and encoder buffers. If a browser cannot record Canvas or initialize the encoder, use WebM or reduce output size. FFmpeg.wasm documents a 2 GB input limit; practical browser memory limits are usually lower. See the [FFmpeg.wasm performance notes](https://ffmpegwasm.netlify.app/docs/performance/) and [FAQ](https://ffmpegwasm.netlify.app/docs/faq/).

## Music and licensing

No soundtrack is bundled. Only publish music you own or have licensed for the intended use. Music is selected from the user's device and is not uploaded. The audio trim controls limit both track preview and the exported mix to the selected start and end points. The mix honors the selected volume, mute, and fade-in/fade-out controls. There is no track attribution to provide because the application ships no music asset.

## Projects and local storage

**Save project** stores editor settings and editable publishing text in this browser's localStorage. **Load recent** restores those settings. **Duplicate** saves a settings snapshot; **Load duplicate** restores it. Images and audio are intentionally not stored; select them again after reload. JSON export/import stores settings and edited text only. Browser storage cleanup can remove saved project settings. **Clear saved** removes Prompt Master's saved settings after confirmation.

## Privacy

Prompts, images, and music are processed locally. They are not sent to a Prompt Master server. The FFmpeg core is copied into this project during dependency installation and served from the same local app; it does not fetch user media. The stylesheet requests DM Sans and Manrope from Google Fonts. No analytics or tracking scripts are included.

## Browser compatibility and troubleshooting

Use a current desktop Chrome or Edge for Canvas capture, WebM recording, H.264 MP4 conversion, and audio mixing. The exact MediaRecorder MIME types and codecs vary by browser. Keep the app tab open while exporting. At smaller output sizes, memory use is lower and conversion is faster.

- **Encoder or codec error:** retry with WebM or use 360p/720p. Check that the core files exist in `public/ffmpeg/` (the `predev` and `prebuild` scripts copy them).
- **Image does not appear:** use JPEG, PNG, or WebP below 20 MB; very large dimensions may exceed browser decoding memory.
- **Audio does not preview:** use a browser-supported audio file and start playback from its Preview track button.
- **Clipboard denied:** the package text remains selectable for manual copying.
- **Project missing:** browser storage may have been cleared; exported JSON files can be imported again.

## Cloudflare Pages configuration

No deployment has been made. To deploy yourself on Cloudflare Pages, configure build command `npm run build` and output directory `dist`. The generated static site includes the 32 MB FFmpeg core, so include that output size in any hosting limits. No environment variables or server functions are needed.

## Third-party codec license

The included `@ffmpeg/core` 0.12.10 package declares **GPL-2.0-or-later** and includes FFmpeg and x264 components. If you redistribute this application or its `dist/` output, review and satisfy the applicable license terms and provide the corresponding license/source notices. See the [FFmpeg.wasm licensing FAQ](https://ffmpegwasm.netlify.app/docs/faq/) and the package metadata in `node_modules/@ffmpeg/core/package.json`.

## Verification completed

- `npm test` passed: 6 tests, 0 failures.
- `npm run build` passed after implementation.
- Vite returned HTTP 200 for the app and local FFmpeg core assets.
- Browser checks covered prompt/category caption generation, image upload, local music upload and preview, clipboard copy, local save/restore, and project JSON export/import.
- A low-resolution 20-second H.264 MP4 export completed and decoded as 360×640.
- The default 30-second H.264 MP4 export completed and decoded in the browser as 1080×1920, 30 seconds.
- A music-enabled MP4 export completed and decoded in-browser; the separate audio stream was not inspected with an external media probe.
- Mobile viewport was checked at 390 px with no horizontal overflow. 720p output and cross-browser behavior have not been independently verified.

Use the manual checklist in the release report for further verification.
