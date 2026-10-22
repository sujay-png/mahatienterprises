/**
 * Centralized Dynamic SEO Configuration and Engine for Mahati Enterprises
 * Provides metadata (title, description, keywords, canonical, robots),
 * OpenGraph, Twitter cards, and Schema.org JSON-LD structured data.
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface OpenGraphConfig {
  title?: string;
  description?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  image?: string;
  imageWidth?: number | string;
  imageHeight?: number | string;
  imageAlt?: string;
  siteName?: string;
  locale?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export interface TwitterConfig {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  site?: string;
  creator?: string;
}

export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonical?: string;
  robots?: string;
  author?: string;
  publisher?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  faq?: FaqItem[];
  schema?: Record<string, any> | Array<Record<string, any>>;
  openGraph?: OpenGraphConfig;
  twitter?: TwitterConfig;
}

export interface SeoProps extends SeoConfig {
  seo?: Partial<SeoConfig>;
}

export interface ResolvedSeo {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  robots: string;
  author: string;
  publisher: string;
  openGraph: Required<Omit<OpenGraphConfig, 'publishedTime' | 'modifiedTime' | 'author' | 'section' | 'tags'>> & {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  twitter: Required<TwitterConfig>;
  schema: Record<string, any>;
}

export const SITE_CONFIG = {
  siteUrl: 'https://www.mahatienterprises.com',
  siteName: 'Mahati Enterprises',
  defaultTitle: 'Top Solar Suppliers in Udupi | Mahati Enterprises',
  titleTemplate: '%s | Mahati Enterprises',
  defaultDescription:
    'Looking for reliable solar suppliers in Udupi? Mahati Enterprises offers top solar products, UPS systems, and batteries for homes and businesses.',
  defaultKeywords: [
    'Mahati Enterprises',
    'solar power Karnataka',
    'solar panels Udupi',
    'solar suppliers in udupi',
    'solar suppliers Mangalore',
    'rooftop solar installation',
    'PM Surya Ghar subsidy 2026',
    'on-grid solar system',
    'off-grid solar system',
    'hybrid solar inverter',
    'UPS batteries',
    'online UPS Karnataka',
    'batteries',
    'industrial battery solutions',
    'solar panel maintenance',
    'solar products'
  ],
  defaultImage:
    'https://www.mahatienterprises.com/wp-content/uploads/elementor/thumbs/On-grid-solar-system-1-ro2fz67auo23d8s71gbrj6wq9tvr1whxwh2s1obvlk.jpeg',
  defaultImageAlt: 'Mahati Enterprises Solar & Power Solutions',
  defaultLogo:
    'https://www.mahatienterprises.com/wp-content/uploads/2026/03/cropped-Mahati-Logo-webp-e1777960062642.webp',
  author: 'Mahati Enterprises',
  publisher: 'Mahati Enterprises',
  locale: 'en_IN',
  twitterHandle: '@mahatienterprises',
  contact: {
    phonePrimary: '+91 7019351344',
    phoneSecondary: '+91 9483927870',
    email: 'team@powertronics.co.in',
    supportEmail: 'mahati@support.com',
    address: {
      street:
        "Shop No. 5-1-27A4 Ground floor, Sri Vasudev' Building, opposite Swagtha Gopura, Kinnimulky",
      city: 'Udupi',
      state: 'Karnataka',
      postalCode: '576101',
      country: 'IN'
    },
    geo: {
      latitude: '13.3323',
      longitude: '74.7471'
    },
    openingHours: 'Mo-Su 09:00-18:00'
  }
};

/**
 * Pre-defined SEO metadata for all known static routes.
 * Automatically merged and resolved by getSeoData().
 */
