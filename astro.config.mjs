// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mjonaf95.github.io',
  base: '/',  // Para página de usuario
  outDir: './dist',
  build: {
    format: 'directory',
    // Esto es importante para rutas dinámicas
    redirects: false
  },
  // Configuración para i18n
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});