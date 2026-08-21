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
    }
  ]
};