export const PAGE_SEO_CONFIGS: Record<string, SeoConfig> = {
  '/': {
    title: 'Top Solar Suppliers in Udupi | Mahati Enterprises',
    canonical: 'https://www.mahatienterprises.com/',
    description:
      'Looking for reliable solar suppliers in Udupi? Mahati Enterprises offers top solar products, UPS systems, and batteries for homes and businesses.',
    keywords: [
      'solar rooftop installation Karnataka',
      'solar panel company Udupi',
      'solar suppliers in udupi',
      'solar suppliers Mangalore',
      'UPS battery dealers Karnataka',
      'PM Surya Ghar Muft Bijli Yojana',
      'commercial solar installer',
      'batteries'
    ],
    type: 'website'
  },
  '/about': {
    title: 'About Us | Certified Solar Energy & Power Experts',
    description:
      'Learn about Mahati Enterprises, an authorized and certified renewable power solutions provider specializing in rooftop solar installations and UPS backup across Karnataka.',
    keywords: [
      'about Mahati Enterprises',
      'solar contractor Karnataka',
      'certified solar installers',
      'renewable energy company Udupi',
      'solar channel partner Karnataka'
    ],
    type: 'website'
  },
  '/services': {
    title: 'Solar & Power Services | Consultation, Installation & Maintenance',
    description:
      'End-to-end solar power and backup services including site survey, solar design, subsidy assistance, BESCOM/MESCOM grid liaison, installation, and preventative maintenance.',
    keywords: [
      'solar installation service',
      'solar subsidy assistance Karnataka',
      'net metering approval Karnataka',
      'solar panel maintenance service',
      'UPS battery maintenance'
    ],
    type: 'website'
  },
  '/products': {
    title: 'Products: Solar Solutions, UPS Systems & Batteries | Mahati Enterprises',
    description:
      'Explore high-quality products from Mahati Enterprises, including solar panels, UPS systems, batteries and services.',
    keywords: [
      'solar panels',
      'solar inverters',
      'industrial batteries',
      'online UPS',
      'tubular batteries',
      'lithium-ion solar batteries',
      'solar products'
    ],
    type: 'website'
  },
  '/products/solar': {
    title: 'Solar Energy Solutions | Rooftop, On-Grid & Off-Grid Solar Systems',
    description:
      'High-efficiency monocrystalline solar panels, rooftop systems, and smart inverters tailored for residential, commercial, and agricultural power needs.',
    keywords: [
      'monocrystalline solar panels',
      'on-grid solar system Karnataka',
      'off-grid solar power',
      'hybrid solar inverter',
      'residential solar panels',
      'industrial rooftop solar'
    ],
    type: 'website'
  },
  '/products/batteries': {
    title: 'Batteries | Inverter Batteries, Tubular & Industrial Power Backup',
    description:
      'Long-life tubular inverter batteries, lithium-ion energy storage, and industrial VRLA/SLA batteries designed for heavy backup and harsh environments.',
    keywords: [
      'inverter batteries Karnataka',
      'tubular battery Udupi',
      'lithium ion solar battery',
      'industrial battery replacement',
      'VRLA battery suppliers',
      'SLA battery'
    ],
    type: 'website'
  },
  '/products/ups': {
    title: 'UPS Systems | Online UPS & Offline Power Backup for Business & Home',
    description:
      'Industrial-grade online UPS systems, pure sine wave home inverters, and heavy-duty three-phase UPS for hospitals, IT offices, and manufacturing units.',
    keywords: [
      'online UPS Karnataka',
      'industrial UPS supplier',
      '3 phase UPS systems',
      'home inverter UPS',
      'pure sine wave inverter',
      'offline UPS'
    ],
    type: 'website'
  },
  '/our-work': {
    title: 'Our Work | Solar & UPS Projects Portfolio Across Karnataka',
    description:
      'Browse completed solar power installations and commercial UPS deployments across educational institutions, industries, commercial complexes, and residences.',
    keywords: [
      'solar project portfolio',
      'rooftop solar installations Karnataka',
      'solar case studies',
      'commercial solar installations',
      'Mahati Enterprises projects'
    ],
    type: 'website'
  },
  '/our-work/aj-institute': {
    title: 'AJ Institute of Engineering & Technology Solar Project | Case Study',
    description:
      'Comprehensive institutional rooftop solar power installation for AJ Institute of Engineering & Technology, delivering sustainable energy and reduced grid dependency.',
    keywords: [
      'AJ Institute solar installation',
      'institutional rooftop solar',
      'educational institution solar project',
      'commercial solar installation Mangalore'
    ],
    type: 'article'
  },
  '/our-work/chandrakanth': {
    title: 'Chandrakanth Solar Installation | Residential Case Study',
    description:
      'High-efficiency residential rooftop solar installation delivering clean energy, subsidy savings, and zero electricity bills for Chandrakanth residence.',
    keywords: [
      'residential solar case study',
      'home rooftop solar Karnataka',
      'PM Surya Ghar residential installation',
      'solar savings case study'
    ],
    type: 'article'
  },
  '/our-work/raghavendra': {
    title: 'Raghavendra Solar Power Deployment | Project Showcase',
    description:
      'Custom solar panel setup engineered for optimal sunlight capture and long-term energy savings at Raghavendra premises.',
    keywords: [
      'Raghavendra solar project',
      'solar panel installation Karnataka',
      'custom solar rooftop system'
    ],
    type: 'article'
  },
  '/our-work/vedavyasa-tantry': {
    title: 'Vedavyasa Tantry Solar Project | Rooftop Energy Solution',
    description:
      'Engineered solar installation with smart net-metering and inverter integration for Vedavyasa Tantry residence in coastal Karnataka.',
    keywords: [
      'Vedavyasa Tantry solar',
      'coastal solar installation Karnataka',
      'net metering solar system'
    ],
    type: 'article'
  },
  '/clients': {
    title: 'Our Clients | Trusted by Businesses, Institutions & Homeowners',
    description:
      'See why leading corporations, government bodies, universities, and thousands of homeowners across Karnataka trust Mahati Enterprises for solar and backup power.',
    keywords: [
      'Mahati Enterprises clients',
      'solar clients Karnataka',
      'commercial solar partners',
      'industrial power clients'
    ],
    type: 'website'
  },
  '/blog': {
    title: 'Blog & Solar Guides | Latest Renewable Energy Insights',
    description:
      'Expert insights, government subsidy updates (PM Surya Ghar), solar maintenance tips, battery guides, and renewable technology trends from Mahati Enterprises.',
    keywords: [
      'solar blog India',
      'solar energy insights',
      'solar subsidy guides 2026',
      'UPS battery maintenance tips',
      'solar panel reviews'
    ],
    type: 'website'
  },
  '/contact': {
    title: 'Contact Us | Get Free Solar Consultation & Site Quote',
    description:
      'Get in touch with Mahati Enterprises in Udupi & Hubli. Request a free rooftop solar site assessment, quote, or inquire about UPS and battery solutions.',
    keywords: [
      'contact Mahati Enterprises',
      'solar quote Karnataka',
      'solar consultation Udupi',
      'solar panel enquiry Mangalore',
      'UPS repair contact'
    ],
    type: 'website'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Mahati Enterprises',
    description:
      'Learn how Mahati Enterprises collects, protects, and handles your personal information when using our website and services.',
    keywords: ['privacy policy', 'Mahati Enterprises privacy'],
    type: 'website'
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions | Mahati Enterprises',
    description:
      'Review the terms of service, warranty conditions, and website usage policies for Mahati Enterprises.',
    keywords: ['terms and conditions', 'solar warranty terms'],
    type: 'website'
  },
  '/site-maps': {
    title: 'Site Map & Service Areas | Solar Installation Across Karnataka',
    description:
      'Explore our full site map and service areas including Udupi, Mangalore, Manipal, Moodabidri, Mulki, and throughout coastal Karnataka.',
    keywords: [
      'solar site map',
      'solar service areas Karnataka',
      'solar installation locations',
      'solar suppliers directory'
    ],
    type: 'website'
  }
};

