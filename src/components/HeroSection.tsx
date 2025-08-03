import { ChevronDown } from 'lucide-react';
import heroTech from '@/assets/hero-tech.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center particle-bg overflow-hidden">
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
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-accent/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <div className="stagger-animation">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            <span className="text-gradient">DCITM</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-foreground">
            DC IT Management
          </h2>
        </div>
        
        <div className="stagger-animation">
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Simplifying technology for businesses nationwide and globally.
          </p>
        </div>

        <div className="stagger-animation">
          <a 
            href="#contact" 
            className="btn-tech text-lg inline-flex items-center space-x-3 group"
          >
            <span>Get a Free Consultation</span>
            <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
          </a>
        </div>

        {/* Tech Stats */}
        <div className="stagger-animation mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">150+</div>
            <div className="text-muted-foreground">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2+</div>
            <div className="text-muted-foreground">Years</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Global</div>
            <div className="text-muted-foreground">Reach</div>
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