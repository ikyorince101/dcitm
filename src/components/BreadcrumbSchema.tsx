// Breadcrumb Schema component
const BreadcrumbSchema = () => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dcitm.com"
          },
          {
            "@type": "ListItem", 
            "position": 2,
            "name": "About",
            "item": "https://dcitm.com#about"
          },
          {
            "@type": "ListItem",
            "position": 3, 
            "name": "Services",
            "item": "https://dcitm.com#services"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Why Choose Us",
            "item": "https://dcitm.com#why-us"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Contact",
            "item": "https://dcitm.com#contact"
          }
        ]
      })}
    </script>
  );
};

export default BreadcrumbSchema;