/**
 * Normalizes a URL pathname (strips trailing slash, lowercases).
 */
export function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  const clean = pathname.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

/**
 * Generates an absolute canonical URL guaranteed to point to https://www.mahatienterprises.com/
 */
export function buildCanonicalUrl(pathnameOrUrl?: string): string {
  const officialDomain = 'https://www.mahatienterprises.com';

  if (!pathnameOrUrl || pathnameOrUrl === '/' || pathnameOrUrl === '') {
    return `${officialDomain}/`;
  }

  // If a full URL was passed, parse it and extract pathname
  if (pathnameOrUrl.startsWith('http://') || pathnameOrUrl.startsWith('https://')) {
    try {
      const url = new URL(pathnameOrUrl);
      const cleanPath = url.pathname.replace(/^\/+|\/+$/g, '');
      return cleanPath ? `${officialDomain}/${cleanPath}/` : `${officialDomain}/`;
    } catch {
      return `${officialDomain}/`;
    }
  }

  // If a pathname or relative string was passed
  const clean = pathnameOrUrl.split('?')[0].split('#')[0].replace(/^\/+|\/+$/g, '');
  return clean ? `${officialDomain}/${clean}/` : `${officialDomain}/`;
}

/**
 * Formats page title ensuring brand suffix consistency.
 */
