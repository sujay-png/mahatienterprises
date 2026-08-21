import imgHero from '../../images/project-gallery-1.jpeg';

export interface ServicesHeroData {
  tagline: string;
  title: string;
  paragraphs: string[];
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
  badgeTitle: string;
  badgeSubtitle: string;
}

export const servicesHeroData: ServicesHeroData = {
  tagline: "Mahati Enterprises",
  title: "Our Services",
  paragraphs: [
    "From your first feasibility check to years of maintenance after commissioning — one team handles every stage, so you're not coordinating multiple contractors.",
    "Our experienced team uses advanced solar technology to ensure efficient power generation, long-term performance, and sustainable energy solutions."
  ],
  ctaText: "Get In Touch",
  ctaLink: "/contact",
  imageSrc: imgHero.src,
  imageAlt: "Solar Panel Installation",
  badgeTitle: "End-to-End Solutions",
  badgeSubtitle: "Clean, dependable, and cost-effective power."
};