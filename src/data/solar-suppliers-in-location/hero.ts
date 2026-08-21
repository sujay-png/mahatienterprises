export const getHeroData = (location: string) => ({
  h1: `Solar Suppliers In ${location}`,
  h2: `Power Your Home & Business with Clean Solar Energy in ${location}`,
  paragraphs: [
    `Looking for trusted solar suppliers in ${location}?`,
    `Mahati Enterprises brings reliable, high-performance solar solutions to homes, businesses, farms, and industries across ${location} and surrounding areas.`,
    "Reduce your electricity bills, achieve energy independence, and contribute to a greener future with our advanced solar products."
  ],
  primaryButton: {
    label: "Enquire Now",
    link: "/contact/"
  },
  secondaryButton: {
    label: "See Solar Products",
    link: "#products"
  },
  image: {
    src: "https://mahatienterprises.com/wp-content/uploads/elementor/thumbs/On-grid-solar-system-1-ro2fz67auo23d8s71gbrj6wq9tvr1whxwh2s1obvlk.jpeg",
    alt: `On grid solar system installation in ${location}`
  }
});
