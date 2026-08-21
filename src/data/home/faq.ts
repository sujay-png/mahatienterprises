export interface FaqItem {
  id: string;
  question: string;
  answerText?: string;
  answerList?: string[];
}

export interface FaqData {
  title: string;
  items: FaqItem[];
}

export const faqData: FaqData = {
  title: "Frequently Asked Questions (FAQs)",
  items: [
    {
      id: "cleaning-frequency",
      question: "How often should you clean the solar panels?",
      answerText: "In places that are dusty, like many cities in India, cleaning them every two weeks is best. If you live in an area that's cleaner and greener, once a month is usually enough."
    },
    {
      id: "maximizing-efficiency",
      question: "How to maximize solar panel efficiency?",
      answerList: [
        "Keep them clean: Regular washing is the easiest way to maintain performance.",
        "Correct Tilt: Make sure they are set at the best angle, usually facing south in India.",
        "Heat Management: Leave a small space between the panel and the roof so air can flow through, as overheating reduces efficiency."
      ]
    },
    {
      id: "maintenance-tips",
      question: "Are there any tips for solar panel maintenance?",
      answerList: [
        "Visual Checks: Check for cracks, loose wires, or hotspots, which are discolored areas.",
        "Monitor Output: Use the inverter's app to check daily energy production; a drop in output often means the panels need cleaning or repairs.",
        "Trim Foliage: Make sure nearby tree branches are trimmed so they don't block sunlight or drop leaves on the panels."
      ]
    },
    {
      id: "whole-home-power",
      question: "Can solar panels power your whole home all year long?",
      answerText: "Yes, but there's a catch. Solar panels can meet your total yearly energy needs, but the amount of electricity they generate changes each month. In summer, you might produce more energy than you use, and that extra goes back to the grid. During monsoon season, you might generate less, so you'd need to pull some energy from the grid. To be completely self-sufficient 24/7 without relying on the grid, you'd need a costly battery storage system."
    },
    {
      id: "local-economy-impact",
      question: "How does solar energy affect local economies?",
      answerText: "Solar energy helps create jobs in the area, especially in installing and maintaining solar systems. It also lessens the strain on the main power grid, which can result in more reliable electricity for local businesses and help keep energy costs lower for the community over time."
    }
  ]
};