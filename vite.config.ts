import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  optimizeDeps: { exclude: ['@ffmpeg/ffmpeg'] },
  server: { watch: { ignored: ['**/public/ffmpeg/**'] } },
});
