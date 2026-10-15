// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/top-10-benefits-of-switching-to-solar-energy-for-homes': '/blog/benefits-of-rooftop-solar/',
    '/blog/top-10-benefits-of-switching-to-solar-energy-for-homes': '/blog/benefits-of-rooftop-solar/',
  },
});
