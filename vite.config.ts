import { defineConfig } from 'vite';

export default defineConfig({
  root: 'app-src',
  base: './',
  publicDir: '../public',
  optimizeDeps: { exclude: ['@ffmpeg/ffmpeg'] },
  build: { outDir: '../dist', emptyOutDir: true },
  server: { watch: { ignored: ['**/public/ffmpeg/**','**/ffmpeg/**','**/dist/**','**/assets/**'] } },
});