export function formatTitle(title?: string): string {
  if (!title) return SITE_CONFIG.defaultTitle;
  if (title.includes(SITE_CONFIG.siteName)) return title;
  return `${title} | ${SITE_CONFIG.siteName}`;
}

/**
 * Normalizes keywords array or string into a comma-separated string.
 */
export function formatKeywords(keywords?: string | string[]): string {
  if (!keywords) return SITE_CONFIG.defaultKeywords.join(', ');

  const list: string[] = [];
  if (Array.isArray(keywords)) {
    list.push(...keywords);
  } else if (typeof keywords === 'string') {
    list.push(...keywords.split(',').map((k) => k.trim()));
  }

  // Include top brand keywords if not present
  const base = ['Mahati Enterprises', 'solar power Karnataka'];
  for (const b of base) {
    if (!list.some((k) => k.toLowerCase() === b.toLowerCase())) {
      list.push(b);
    }
  }

  return Array.from(new Set(list.filter(Boolean))).join(', ');
}

/**
 * Strips HTML tags and decodes common HTML entities for clean descriptions.
 */
export function sanitizeExcerpt(html?: string, maxLength: number = 160): string {
  if (!html) return '';
  const text = html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3).trim()}...`;
}

/**
 * Automatically creates dynamic breadcrumb items from a pathname.
 */
export function generateBreadcrumbs(pathname: string, customTitle?: string): BreadcrumbItem[] {
  const normalized = normalizePath(pathname);
  const items: BreadcrumbItem[] = [{ name: 'Home', url: `${SITE_CONFIG.siteUrl}/` }];

  if (normalized === '/') return items;

  const segments = normalized.split('/').filter(Boolean);
  let accumulatedPath = '';

  segments.forEach((seg, index) => {
    accumulatedPath += `/${seg}`;
    const isLast = index === segments.length - 1;

    let label = seg
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

    if (seg === 'products') label = 'Products';
    else if (seg === 'our-work') label = 'Our Work';
    else if (seg === 'blog') label = 'Blog';
    else if (seg === 'services') label = 'Services';
    else if (seg === 'clients') label = 'Clients';

    if (isLast && customTitle) {
      label = customTitle.replace(/\s*\|\s*Mahati Enterprises.*$/i, '').trim();
    }

    items.push({
      name: label,
      url: `${SITE_CONFIG.siteUrl}${accumulatedPath}/`
    });
  });

  return items;
}

/**
 * Builds Schema.org BreadcrumbList JSON-LD.
 */
export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Builds Schema.org Organization & LocalBusiness JSON-LD.
 */
export function generateOrganizationSchema(): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SolarEnergyContractor', 'Organization'],
    '@id': `${SITE_CONFIG.siteUrl}/#organization`,
    name: SITE_CONFIG.siteName,
    url: SITE_CONFIG.siteUrl,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_CONFIG.siteUrl}/#logo`,
      url: SITE_CONFIG.defaultLogo,
      contentUrl: SITE_CONFIG.defaultLogo,
      caption: SITE_CONFIG.siteName,
      inLanguage: 'en-IN'
    },
    image: `${SITE_CONFIG.siteUrl}/#logo`,
    telephone: SITE_CONFIG.contact.phonePrimary,
    email: SITE_CONFIG.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.contact.address.street,
      addressLocality: SITE_CONFIG.contact.address.city,
      addressRegion: SITE_CONFIG.contact.address.state,
      postalCode: SITE_CONFIG.contact.address.postalCode,
      addressCountry: SITE_CONFIG.contact.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.contact.geo.latitude,
      longitude: SITE_CONFIG.contact.geo.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    priceRange: '₹₹₹',
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Karnataka' },
      { '@type': 'City', name: 'Udupi' },
      { '@type': 'City', name: 'Mangalore' },
      { '@type': 'City', name: 'Manipal' },
      { '@type': 'City', name: 'Hubli' },
      { '@type': 'City', name: 'Moodabidri' },
      { '@type': 'City', name: 'Mulki' }
    ]
  };
}

