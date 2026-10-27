import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const source = resolve('node_modules/@ffmpeg/core/dist/esm');
const target = resolve('public/ffmpeg');
await mkdir(target, { recursive: true });
await Promise.all(['ffmpeg-core.js', 'ffmpeg-core.wasm'].map(file => copyFile(resolve(source, file), resolve(target, file))));
console.log('Prepared pinned FFmpeg core in public/ffmpeg (loaded only when MP4 is requested).');
