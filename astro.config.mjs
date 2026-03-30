// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mjonaf95.github.io',
  base: '/',  // Para página de usuario, es '/'
  outDir: './dist',
  build: {
    format: 'directory'
  }
});