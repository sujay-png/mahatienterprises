import onGridImg from "../../images/stitch-solar-3.jpeg";
import offGridImg from "../../images/stitch-solar-2.jpeg";
import hybridImg from "../../images/Hybrid-solar-system.jpg";
import waterHeaterImg from "../../images/imgi_5_Solar-water-heater.jpg";
import heatPumpImg from "../../images/Solar-heat-pumps.jpg";
import waterPumpImg from "../../images/Solar-water-pumps.jpg";
import streetLightImg from "../../images/Solar-street-lights.jpg";
import highMastImg from "../../images/37_Solar-high-mast.jpg";
import floodLightImg from "../../images/Solar-flood-lights.jpg";

export const getProductsData = (location: string) => ({
  eyebrow: "Our range",
  title: "Our Premium Solar Products",
  items: [
    {
      image: onGridImg.src,
      alt: `On grid solar system ${location}`,
      title: "On-Grid Solar Systems",
      desc: `Perfect for homes and businesses in ${location} looking to slash electricity bills through net metering. These systems feed excess power back to the grid and require minimal maintenance.`,
      benefitsHeading: "Key Benefits",
      benefits: [
        "Lower electricity bills by up to 90%",
        "Government-approved net metering",
        "High-efficiency panels for maximum output",
        `Ideal for ${location}'s urban rooftops`
      ],
      link: "/contact/"
    },
    {
      image: offGridImg.src,
      alt: `Off grid solar system ${location}`,
      title: "Off-Grid Solar Systems",
      desc: `Designed for complete energy independence — perfect for areas with frequent power cuts or remote locations around ${location}.`,
      benefitsHeading: "Key Benefits",
      benefits: [
        "Battery backup for 24×7 power",
        "No dependence on grid supply",
        "Robust performance even during monsoons",
        "Great for farmhouses and rural homes"
      ],
      link: "/contact/"
    },
    {
      image: hybridImg.src,
      alt: `Hybrid solar system ${location}`,
      title: "Hybrid Solar Systems",
      desc: "Get the best of both worlds with seamless grid connection and smart battery backup. Never worry about power outages again.",
      benefitsHeading: "Key Benefits",
      benefits: [
        "Automatic switch between grid and solar",
        "Energy storage for night-time use",
        "Smart monitoring and optimization",
        "Perfect for villas, offices & hospitals"
      ],
      link: "/contact/"
    },
    {
      image: waterHeaterImg.src,
      alt: `Solar water heater ${location}`,
      title: "Solar Water Heaters",
      desc: "Enjoy abundant hot water throughout the year at zero electricity cost. Available in pressurized and non-pressurized models.",
      benefitsHeading: "Key Benefits",
      benefits: [
        "Instant hot water for bathrooms & kitchens",
        "Suitable for homes, hotels, and hospitals",
        "Long-lasting stainless steel tanks",
        "Huge savings on water heating bills"
      ],
      link: "/contact/"
    },
    {
      image: heatPumpImg.src,
      alt: `Solar heat pumps ${location}`,
      title: "Solar Heat Pumps",
      desc: "Advanced, highly efficient water heating technology that combines solar power with heat pump efficiency — far superior to conventional geysers.",
      benefitsHeading: "Key Benefits",
      benefits: [
        "Up to 75% savings on heating costs",
        "Works efficiently even in low sunlight using ambient air",
        "Ideal for large residential complexes, hotels, hospitals & industries",
        "Consistent hot water supply 24/7"
      ],
      link: "/contact/"
    },
    {
      image: waterPumpImg.src,
      alt: `Solar water pumps ${location}`,
      title: "Solar Water Pumps",
      desc: `Reliable solar-powered pumping solutions for agriculture, irrigation, and drinking water needs in and around ${location}.`,
      benefitsHeading: "Key Benefits",
      benefits: [
        "Zero fuel and electricity cost",
        "Perfect for farms and remote areas",
        "Low maintenance and long service life",
        "Supports sustainable farming practices"
      ],
      link: "/contact/"
    },
    {
      image: streetLightImg.src,
      alt: `Solar street lights ${location}`,
      title: "Solar Street Lights",
      desc: `Bright and durable solar-powered street lights ideal for roads, residential layouts, parks, and public spaces in ${location}.`,
      benefitsHeading: "Key Benefits",
      benefits: [
        "Automatic dusk-to-dawn operation",
        "Weather-resistant and long-lasting",
        "Zero electricity bills",
        "Enhances safety and visibility at night"
      ],
      link: "/contact/"
    },
    {
      image: highMastImg.src,
      alt: `Solar high mast lights ${location}`,
      title: "Solar High Mast Lights",
      desc: "Powerful lighting solutions for large open areas like industrial yards, stadiums, playgrounds, and warehouses.",
      benefitsHeading: "Key Benefits",
      benefits: [
        "High lumen output with wide coverage",
        "Fully off-grid with solar charging",
        "Sturdy design for harsh conditions",
        "Reduces operational costs significantly"
      ],
      link: "/contact/"
    },
    {
      image: floodLightImg.src,
      alt: `Solar flood lights ${location}`,
      title: "Solar Flood Lights",
      desc: "High-intensity solar flood lights are perfect for security, compound walls, construction sites, and outdoor events.",
      benefitsHeading: "Key Benefits",
      benefits: [
        "Excellent brightness and coverage",
        "Motion sensor options available",
        "Easy installation with no wiring",
        "Ideal for commercial and industrial security"
      ],
      link: "/contact/"
    }
  ]
});
