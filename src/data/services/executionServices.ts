import type { ImageMetadata } from 'astro';

import imgChandra3 from '../../images/Chandrakanth kramballi3.jpg';
import imgAj2 from '../../images/AJ institute2.jpg';
import imgVedvyas3 from '../../images/VedvyasTantra3.jpg';
import imgSolarBg from '../../images/solar-bg.png';
import imgAj4 from '../../images/AJ institute4.jpg';
import imgChandra5 from '../../images/Chandrakanth kramballi5.jpg';

export interface ServiceCard {
  id: string;
  number: string;
  title: string;
  description: string;
  subtitle?: string;
  points: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface ExecutionSectionData {
  stageBadge: string;
  title: string;
  subtitle: string;
  services: ServiceCard[];
}

export const executionSectionData: ExecutionSectionData = {
  stageBadge: "Stage 5 - 12",
  title: "Execution & Maintenance",
  subtitle: "Turning plans into reality and ensuring long-term performance.",
  services: [
    {
      id: "service-05",
      number: "05",
      title: "Equipment Procurement",
      description: "We source panels, inverters, and batteries directly, so what's specified in the design is what actually gets installed.",
      subtitle: "This covers",
      points: [
        "Sourcing quality-certified solar panels and inverters",
        "Vendor and warranty management",
        "Matching equipment specs to system design",
        "Cost-efficient bulk procurement for larger projects"
      ],
      imageUrl: imgAj2.src,
      imageAlt: "Professional construction site for a commercial solar installation."
    },
    {
      id: "service-06",
      number: "06",
      title: "Site Work",
      description: "Preparing the physical location to securely accommodate the solar infrastructure with minimal disruption.",
      subtitle: "This includes",
      points: [
        "Clearing and leveling ground areas",
        "Roof integrity inspections and reinforcements",
        "Establishing safe access routes for equipment",
        "Laying foundational trenching for electrical lines"
      ],
      imageUrl: imgChandra3.src,
      imageAlt: "Site preparation and clearing for solar array."
    },
    {
      id: "service-07",
      number: "07",
      title: "Construction",
      description: "Building the structural framework required to support and orient the solar panels for maximum efficiency.",
      subtitle: "Construction includes",
      points: [
        "Erecting ground-mount or carport steel structures",
        "Installing roof attachments and rails",
        "Weatherproofing all structural penetrations",
        "Ensuring structural compliance with local wind loads"
      ],
      imageUrl: imgAj2.src,
      imageAlt: "Construction of solar panel mounting structures."
    },
    {
      id: "service-08",
      number: "08",
      title: "Installation",
      description: "The physical setup of panels, inverters, wiring, and mounting structures, completed by our trained technicians.",
      subtitle: "Our installation process ensures",
      points: [
        "Correct panel orientation and tilt",
        "Secure, code-compliant mounting",
        "Proper electrical connections and grounding",
        "Pre-commissioning quality checks"
      ],
      imageUrl: imgChandra3.src,
      imageAlt: "Workers in safety gear installing solar panels onto mounting structure."
    },
    {
      id: "service-09",
      number: "09",
      title: "Commissioning",
      description: "Rigorous testing and official activation of the solar plant to ensure performance meets engineering models.",
      subtitle: "Commissioning includes",
      points: [
        "System testing and performance verification",
        "Grid synchronization (for on-grid systems)",
        "Safety and compliance checks",
        "Handover with system documentation"
      ],
      imageUrl: imgAj4.src,
      imageAlt: "Engineer configuring and testing solar inverters."
    },
    {
      id: "service-10",
      number: "10",
      title: "Rooftop Systems",
      description: "Specialized deployment of rooftop-specific solar infrastructure for commercial, industrial, and residential buildings.",
      subtitle: "Suited for",
      points: [
        "Residential terraces and sloped roofs",
        "Commercial and industrial rooftops",
        "Both on-grid and off-grid configurations"
      ],
      imageUrl: imgVedvyas3.src,
      imageAlt: "Finished rooftop solar array installation."
    },
    {
      id: "service-11",
      number: "11",
      title: "Ground Mounted Systems",
      description: "Large-scale deployment of solar arrays on unused land for maximum generation capacity.",
      subtitle: "Suited for",
      points: [
        "Industrial and institutional sites",
        "Larger capacity requirements",
        "Sites where rooftop space is limited or unsuitable"
      ],
      imageUrl: imgSolarBg.src,
      imageAlt: "Large scale ground mounted solar farm."
    },
    {
      id: "service-12",
      number: "12",
      title: "Operation & Maintenance",
      description: "Ongoing support to maximize your system's lifespan and ensure peak energy generation year after year.",
      subtitle: "Suited for",
      points: [
        "Residential terraces and sloped roofs",
        "Commercial and industrial rooftops",
        "Both on-grid and off-grid configurations"
      ],
      imageUrl: imgChandra5.src,
      imageAlt: "Technician performing routine maintenance on solar panels."
    }
  ]
};
