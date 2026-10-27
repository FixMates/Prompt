# Prompt Master — Prompt-to-Reel Studio

A local-first browser editor for building vertical prompt-to-reel videos. Prompts, photos, logos, and music stay in the browser; the editor does not require an account, paid API, or server service.

## Run locally

- Node.js 20 or newer
- npm

```sh
npm install
npm run dev
```

The dev server serves `app-src/index.html`. The build generates the standalone GitHub Pages site at the repository root as well as `dist/`:

```sh
npm test
npm run build
npm run preview
```

`npm run build` runs TypeScript checking, Vite bundling, and the root publishing copy. `npm test` runs the unit tests for captions, timeline timing, transitions, crop positioning, import validation, and export preflight.

## Create a reel

1. Add a prompt, the original photo, and the generated result image. The result image is required for export and is never silently substituted with the original.
2. Optionally upload a logo for the black/purple intro. Adjust its size, title, prompt number, intro length, and animation. The prompt number can follow the project ID.
3. Choose 10, 15, 20, or 30 seconds. The shared timeline plays intro, original image, prompt, a short transition, the clear result image, and a link-in-bio CTA.
4. Set image fit and focal point; choose a crossfade, horizontal or vertical wipe, center reveal, or split-screen transition.
5. Edit each text element's wording, visibility, font, size, weight, colors, background, alignment, shadow, spacing, wrapping, animation, scene timing, position, and lock. Templates, safe guides, and drag positioning are available.
6. Optionally trim and mix local audio. Preview and export use the same timeline renderer.
7. Export H.264 MP4 or WebM at 1080×1920. MP4 encoding and rendering happen locally in the browser.

## Projects and privacy

Save, load, duplicate, or export/import JSON project settings. Small logos may be included in a saved project when browser storage permits. Photos and music must be selected again after reloading; media files are not stored in project JSON. Use **Clear saved** to remove locally saved project settings.

## GitHub Pages

The production build copies compiled assets and HTML to the repository root for branch-based GitHub Pages hosting. Run `npm run build` before publishing a new version. No deployment is performed by this project.

## Notes

The FFmpeg WebAssembly core is loaded only for MP4 export; WebM export uses the browser recorder. Use a current desktop Chrome or Edge for the broadest Canvas capture and codec support. The FFmpeg core package declares GPL-2.0-or-later; review its license obligations before redistributing the built output.
