export interface ServiceCard {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
  subtitle?: string;
  points?: string[];
  isWide?: boolean;
}

export interface PreInstallationData {
  stageBadge: string;
  title: string;
  subtitle: string;
  services: ServiceCard[];
}

export const preInstallationData: PreInstallationData = {
  stageBadge: "Stage 1 - 4",
  title: "Pre-Installation",
  subtitle: "Laying the foundation for a successful solar project.",
  services: [
    {
      id: "service-01",
      number: "01",
      icon: "analytics",
      title: "Viability Studies",
      description: "Before any installation, we assess whether solar makes technical and financial sense for your site.",
      subtitle: "What we analyze",
      points: [
        "Solar potential of the site",
        "Energy consumption patterns",
        "Estimated system size and generation",
        "Return on Investment (ROI)",
        "Long-term cost savings"
      ]
    },
    {
      id: "service-02",
      number: "02",
      icon: "architecture",
      title: "Site-Specific Design",
      description: "No two roofs or plots are the same, so every system is custom-designed for the location.",
      subtitle: "Our design process includes",
      isWide: true,
      points: [
        "Detailed site assessment",
        "Panel placement optimization",
        "System layout planning",
        "Structural and electrical design",
        "Performance optimization"
      ]
    },
    {
      id: "service-03",
      number: "03",
      icon: "engineering",
      title: "Engineering",
      description: "Every system is engineered to meet industry safety and performance standards.",
      subtitle: "Engineering services include",
      points: [
        "Electrical system design",
        "Structural analysis",
        "Load calculations",
        "Grid connectivity planning",
        "System performance modeling"
      ]
    },
    {
      id: "service-04",
      number: "04",
      icon: "assignment",
      title: "Permitting",
      description: "We handle the paperwork so your project isn't held up waiting on approvals.",
      subtitle: "We assist with",
      points: [
        "Government approvals",
        "Utility permissions",
        "Regulatory compliance",
        "Documentation and filings"
      ]
    }
  ]
};