// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Read SITE_URL from environment variable, fallback to default domain
const siteUrl = process.env.SITE_URL || 'https://aravindnaidu.dev';

/** @type {import('vite').Plugin} */
const apiDevServerPlugin = {
  name: 'api-dev-server-plugin',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url === '/api/chat' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });
        req.on('end', async () => {
          try {
            const { processChatQuery } = await server.ssrLoadModule('./api/chat.ts');
            const data = JSON.parse(body || '{}');
            const result = await processChatQuery(data.message);
            res.statusCode = result.status;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result.data));
          } catch (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: String(err) }));
          }
        });
        return;
      }

      if (req.url === '/api/contact' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });
        req.on('end', async () => {
          try {
            const { processContactSubmission } = await server.ssrLoadModule('./api/contact.ts');
            const data = JSON.parse(body || '{}');
            const result = await processContactSubmission(data);
            res.statusCode = result.status;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result.data));
          } catch (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: String(err) }));
          }
        });
        return;
      }

      next();
    });
  },
};

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [apiDevServerPlugin],
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});



