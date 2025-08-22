// FAQ Schema component that can be added to any page
const FAQSchema = () => {
  const faqs = [
    {
      question: "What IT services does DCITM provide?",
      answer: "DCITM provides comprehensive IT services including Managed IT Services, Cybersecurity & Compliance, Cloud Solutions, Helpdesk Support, Network Setup & Monitoring, and IT Consulting for businesses across DC, Maryland, and Virginia."
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Yes, we provide 24/7 technical support to ensure your business operations continue smoothly. Our average response time is 15 minutes for emergency issues."
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve businesses in Washington DC, Maryland, and Virginia (DMV region), but we also provide remote IT support services nationwide and globally."
    },
    {
      question: "How much do your IT services cost?",
      answer: "We offer custom flat-rate plans designed to fit your budget and specific IT needs. Contact us for a free consultation and personalized quote based on your requirements."
    },
    {
      question: "What makes DCITM different from other IT companies?",
      answer: "DCITM offers local expertise with global reach, 24/7 support, transparent flat-rate pricing, certified professionals, and a proven track record with 150+ satisfied clients and 99.9% uptime guarantee."
    }
  ];

  return (
    <>
      {/* FAQ Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </>
  );
};

export default FAQSchema;
