export interface HeroButton {
  text: string;
  href: string;
  icon?: string;
}

export interface HeroData {
  badgeIcon: string;
  badgeText: string;
  titleLine1: string;
  titleHighlight: string;
  description: string;
  primaryBtn: HeroButton;
  secondaryBtn: HeroButton;
  bgImageSrc: string;
}

export const heroData: HeroData = {
  badgeIcon: "bolt",
  badgeText: "India's Solar Leader",
  titleLine1: "Powering a Greener",
  titleHighlight: "Sustainable Future",
  description: "Comprehensive renewable energy solutions for residential, commercial, and industrial sectors. Join thousands of satisfied customers saving on energy costs.",
  primaryBtn: {
    text: "Consult Our Experts",
    href: "/contact"
  },
  secondaryBtn: {
    text: "Explore Our Work",
    href: "/projects",
    icon: "arrow_forward"
  },
  bgImageSrc: "/src/images/solar-bg.png"
};