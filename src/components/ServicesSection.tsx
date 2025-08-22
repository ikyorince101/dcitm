import {
  Server,
  Shield,
  Cloud,
  Megaphone,
  Code,
  Palette
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    // Reordered: bring previous bottom 3 to top
    {
      icon: <Megaphone className="text-accent" size={48} />,
      title: "Digital Marketing",
      description:
        "Full-stack digital growth services to drive awareness, traffic, and leads across channels.",
      features: [
        "Social Media Management & Marketing",
        "SEO & AEO",
        "Ad Campaigns"
      ]
    },
    {
      icon: <Palette className="text-primary" size={48} />,
      title: "Web & App Design",
      description:
        "Modern web and mobile app design with stunning UI/UX that converts and delights.",
      features: [
        "Web Design",
        "App Design",
        "Stunning UI/UX"
      ]
    },
    {
      icon: <Code className="text-accent" size={48} />,
      title: "Software Solutions",
      description:
        "Custom software and web solutions with secure payments and intelligent automation.",
      features: [
        "Software Development",
        "Secure Payment Gateways",
        "AI Implementations"
      ]
    },

    // Previous top 3 moved to bottom
    {
      icon: <Server className="text-primary" size={48} />,
      title: "Managed IT Services",
      description:
        "Complete IT infrastructure management, monitoring, and maintenance to keep your business running smoothly.",
      features: ["24/7 Monitoring", "Proactive Maintenance", "Regular Updates"]
    },
    {
      icon: <Shield className="text-accent" size={48} />,
      title: "Cybersecurity & Compliance",
      description:
        "Advanced security protocols, threat detection, and compliance solutions to protect your digital assets.",
      features: ["Threat Detection", "Security Audits", "Compliance Management"]
    },
    {
      icon: <Cloud className="text-primary" size={48} />,
      title: "Cloud & Network Solutions",
      description:
        "Seamless cloud migration and robust network design with continuous monitoring for performance and reliability.",
      features: ["Cloud Migration", "Scalable Infrastructure", "Network Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Schema Markup for Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "provider": {
            "@type": "Organization",
            "name": "DCITM - DC IT Management"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
    "name": "Services Catalog",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
      "name": "Digital Marketing",
      "description": "Full-stack digital growth services including social, SEO/AEO, and paid campaigns",
      "serviceType": "Digital Marketing",
      "category": "Marketing"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
      "name": "Web & App Design",
      "description": "Modern web and mobile app design with stunning UI/UX",
      "serviceType": "Design",
      "category": "Software / Design"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
      "name": "Software Solutions",
      "description": "Custom software and web development with secure payments and AI",
      "serviceType": "Software Development",
      "category": "Software"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
      "name": "Managed IT Services",
      "description": "Complete IT infrastructure management, monitoring, and maintenance",
      "serviceType": "IT Management",
      "category": "Information Technology"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
      "name": "Cybersecurity & Compliance",
      "description": "Threat detection, security audits, and compliance management",
      "serviceType": "Cybersecurity",
      "category": "Information Security"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
      "name": "Cloud & Network Solutions",
      "description": "Cloud migration, network design, and performance monitoring",
      "serviceType": "Cloud & Network",
      "category": "Cloud / Network Services"
                }
              }
            ]
          }
        })}
      </script>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 stagger-animation">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto stagger-animation">
            Comprehensive IT solutions designed to empower your business with cutting-edge technology 
            and reliable support across the DMV region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`stagger-animation tech-card group hover:scale-105 transform transition-all duration-500`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-background-light rounded-2xl glow-primary group-hover:glow-accent transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center justify-center space-x-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 stagger-animation">
          <p className="text-lg text-muted-foreground mb-8">
            Ready to transform your IT infrastructure?
          </p>
          <a href="#contact" className="btn-tech-outline">
            Discuss Your Needs
          </a>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-32 h-32 md:w-64 md:h-64 border border-primary/10 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 border border-accent/10 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default ServicesSection;