/**
 * Builds Schema.org WebSite JSON-LD.
 */
export function generateWebSiteSchema(): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.siteUrl}/#website`,
    url: SITE_CONFIG.siteUrl,
    name: SITE_CONFIG.siteName,
    description: SITE_CONFIG.defaultDescription,
    publisher: {
      '@id': `${SITE_CONFIG.siteUrl}/#organization`
    },
    inLanguage: 'en-IN'
  };
}

/**
 * Builds Schema.org WebPage JSON-LD.
 */
export function generateWebPageSchema(
  url: string,
  title: string,
  description: string
): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      '@id': `${SITE_CONFIG.siteUrl}/#website`
    },
    about: {
      '@id': `${SITE_CONFIG.siteUrl}/#organization`
    },
    inLanguage: 'en-IN'
  };
}

/**
 * Builds Schema.org FAQPage JSON-LD.
 */
export function generateFaqSchema(faqs: FaqItem[]): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };
}

/**
 * Builds Schema.org Article / BlogPosting JSON-LD.
 */
export function generateArticleSchema(article: {
  url: string;
  title: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  section?: string;
}): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    },
    headline: article.title,
    description: article.description,
    image: article.image || SITE_CONFIG.defaultImage,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author || SITE_CONFIG.author
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.siteName,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.defaultLogo
      }
    },
    articleSection: article.section || 'Solar Energy'
  };
}

/**
 * Dynamic helper for WordPress blog posts.
 */
