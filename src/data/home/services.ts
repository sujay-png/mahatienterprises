export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ServicesData {
  title: string;
  items: ServiceItem[];
}

export const servicesData: ServicesData = {
  title: "Our Services",
  items: [
    {
      id: "viability-studies",
      icon: "analytics",
      title: "Viability Studies",
      description: "Comprehensive analysis of site potential, energy needs, and financial feasibility."
    },
    {
      id: "site-specific-design",
      icon: "architecture",
      title: "Site-specific Design",
      description: "Custom solar designs tailored to your property's unique dimensions and requirements."
    },
    {
      id: "engineering",
      icon: "engineering",
      title: "Engineering",
      description: "Detailed electrical and structural engineering to ensure system safety and performance."
    },
    {
      id: "permitting",
      icon: "description",
      title: "Permitting",
      description: "Handling all local regulatory approvals, grid connectivity permits, and documentation."
    },
    {
      id: "equipment-procurement",
      icon: "inventory_2",
      title: "Equipment Procurement",
      description: "Sourcing tier-1 solar panels, inverters, and premium components for your project."
    },
    {
      id: "sitework",
      icon: "landscape",
      title: "SiteWork",
      description: "Preparing the installation site, including civil work and infrastructure preparation."
    },
    {
      id: "construction",
      icon: "construction",
      title: "Construction",
      description: "Professional construction services ensuring long-term structural integrity."
    },
    {
      id: "installation",
      icon: "build",
      title: "Installation",
      description: "Expert installation of solar panels and electrical systems by certified technicians."
    },
    {
      id: "commissioning",
      icon: "check_circle",
      title: "Commissioning",
      description: "System testing, grid synchronization, and final safety inspections before go-live."
    },
    {
      id: "rooftop-systems",
      icon: "roofing",
      title: "Rooftop systems",
      description: "Efficient solar installations designed for residential and commercial rooftops."
    },
    {
      id: "ground-mounted-systems",
      icon: "solar_power",
      title: "Ground Mounted Systems",
      description: "Scalable ground-mounted solar arrays for large properties and industrial sites."
    },
    {
      id: "operation-and-maintenance",
      icon: "settings",
      title: "Operation and Maintenance",
      description: "Ongoing monitoring, preventive maintenance, and performance optimization."
    }
  ]
};