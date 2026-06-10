import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import rehypeExternalLinks from './src/lib/rehype-external-links.mjs';

export default defineConfig({
  site: 'https://routewonder.studio',
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap(), tailwind()],
  markdown: {
    rehypePlugins: [rehypeExternalLinks],
  },
});