export function getBlogPostSeo(post: any, currentUrl?: string): Partial<SeoConfig> {
  if (!post) return {};

  const cleanDescription =
    post.excerpt ? sanitizeExcerpt(post.excerpt) : SITE_CONFIG.defaultDescription;
  const title = formatTitle(post.title);
  const canonical = currentUrl
    ? buildCanonicalUrl(currentUrl)
    : `${SITE_CONFIG.siteUrl}/blog/${post.slug}/`;

  const imageUrl = post.featuredImage?.node?.sourceUrl || SITE_CONFIG.defaultImage;
  const imageAlt = post.featuredImage?.node?.altText || post.title || SITE_CONFIG.defaultImageAlt;

  const categoryName = post.categories?.nodes?.[0]?.name || 'Solar Energy';
  const authorName = post.author?.node?.name || SITE_CONFIG.author;

  const publishedTime = post.date ? new Date(post.date).toISOString() : undefined;
  const modifiedTime = post.modified ? new Date(post.modified).toISOString() : publishedTime;

  const keywords = [
    post.title,
    categoryName,
    'solar energy blog',
    'rooftop solar guide',
    'solar power India',
    'Mahati Enterprises blog'
  ];

  const articleSchema = generateArticleSchema({
    url: canonical,
    title: post.title,
    description: cleanDescription,
    image: imageUrl,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: authorName,
    section: categoryName
  });

  return {
    title,
    description: cleanDescription,
    keywords,
    canonical,
    image: imageUrl,
    imageAlt,
    type: 'article',
    publishedTime,
    modifiedTime,
    section: categoryName,
    author: authorName,
    schema: articleSchema,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_CONFIG.siteUrl}/` },
      { name: 'Blog', url: `${SITE_CONFIG.siteUrl}/blog/` },
      { name: post.title, url: canonical }
    ]
  };
}

/**
 * Dynamic helper for location-based landing pages (/solar-suppliers-in-[location]).
 */
export function getLocationSeo(
  location: string,
  currentUrl?: string,
  faqs?: FaqItem[]
): Partial<SeoConfig> {
  const formatted = location
    ? location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()
    : 'Karnataka';

  const canonical = currentUrl
    ? buildCanonicalUrl(currentUrl)
    : `${SITE_CONFIG.siteUrl}/solar-suppliers-in-${location.toLowerCase()}/`;

  const title = `Solar Suppliers in ${formatted} | Solar Panels, UPS & Batteries`;
  const description = `Looking for solar suppliers in ${formatted}? Certified solar panel installations, rooftop solar systems, inverters, and UPS battery backup solutions with government subsidy assistance.`;

  const keywords = [
    `solar suppliers in ${formatted}`,
    `solar panels ${formatted}`,
    `rooftop solar ${formatted}`,
    `solar installation company ${formatted}`,
    `solar inverters ${formatted}`,
    `UPS dealers in ${formatted}`,
    `PM Surya Ghar subsidy ${formatted}`,
    'solar power contractors Karnataka'
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SolarEnergyContractor'],
    name: `Mahati Enterprises - Solar Suppliers in ${formatted}`,
    url: canonical,
    telephone: SITE_CONFIG.contact.phonePrimary,
    email: SITE_CONFIG.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.contact.address.street,
      addressLocality: formatted,
      addressRegion: 'Karnataka',
      postalCode: SITE_CONFIG.contact.address.postalCode,
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.325033427044273,
      longitude: 74.7408171938847
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '08:00',
        closes: '17:00'
      }
    ],
    areaServed: [
      { '@type': 'City', name: 'Mangalore' },
      { '@type': 'City', name: 'Udupi' },
      { '@type': 'City', name: 'Manipal' },
      { '@type': 'City', name: 'Mulki' },
      { '@type': 'City', name: 'Surathkal' },
      { '@type': 'City', name: 'Moodabidri' }
    ],
    image: SITE_CONFIG.defaultImage,
    priceRange: '₹₹₹'
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: `Solar Products, Solar Installation, Batteries & UPS Solutions in ${formatted}`,
    description: `Mahati Enterprises provides solar panels, solar installation services, batteries, UPS systems, on-grid solar systems, off-grid solar systems, solar engineering, permitting, and energy storage solutions in ${formatted}.`,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.siteName,
      url: SITE_CONFIG.siteUrl,
      telephone: SITE_CONFIG.contact.phonePrimary,
      email: SITE_CONFIG.contact.email
    },
    areaServed: {
      '@type': 'City',
      name: formatted
    }
  };

  return {
    title,
    description,
    keywords,
    canonical,
    type: 'article',
    schema: [localBusinessSchema, serviceSchema],
    faq: faqs,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_CONFIG.siteUrl}/` },
      { name: `Solar in ${formatted}`, url: canonical }
    ]
  };
}

/**
 * Dynamic helper for blog pagination pages (/blog?page=2).
 */
export function getBlogPaginationSeo(
  page: number = 1,
  totalPages: number = 1,
  currentUrl?: string
): Partial<SeoConfig> {
  const baseCanonical = `${SITE_CONFIG.siteUrl}/blog/`;
  const canonical = page > 1 ? `${baseCanonical}?page=${page}` : baseCanonical;

  const pageTitle =
    page > 1
      ? `Blog - Page ${page} of ${totalPages} | Mahati Enterprises`
      : 'Blog & Solar Guides | Latest Renewable Energy Insights | Mahati Enterprises';

  const pageDescription =
    page > 1
      ? `Browse solar energy guides, subsidy updates, and power backup advice - Page ${page} of ${totalPages}.`
      : 'Expert insights, government subsidy updates (PM Surya Ghar), solar maintenance tips, battery guides, and renewable technology trends from Mahati Enterprises.';

  return {
    title: pageTitle,
    description: pageDescription,
    canonical
  };
}

