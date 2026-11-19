import { defineConfig } from 'astro/config';

// Ganti `site` dengan domain Anda (dipakai untuk canonical dan Open Graph).
export default defineConfig({
  site: 'https://web.alangmulya.workers.dev',
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    // Hasil: /id/ dan /en/. Halaman "/" ditangani oleh src/pages/index.astro.
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
