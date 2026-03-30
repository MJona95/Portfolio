// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mjonaf95.github.io',
  base: '/Portfolio/',  // Importante: con slash al inicio y final
  outDir: './dist',
  build: {
    format: 'directory',
    redirects: false
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});