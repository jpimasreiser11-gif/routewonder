import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'http://routewonder.studio',
  integrations: [sitemap()],
});
