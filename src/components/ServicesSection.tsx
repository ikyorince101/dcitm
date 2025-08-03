import { 
  Server, 
  Shield, 
  Cloud, 
  Headphones, 
  Network, 
  Users 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Server className="text-primary" size={48} />,
      title: "Managed IT Services",
      description: "Complete IT infrastructure management, monitoring, and maintenance to keep your business running smoothly.",
      features: ["24/7 Monitoring", "Proactive Maintenance", "Regular Updates"]
    },
    {
      icon: <Shield className="text-accent" size={48} />,
      title: "Cybersecurity & Compliance",
      description: "Advanced security protocols, threat detection, and compliance solutions to protect your digital assets.",
      features: ["Threat Detection", "Security Audits", "Compliance Management"]
    },
    {
      icon: <Cloud className="text-primary" size={48} />,
      title: "Cloud Solutions",
      description: "Seamless cloud migration, management, and optimization for improved scalability and efficiency.",
      features: ["Cloud Migration", "Backup Solutions", "Scalable Infrastructure"]
    },
    {
      icon: <Headphones className="text-accent" size={48} />,
      title: "Helpdesk Support",
      description: "Dedicated technical support team providing immediate assistance for all your IT needs.",
      features: ["Quick Response", "Remote Support", "Issue Resolution"]
    },
    {
      icon: <Network className="text-primary" size={48} />,
      title: "Network Setup & Monitoring",
      description: "Professional network design, implementation, and continuous monitoring for optimal performance.",
      features: ["Network Design", "Performance Monitoring", "Troubleshooting"]
    },
    {
      icon: <Users className="text-accent" size={48} />,
      title: "IT Consulting",
      description: "Strategic IT planning and consulting to align technology investments with your business goals.",
      features: ["Strategic Planning", "Technology Assessment", "Growth Planning"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
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
      <div className="absolute top-1/2 left-0 w-64 h-64 border border-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 border border-accent/10 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default ServicesSection;