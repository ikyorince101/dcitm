import { Shield, Clock, MapPin, Users } from 'lucide-react';
import aboutTeam from '@/assets/about-team.jpg';

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="text-primary" size={32} />,
      title: "Security First",
      description: "Enterprise-grade security protocols protecting your business data"
    },
    {
      icon: <Clock className="text-accent" size={32} />,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support for uninterrupted operations"
    },
    {
      icon: <MapPin className="text-primary" size={32} />,
      title: "Local Expertise",
      description: "Deep understanding of DMV business landscape and requirements"
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: "Dedicated Team",
      description: "Experienced professionals committed to your technology success"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="stagger-animation">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-gradient">DCITM</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We provide turnkey IT infrastructure, cybersecurity, and support tailored to DMV-based businesses. 
                Reliable, local, and future-ready.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of certified professionals brings decades of combined experience in enterprise IT solutions, 
                helping businesses nationwide and globally achieve their technology goals 
                with confidence and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="stagger-animation tech-card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-background-light rounded-lg glow-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="stagger-animation">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-lg opacity-20"></div>
              <img 
                src={aboutTeam} 
                alt="DCITM Team" 
                className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover border border-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-accent/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;