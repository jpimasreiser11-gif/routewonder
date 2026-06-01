import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jpimasreiser11-gif.github.io/routewonder',
  base: '/routewonder',
  integrations: [sitemap()],
});
