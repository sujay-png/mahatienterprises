export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title: string;
  description: string;
  items: FeatureItem[];
}

export const whyChooseUsData: WhyChooseUsData = {
  subtitle: "Why Choose Us",
  title: "Why Thousands Trust Us with Their Solar Switch",
  description: "We combine cutting-edge technology, expert service, and a passion for sustainability to deliver the most reliable and efficient solar solutions for homes and businesses.",
  items: [
    {
      icon: "architecture",
      title: "Tailored Solar Solutions",
      description: "Every system is sized and designed around your actual roof, load, and budget — not a one-size template."
    },
    {
      icon: "precision_manufacturing",
      title: "Premium-Quality Equipment",
      description: "We use industry-leading panels and inverters for maximum efficiency and reliability."
    },
    {
      icon: "eco",
      title: "Commitment to Sustainability",
      description: "We're driven by a future of dependable, resilient clean energy — helping you cut costs while reducing your carbon footprint."
    }
  ]
};