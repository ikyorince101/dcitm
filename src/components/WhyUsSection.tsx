import { useState, useEffect } from 'react';
import { Clock, MapPin, DollarSign, Award, CheckCircle, Zap } from 'lucide-react';

const WhyUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    uptime: 0,
    response: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('why-us');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const targets = { clients: 150, uptime: 99.9, response: 15, satisfaction: 98 };
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          clients: Math.floor(targets.clients * progress),
          uptime: Math.min(targets.uptime, parseFloat((targets.uptime * progress).toFixed(1))),
          response: Math.floor(targets.response * progress),
          satisfaction: Math.floor(targets.satisfaction * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targets);
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const trustPoints = [
    {
      icon: <Clock className="text-primary" size={32} />,
      title: "24/7 Local Support",
      description: "Round-the-clock technical support from our local DMV team, ensuring immediate assistance when you need it most."
    },
    {
      icon: <MapPin className="text-accent" size={32} />,
      title: "Trusted Nationwide & Globally",
      description: "Proven track record serving businesses worldwide with tailored IT solutions and remote support capabilities."
    },
    {
      icon: <DollarSign className="text-primary" size={32} />,
      title: "Custom Flat-Rate Plans",
      description: "Transparent, predictable pricing with custom flat-rate plans designed to fit your budget and needs."
    },
    {
      icon: <Award className="text-accent" size={32} />,
      title: "Certified Professionals",
      description: "Our team holds industry-leading certifications and brings years of enterprise-level experience."
    }
  ];

  const stats = [
    {
      number: counters.clients,
      suffix: "+",
      label: "Active Clients",
      color: "text-primary"
    },
    {
      number: counters.uptime,
      suffix: "%",
      label: "Uptime Guarantee",
      color: "text-accent"
    },
    {
      number: counters.response,
      suffix: " min",
      label: "Avg Response Time",
      color: "text-primary"
    },
    {
      number: counters.satisfaction,
      suffix: "%",
      label: "Client Satisfaction",
      color: "text-accent"
    }
  ];

  return (
    <section id="why-us" className="py-20 relative bg-background-light overflow-hidden">
      {/* Schema Markup for Organization Features */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "DCITM - DC IT Management",
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "name": "Industry Certifications",
              "description": "Our team holds industry-leading certifications and brings years of enterprise-level experience"
            }
          ],
          "makesOffer": [
            {
              "@type": "Offer",
              "name": "24/7 Local Support",
              "description": "Round-the-clock technical support from our local DMV team",
              "availability": "24/7"
            },
            {
              "@type": "Offer", 
              "name": "Custom Flat-Rate Plans",
              "description": "Transparent, predictable pricing with custom flat-rate plans designed to fit your budget and needs"
            }
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "38.9072",
              "longitude": "-77.0369"
            },
            "geoRadius": "Global"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150",
            "bestRating": "5"
          },
          "slogan": "Experience the difference of working with a dedicated, local IT partner committed to your business success"
        })}
      </script>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 stagger-animation">
            Why Choose <span className="text-gradient">DCITM</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto stagger-animation">
            Experience the difference of working with a dedicated, local IT partner 
            committed to your business success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center stagger-animation tech-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {typeof stat.number === 'number' && stat.number % 1 !== 0 
                  ? stat.number.toFixed(1) 
                  : stat.number}{stat.suffix}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustPoints.map((point, index) => (
            <div 
              key={index}
              className="stagger-animation tech-card group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 p-4 bg-background rounded-xl glow-primary group-hover:glow-accent transition-all duration-300">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="mt-16 bg-card rounded-2xl p-8 tech-card">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            What Sets Us Apart
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "No long-term contracts required",
              "Same-day response guarantee",
              "Proactive monitoring & maintenance",
              "Local team, local expertise",
              "Transparent, flat-rate pricing",
              "Enterprise-grade security protocols"
            ].map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 stagger-animation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="text-primary flex-shrink-0" size={20} />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 stagger-animation">
          <div className="bg-gradient-primary rounded-2xl p-8 tech-card">
            <Zap className="text-white mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the DCITM Difference?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join over 150 businesses worldwide who trust DCITM for their IT needs.
            </p>
            <a href="#contact" className="btn-tech-outline bg-white text-primary hover:bg-primary hover:text-white border-white">
              Start Your Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 border border-primary/5 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 border border-accent/5 rounded-full animate-pulse opacity-50" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default WhyUsSection;