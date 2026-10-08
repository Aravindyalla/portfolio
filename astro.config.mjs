// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Read SITE_URL from environment variable, fallback to default domain
const siteUrl = process.env.SITE_URL || 'https://aravindnaidu.dev';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});


