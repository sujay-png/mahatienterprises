export interface TestimonialItem {
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  locationOrCompany: string;
  image?: string;
}

export interface TestimonialsData {
  title: string;
  items: TestimonialItem[];
}

export const testimonialsData: TestimonialsData = {
  title: "Reviews That Reflect Our Commitment",
  items: [
    {
      id: "harsha",
      rating: 5,
      quote: "Mahati Enterprises provides very good service. Staff are polite and helpful. Product quality is excellent and delivery is on time. Highly recommended 👍",
      author: "Harsha Anchan",
      role: "Customer",
      locationOrCompany: ""
    },
    {
      id: "leela",
      rating: 5,
      quote: "Mahati Enterprises provided excellent service for our solar power panel installation. The Installation was smooth, and the system works efficiently with great power output. Highly reliable and customer-friendly company. I’m very satisfied and would definitely recommend Mahati Enterprises for solar solutions.",
      author: "Leela Loka",
      role: "Customer",
      locationOrCompany: ""
    },
    {
      id: "clive",
      rating: 5,
      quote: "Recently had a 3kW solar system installed by Mahati Enterprises, and am very satisfied with their service. The team demonstrated excellent workmanship, maintained high professionalism throughout the project, and responded promptly to all queries. The installation was completed efficiently and neatly. Would highly recommend them for a reliable and quality solar solutions.",
      author: "Clive Furtado",
      role: "Customer",
      locationOrCompany: ""
    },
    {
      id: "mahesh",
      rating: 5,
      quote: "We have been associated with Mahati Enterprises since quite some time now.\n\nThey give excellent service and value for money product line.\n\nHighly recommend them for all your solar/solar related needs.",
      author: "Mahesh",
      role: "Customer",
      locationOrCompany: ""
    },
    {
      id: "creative-leela",
      rating: 5,
      quote: "Mahati Enterprises did a great job installing our solar power panels. The team was skilled, polite, and completed the work on time. The system runs perfectly and has reduced our electricity bills. Excellent service, quality materials, and good customer support. Highly recommend Mahati Enterprises for solar installations.",
      author: "Creative Leela",
      role: "Customer",
      locationOrCompany: ""
    },
    {
      id: "shankar",
      rating: 5,
      quote: "Instant response to inquiry.... detailed information.... quick delivery and installation... prompt service... What else do you need !!!!\nSuper satisfied customer",
      author: "Shankar Junior",
      role: "Customer",
      locationOrCompany: ""
    },
    {
      id: "balakrishna",
      rating: 5,
      quote: "Highly recommend Mahati Enterprises for solar installations. They handled our 5.5kW off-grid that run 3 phase motars and solar inverter battery setup for our farm, with great expertise. The installation staff is experienced and deeply knowledgeable about the tech components. Their work was fast, high-quality, and backed by prompt service. They genuinely listen to customer needs and only recommend what is actually necessary.",
      author: "Balakrishna Gadiyar",
      role: "Customer",
      locationOrCompany: ""
    },
    {
      id: "hareesha",
      rating: 5,
      quote: "Mahati Enterprises provides very good service. Staff are polite and helpful. Product quality is excellent and delivery is on time. Highly recommended 👍",
      author: "Hareesha Narayana Poojari",
      role: "Customer",
      locationOrCompany: ""
    },
    {
      id: "manthan",
      rating: 5,
      quote: "We had purchased 5kw solar system from Mahati Enerprises and it’s working great for home and my ev charging.",
      author: "Manthan Bhat",
      role: "Customer",
      locationOrCompany: ""
    },
    {
      id: "jai",
      rating: 5,
      quote: "Great service.. They have good knowledge and experience in the field. I recommend Mahati enterprises for any solar installation in your house, office or factory.",
      author: "Jai Prasad",
      role: "Customer",
      locationOrCompany: ""
    },
    {
      id: "wizdom",
      rating: 5,
      quote: "One of the best providers of UPS systems in Udupi. Their services are among the finest we have experienced.",
      author: "WiZdom Ed",
      role: "Customer",
      locationOrCompany: ""
    },
    {
      id: "shripoorna",
      rating: 5,
      quote: "we are dealing with mahati enterprises since many years very good service and verity of products",
      author: "Shripoorna Udupi",
      role: "Customer",
      locationOrCompany: ""
    },
    {
      id: "tantry",
      rating: 5,
      quote: "Cannot say enough good things about Mahati Enterprises! Their UPS is outstanding. I've recommended them to everyone I know.",
      author: "Tantry Harikrishna",
      role: "Customer",
      locationOrCompany: ""
    }
  ]
};
