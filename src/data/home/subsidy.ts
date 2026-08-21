export interface SubsidyStat {
  value: string;
  label: string;
}

export interface SubsidyData {
  title: string;
  description: string;
  stats: SubsidyStat[];
  btnText: string;
  btnHref: string;
  bgIcon: string;
}

export const subsidyData: SubsidyData = {
  title: "PM Surya Ghar Muft Bijli Yojana",
  description: "Mahati Enterprises provides solar energy solutions, solar panel installation, UPS systems, inverters, and battery solutions for residential, commercial, and industrial customers in Udupi, Karnataka. We specialize in designing, installing, and maintaining reliable solar power systems that improve energy efficiency and reduce electricity costs. Our team of experts delivers quality products, professional service, and dependable after-sales support tailored to every customer’s energy needs.\n\nAlong with our expert service, we’ll also help you claim the following subsidy benefits provided under PM Surya Ghar Muft Bijli Yojana scheme:",
  stats: [
    { value: "✅", label: "Get ₹30,000 per KW subsidy for your first 2 KW generated after the installation of solar power system" },
    { value: "✅", label: "Get an additional ₹18,000 per KW for capacity of 3 kW" },
    { value: "✅", label: "Maximum subsidy of ₹78,000 total if your system is above 3 KW — fully capped and guaranteed" },
    { value: "✅", label: "If you live in an apartment complex, your Housing Society (GHS/RWA) gets ₹18,000 per kW for common facilities including EV charging up to 500 kW capacity" }
  ],
  btnText: "Apply for Subsidy",
  btnHref: "/contact",
  bgIcon: "account_balance"
};