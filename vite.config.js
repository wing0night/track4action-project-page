import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  // GitHub Pages project sites are served from /REPOSITORY-NAME/.
  // Keep local development at / while allowing an optional repository base.
  base: command === 'build' ? (process.env.GITHUB_PAGES_BASE || './') : '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
}));
