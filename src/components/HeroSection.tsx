import { ChevronDown } from 'lucide-react';
import heroTech from '@/assets/hero-tech.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center particle-bg overflow-hidden">
      {/* Schema Markup for WebPage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "DCITM - DC IT Management | Elite IT Solutions",
          "description": "Professional IT services for businesses across DC, Maryland, and Virginia. Managed IT, cybersecurity, cloud solutions, and 24/7 support.",
          "url": "https://dcitm.com",
          "mainEntity": {
            "@type": "Organization",
            "name": "DCITM",
            "description": "Simplifying technology for businesses nationwide and globally"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://dcitm.com"
              }
            ]
          }
        })}
      </script>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroTech} 
          alt="Tech Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 border border-primary/20 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 border border-accent/20 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-primary/30 rounded-full animate-spin opacity-70" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="stagger-animation">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground">
            <span className="text-gradient">DCITM</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-foreground">
            DC IT Management
          </h2>
        </div>
        
        <div className="stagger-animation">
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Simplifying technology for businesses nationwide and globally.
          </p>
        </div>

        <div className="stagger-animation">
          <a 
            href="#contact" 
            className="btn-tech text-base sm:text-lg inline-flex items-center space-x-2 sm:space-x-3 group"
          >
            <span>Get a Free Consultation</span>
            <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
          </a>
        </div>

        {/* Tech Stats */}
        <div className="stagger-animation mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">24/7</div>
            <div className="text-sm sm:text-base text-muted-foreground">Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">150+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">2+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Years</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">Global</div>
            <div className="text-sm sm:text-base text-muted-foreground">Reach</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ChevronDown className="text-primary" size={32} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;