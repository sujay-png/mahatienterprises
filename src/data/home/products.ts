import solarPanelImg from "../../images/solar pannel2.png";
import appliancesImg from "../../images/Appliances.png";
import inverterBatteryImg from "../../images/inverter battery.png";

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: any;
  alt: string;
  linkText: string;
  href: string;
}

export interface ProductsData {
  subtitle: string;
  title: string;
  catalogText: string;
  catalogHref: string;
  items: ProductItem[];
}

export const productsData: ProductsData = {
  subtitle: "WHAT WE SUPPLY",
  title: "Our Products",
  catalogText: "Products",
  catalogHref: "/products",
  items: [
    {
      id: "solar-modules",
      title: "Solar Products",
      description: "Power your home or business with our advanced solar energy solutions designed for efficiency, reliability, and sustainability. Our solar products help reduce electricity costs while promoting clean and renewable energy. We provide high-quality on-grid and off-grid solar panel systems suitable for residential, commercial, and industrial applications.",
      image: solarPanelImg,
      alt: "Solar Products",
      linkText: "Explore Solar Products",
      href: "/solar-products/"
    },
    {
      id: "inverters-ups",
      title: "UPS Solutions",
      description: "Ensure uninterrupted power supply for your critical systems with our reliable UPS (Uninterruptible Power Supply) solutions. Our UPS systems protect your equipment from power interruptions, voltage fluctuations, and unexpected outages. These systems are ideal for offices, hospitals, data centers, industries, and commercial facilities",
      image: appliancesImg,
      alt: "UPS Solutions",
      linkText: "Explore UPS Products",
      href: "/ups-solutions/"
    },
    {
      id: "energy-storage",
      title: "Batteries",
      description: "We supply high-performance industrial and backup batteries designed to deliver long-lasting power for various applications. Our batteries are built with advanced technology to ensure durability, efficiency, and consistent performance. These batteries are ideal for solar systems, UPS units, industrial equipment, and backup power systems.",
      image: inverterBatteryImg,
      alt: "Batteries",
      linkText: "Explore Batteries",
      href: "/batteries/"
    }
  ]
};