/**
 * Master dynamic resolver: computes all final SEO properties for any page.
 * Merges pathname defaults, page-level overrides, and generates structured schemas.
 */
export function getSeoData(
  pathname: string = '/',
  overrides?: Partial<SeoConfig> | SeoProps
): ResolvedSeo {
  const normalized = normalizePath(pathname);
  const baseConfig = PAGE_SEO_CONFIGS[normalized] || {};

  // Extract nested seo prop if passed via <BaseLayout seo={...} />
  const directOverrides = overrides && 'seo' in overrides && overrides.seo ? overrides.seo : {};
  const merged: SeoConfig = {
    ...baseConfig,
    ...(overrides || {}),
    ...directOverrides
  };

  const finalTitle = formatTitle(merged.title || baseConfig.title || SITE_CONFIG.defaultTitle);
  const finalDescription =
    merged.description || baseConfig.description || SITE_CONFIG.defaultDescription;
  const finalKeywords = formatKeywords(merged.keywords || baseConfig.keywords);
  const finalCanonical = buildCanonicalUrl(merged.canonical || pathname);
  const finalImage = merged.image || baseConfig.image || SITE_CONFIG.defaultImage;
  const finalImageAlt = merged.imageAlt || baseConfig.imageAlt || finalTitle;
  const finalType = merged.type || baseConfig.type || 'website';
  const finalRobots = merged.noindex
    ? 'noindex, nofollow'
    : merged.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  // Breadcrumbs
  const breadcrumbs =
    merged.breadcrumbs || generateBreadcrumbs(pathname, finalTitle);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // Combine schemas into a clean Schema.org @graph
  const schemaGraph: any[] = [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateWebPageSchema(finalCanonical, finalTitle, finalDescription),
    breadcrumbSchema
  ];

  if (merged.faq && merged.faq.length > 0) {
    schemaGraph.push(generateFaqSchema(merged.faq));
  }

  if (merged.schema) {
    if (Array.isArray(merged.schema)) {
      schemaGraph.push(...merged.schema);
    } else {
      schemaGraph.push(merged.schema);
    }
  }

  const finalSchema = {
    '@context': 'https://schema.org',
    '@graph': schemaGraph
  };

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    canonical: finalCanonical,
    robots: finalRobots,
    author: merged.author || SITE_CONFIG.author,
    publisher: merged.publisher || SITE_CONFIG.publisher,
    openGraph: {
      siteName: SITE_CONFIG.siteName,
      title: merged.openGraph?.title || finalTitle,
      description: merged.openGraph?.description || finalDescription,
      url: merged.openGraph?.url || finalCanonical,
      type: merged.openGraph?.type || finalType,
      image: merged.openGraph?.image || finalImage,
      imageWidth: merged.openGraph?.imageWidth || 1200,
      imageHeight: merged.openGraph?.imageHeight || 630,
      imageAlt: merged.openGraph?.imageAlt || finalImageAlt,
      locale: merged.openGraph?.locale || SITE_CONFIG.locale,
      publishedTime: merged.openGraph?.publishedTime || merged.publishedTime,
      modifiedTime: merged.openGraph?.modifiedTime || merged.modifiedTime,
      author: merged.openGraph?.author || merged.author,
      section: merged.openGraph?.section || merged.section,
      tags: merged.openGraph?.tags || (Array.isArray(merged.keywords) ? merged.keywords : undefined)
    },
    twitter: {
      card: merged.twitter?.card || 'summary_large_image',
      title: merged.twitter?.title || finalTitle,
      description: merged.twitter?.description || finalDescription,
      image: merged.twitter?.image || finalImage,
      imageAlt: merged.twitter?.imageAlt || finalImageAlt,
      site: merged.twitter?.site || SITE_CONFIG.twitterHandle,
      creator: merged.twitter?.creator || SITE_CONFIG.twitterHandle
    },
    schema: finalSchema
  };
}
