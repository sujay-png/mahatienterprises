// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.mahatienterprises.com',
  redirects: {
    '/top-10-benefits-of-switching-to-solar-energy-for-homes': '/blog/benefits-of-rooftop-solar/',
    '/blog/top-10-benefits-of-switching-to-solar-energy-for-homes': '/blog/benefits-of-rooftop-solar/',

    '/debunking-7-common-myths-about-solar-energy-in-india': '/blog/solar-panel-myths-in-india/',
    '/blog/debunking-7-common-myths-about-solar-energy-in-india': '/blog/solar-panel-myths-in-india/',

    '/how-to-choose-a-reliable-solar-installer-in-karnataka': '/blog/reliable-solar-installer-karnataka/',
    '/blog/how-to-choose-a-reliable-solar-installer-in-karnataka': '/blog/reliable-solar-installer-karnataka/',

    '/how-to-clean-solar-panels-safely-at-home-without-voiding-your-warranty': '/blog/how-to-clean-solar-panels-safely/',
    '/blog/how-to-clean-solar-panels-safely-at-home-without-voiding-your-warranty': '/blog/how-to-clean-solar-panels-safely/',

    '/solar-panel-vs-diesel-generator-which-backup-makes-more-sense': '/blog/solar-generator-backup-vs-diesel-generator-comparison/',
    '/blog/solar-panel-vs-diesel-generator-which-backup-makes-more-sense': '/blog/solar-generator-backup-vs-diesel-generator-comparison/',

    '/solar-for-housing-societies-how-to-split-the-cost-with-your-neighbours': '/blog/solar-panels-for-apartments/',
    '/blog/solar-for-housing-societies-how-to-split-the-cost-with-your-neighbours': '/blog/solar-panels-for-apartments/',

    '/pm-surya-ghar-muft-bijli-yojana-complete-subsidy-guide-for-2026': '/blog/solar-subsidy-2026/',
    '/blog/pm-surya-ghar-muft-bijli-yojana-complete-subsidy-guide-for-2026': '/blog/solar-subsidy-2026/',
  },
});
