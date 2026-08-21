export interface CoreValueItem {
  icon: string;
  title: string;
  description: string;
  borderAccent: 'secondary' | 'primary';
}

export const coreValuesData: CoreValueItem[] = [
  {
    icon: "nature",
    title: "Sustainability First",
    description: "We prioritize long-term environmental impact by promoting clean, renewable energy solutions that help protect the planet for future generations.",
    borderAccent: "secondary"
  },
  {
    icon: "lightbulb",
    title: "Innovation Driven",
    description: "We leverage the latest technologies and smarter energy systems to deliver high-efficiency and cutting-edge solar solutions.",
    borderAccent: "primary"
  }
];