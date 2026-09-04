// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dashboard.mahatienterprises.com',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  integrations: [sitemap()],
});
