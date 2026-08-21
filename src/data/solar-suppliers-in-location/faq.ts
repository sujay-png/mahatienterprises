export const getFaqData = (location: string) => ({
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: `1. Does solar work well in ${location} given the heavy monsoon?`,
      answer: "Yes. Panels generate power even on cloudy days. Hybrid systems with battery backup ensure uninterrupted supply through the monsoon."
    },
    {
      question: `2. Is net metering available in ${location}?`,
      answer: "Yes. We handle all net metering approvals with MESCOM so you can feed surplus power back to the grid."
    },
    {
      question: `3. How much can ${location} homes save on electricity bills?`,
      answer: "Most customers save 70–90% on monthly bills depending on system size and usage."
    },
    {
      question: `4. Are there government subsidies available in ${location}?`,
      answer: "Yes. You can avail the PM Surya Ghar Muft Bijli Yojana. Our team guides you through the entire process."
    },
    {
      question: `5. Is solar a good investment for ${location}'s commercial establishments?`,
      answer: `Absolutely. With high daytime commercial loads and rising tariffs, on-grid solar delivers strong ROI for shops, offices, and warehouses in ${location}.`
    }
  ]
});
