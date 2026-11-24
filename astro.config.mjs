// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.mahatienterprises.com',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'always',
  },
  redirects: {
    '/top-10-benefits-of-switching-to-solar-energy-for-homes': '/blog/benefits-of-rooftop-solar',
    '/blog/top-10-benefits-of-switching-to-solar-energy-for-homes': '/blog/benefits-of-rooftop-solar',

    '/debunking-7-common-myths-about-solar-energy-in-india': '/blog/solar-panel-myths-in-india',
    '/blog/debunking-7-common-myths-about-solar-energy-in-india': '/blog/solar-panel-myths-in-india',

    '/how-to-choose-a-reliable-solar-installer-in-karnataka': '/blog/reliable-solar-installer-karnataka',
    '/blog/how-to-choose-a-reliable-solar-installer-in-karnataka': '/blog/reliable-solar-installer-karnataka',

    '/how-to-clean-solar-panels-safely-at-home-without-voiding-your-warranty': '/blog/how-to-clean-solar-panels-safely',
    '/blog/how-to-clean-solar-panels-safely-at-home-without-voiding-your-warranty': '/blog/how-to-clean-solar-panels-safely',

    '/solar-panel-vs-diesel-generator-which-backup-makes-more-sense': '/blog/solar-generator-backup-vs-diesel-generator-comparison',
    '/blog/solar-panel-vs-diesel-generator-which-backup-makes-more-sense': '/blog/solar-generator-backup-vs-diesel-generator-comparison',

    '/solar-for-housing-societies-how-to-split-the-cost-with-your-neighbours': '/blog/solar-panels-for-apartments',
    '/blog/solar-for-housing-societies-how-to-split-the-cost-with-your-neighbours': '/blog/solar-panels-for-apartments',

    '/pm-surya-ghar-muft-bijli-yojana-complete-subsidy-guide-for-2026': '/blog/solar-subsidy-2026',
    '/blog/pm-surya-ghar-muft-bijli-yojana-complete-subsidy-guide-for-2026': '/blog/solar-subsidy-2026',

    '/privacy-policy-2': '/privacy-policy',

    '/on-grid-vs-off-grid-vs-hybrid-solar-system': '/blog/on-grid-vs-off-grid-vs-hybrid',
    '/blog/on-grid-vs-off-grid-vs-hybrid-solar-system': '/blog/on-grid-vs-off-grid-vs-hybrid',

    '/solar-batteries-lead-acid-vs-lithium-ion': '/blog/solar-batteries-lithium-ion',
    '/blog/solar-batteries-lead-acid-vs-lithium-ion': '/blog/solar-batteries-lithium-ion',

    '/5-signs-your-industrial-battery-needs-replacement-before-it-fails': '/blog/battery-replacement-signs',
    '/blog/5-signs-your-industrial-battery-needs-replacement-before-it-fails': '/blog/battery-replacement-signs',

    '/why-hybrid-solar-systems-offer-the-best-value-for-homeowners': '/blog/hybrid-solar-systems-worth',
    '/blog/why-hybrid-solar-systems-offer-the-best-value-for-homeowners': '/blog/hybrid-solar-systems-worth',

    '/best-solar-panel-systems-for-industrial-and-commercial-use': '/blog/commercial-solar-panel-system',
    '/blog/best-solar-panel-systems-for-industrial-and-commercial-use': '/blog/commercial-solar-panel-system',

    '/compare-top-solar-battery-brands-for-home-energy-storage': '/blog/best-solar-battery-for-homes',
    '/blog/compare-top-solar-battery-brands-for-home-energy-storage': '/blog/best-solar-battery-for-homes',

    '/the-science-behind-solar-panel-efficiency-improvements-in-2026': '/blog/solar-panel-efficiency-guide',
    '/blog/the-science-behind-solar-panel-efficiency-improvements-in-2026': '/blog/solar-panel-efficiency-guide',

    '/maximizing-energy-efficiency-with-hybrid-solar-power-solutions': '/blog/hybrid-solar-power-energy',
    '/blog/maximizing-energy-efficiency-with-hybrid-solar-power-solutions': '/blog/hybrid-solar-power-energy',

    '/on-grid-vs-off-grid-solar-systems-which-one-should-you-choose-for-your-home': '/blog/on-grid-vs-off-grid-solar-systems',
    '/blog/on-grid-vs-off-grid-solar-systems-which-one-should-you-choose-for-your-home': '/blog/on-grid-vs-off-grid-solar-systems',

    '/step-by-step-installing-solar-panels-at-your-residential-property': '/blog/solar-panel-installation',
    '/blog/step-by-step-installing-solar-panels-at-your-residential-property': '/blog/solar-panel-installation',

    '/the-future-of-renewable-energy-trends-to-watch-in-2026': '/blog/renewable-energy-trends-2026',
    '/blog/the-future-of-renewable-energy-trends-to-watch-in-2026': '/blog/renewable-energy-trends-2026',

    '/how-to-choose-the-right-battery-backup-system-for-your-business': '/blog/right-battery-backup-system',
    '/blog/how-to-choose-the-right-battery-backup-system-for-your-business': '/blog/right-battery-backup-system',

    '/net-metering-in-karnataka-how-it-works-and-how-to-apply': '/blog/net-metering-in-karnataka',
    '/blog/net-metering-in-karnataka-how-it-works-and-how-to-apply': '/blog/net-metering-in-karnataka',

    '/solar-panel-warranty-explained-whats-actually-covered': '/blog/solar-panel-warranty',
    '/blog/solar-panel-warranty-explained-whats-actually-covered': '/blog/solar-panel-warranty',

    '/solar-panel-sizing-guide-how-many-panels-does-your-home-actually-need': '/blog/solar-panel-sizing-guide',
    '/blog/solar-panel-sizing-guide-how-many-panels-does-your-home-actually-need': '/blog/solar-panel-sizing-guide',

    '/gst-government-incentives-on-solar-panels-what-you-actually-pay': '/blog/how-to-calculate-solar-panel-payback-period-and-roi',
    '/blog/gst-government-incentives-on-solar-panels-what-you-actually-pay': '/blog/how-to-calculate-solar-panel-payback-period-and-roi',

    '/our-work/vedavyasa-tantry': '/our-work/on-grid-solar-system-udupi',
    '/our-work/aj-institute': '/our-work/commercial-solar-system-mangalore',
    '/our-work/chandrakanth': '/our-work/solar-system-for-home-manipal',
    '/our-work/raghavendra': '/our-work/hybrid-solar-system-udupi',
    '/our-work/harikrishna-udupa': '/our-work/rooftop-solar-installation-udupi',
    '/our-work/dr-shrikiran-hebbar': '/our-work/solar-battery-storage-udupi',

    '/travel': '/',
    '/contact-us': '/contact',
    '/a-complete-guide-to-solar-panel-maintenance-and-longevity': '/blog/solar-panel-maintenance-guide',
    '/blog/a-complete-guide-to-solar-panel-maintenance-and-longevity': '/blog/solar-panel-maintenance-guide',
    '/solar-technology-services-2': '/services',
    '/ups-systems-online-vs-offline-ups-which-one-does-your-business-actually-need': '/blog/online-vs-offline-ups',
    '/blog/ups-systems-online-vs-offline-ups-which-one-does-your-business-actually-need': '/blog/online-vs-offline-ups',
    '/product-category/ups': '/ups-solutions',
    '/on-grid-vs-off-grid-systems': '/blog/on-grid-vs-off-grid-solar-systems',
    '/blog/on-grid-vs-off-grid-systems': '/blog/on-grid-vs-off-grid-solar-systems',
    '/aj-institute-of-technology-and-engineering-kottara': '/our-work/commercial-solar-system-mangalore',
    '/a-homeowners-guide-to-choosing-and-maintaining-ups-batteries': '/blog/ups-battery-maintenance-guide',
    '/blog/a-homeowners-guide-to-choosing-and-maintaining-ups-batteries': '/blog/ups-battery-maintenance-guide',
    '/right-battery-backup-system-for-business': '/blog/right-battery-backup-system',
    '/blog/right-battery-backup-system-for-business': '/blog/right-battery-backup-system',
    '/how-to-claim-solar-subsidies-in-karnataka': '/blog/solar-subsidy-in-karnataka',
    '/blog/how-to-claim-solar-subsidies-in-karnataka': '/blog/solar-subsidy-in-karnataka',
    '/ups-products': '/ups-solutions',
    '/ups-solar-products': '/products',
    '/hybrid-solar-systems': '/solar-products',
    '/off-grid-solar-systems': '/solar-products',
    '/solar-panel-maintenance-repairs': '/services',

    '/blog/tips-for-maintaining-efficiency-of-solar-panels-in-coastal-areas': '/blog/solar-panel-efficiency',
    '/tips-for-maintaining-efficiency-of-solar-panels-in-coastal-areas': '/blog/solar-panel-efficiency',

    '/blog/how-to-get-the-most-out-of-your-solar-panel-investment': '/blog/solar-panel-investment',
    '/how-to-get-the-most-out-of-your-solar-panel-investment': '/blog/solar-panel-investment',

    '/blog/how-solar-inverter-batteries-can-reduce-your-electricity-bills': '/blog/solar-inverter-batteries',
    '/how-solar-inverter-batteries-can-reduce-your-electricity-bills': '/blog/solar-inverter-batteries',

    '/blog/affordable-solar-solutions-for-small-businesses-in-2026': '/blog/affordable-solar-solutions',
    '/affordable-solar-solutions-for-small-businesses-in-2026': '/blog/affordable-solar-solutions',

    '/blog/recent-innovations-in-solar-technology-and-energy-storage': '/blog/solar-technology-and-storage',
    '/recent-innovations-in-solar-technology-and-energy-storage': '/blog/solar-technology-and-storage',

    '/blog/5-common-solar-power-mistakes-and-how-to-avoid-them': '/blog/solar-power-mistakes-to-avoid',
    '/5-common-solar-power-mistakes-and-how-to-avoid-them': '/blog/solar-power-mistakes-to-avoid',

    '/blog/top-features-to-look-for-in-residential-solar-inverter-batteries': '/blog/home-solar-inverter-batteries',
    '/top-features-to-look-for-in-residential-solar-inverter-batteries': '/blog/home-solar-inverter-batteries',
  },
});
