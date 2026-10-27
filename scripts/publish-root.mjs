import { cpSync, existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const output = resolve('dist');
const root = resolve('.');
if (!existsSync(resolve(output, 'index.html'))) {
  throw new Error('Production index.html is missing from dist.');
}
for (const name of readdirSync(output)) {
  cpSync(resolve(output, name), resolve(root, name), { recursive: true, force: true });
}
console.log('Published the production build to the repository root for GitHub Pages.');
