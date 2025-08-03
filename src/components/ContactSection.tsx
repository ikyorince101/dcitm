import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="stagger-animation">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Ready to transform your IT infrastructure? Let's discuss how DCITM can help 
                your business thrive with reliable, cutting-edge technology solutions.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="stagger-animation flex items-center space-x-4 tech-card p-6">
                <div className="p-3 bg-background-light rounded-lg glow-primary">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Our Location</h3>
                  <p className="text-muted-foreground">Washington, DC</p>
                  <p className="text-sm text-muted-foreground">Serving nationwide and globally</p>
                </div>
              </div>

              <div className="stagger-animation flex items-center space-x-4 tech-card p-6">
                <div className="p-3 bg-background-light rounded-lg glow-accent">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <a 
                    href="mailto:info@dcitm.com" 
                    className="text-primary hover:text-accent transition-colors duration-300"
                  >
                    info@dcitm.com
                  </a>
                  <p className="text-sm text-muted-foreground">We respond within 1 hour</p>
                </div>
              </div>

              <div className="stagger-animation flex items-center space-x-4 tech-card p-6">
                <div className="p-3 bg-background-light rounded-lg glow-primary">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">24/7 Support</h3>
                  <p className="text-muted-foreground">Emergency IT support available</p>
                  <p className="text-sm text-muted-foreground">Always here when you need us</p>
                </div>
              </div>
            </div>

            {/* Quick Email Button */}
            <div className="stagger-animation">
              <a 
                href="mailto:info@dcitm.com" 
                className="btn-tech w-full flex items-center justify-center space-x-3 text-lg"
              >
                <Mail size={20} />
                <span>Email Us Directly</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="stagger-animation">
            <div className="tech-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Request a Free Consultation
              </h3>
              <form
                action="https://formspree.io/f/movlwgnz"
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground resize-none"
                    placeholder="Describe your current IT challenges and what solutions you're looking for..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-tech w-full flex items-center justify-center space-x-3 text-lg group"
                >
                  <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  <span>Send</span>
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  * We'll get back to you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-64 h-64 border border-accent/10 rounded-full translate-x-1/2 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 border border-primary/10 rounded-full -translate-x-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default ContactSection;