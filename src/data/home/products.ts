import solarPanelImg from "../../images/solar pannel2.png";
import appliancesImg from "../../images/Appliances.png";
import inverterBatteryImg from "../../images/inverter battery.png";

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
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
  subtitle: "Engineered Excellence",
  title: "Our Product Ecosystem",
  catalogText: "View Full Catalog",
  catalogHref: "/products",
  items: [
    {
      id: "solar-modules",
      title: "Solar Modules",
      description: "Tier-1 high-efficiency monocrystalline panels designed for maximum energy yield even in low-light conditions.",
      image: solarPanelImg.src,
      alt: "High efficiency solar panels",
      linkText: "Explore Details",
      href: "/products/solar-modules"
    },
    {
      id: "inverters-ups",
      title: "Inverters & UPS",
      description: "Intelligent power management systems that ensure seamless energy transition and grid stability for sensitive equipment.",
      image: appliancesImg.src,
      alt: "Industrial Grade UPS system",
      linkText: "Explore Details",
      href: "/products/inverters-ups"
    },
    {
      id: "energy-storage",
      title: "Energy Storage",
      description: "Next-generation LiFePO4 battery solutions providing reliable backup and optimized self-consumption rates.",
      image: inverterBatteryImg.src,
      alt: "Advanced battery storage unit",
      linkText: "Explore Details",
      href: "/products/energy-storage"
    }
  ]
};