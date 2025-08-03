import { Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import dcitmLogo from '../assets/dcitm_logo.png';

const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={dcitmLogo} 
                alt="DCITM Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground">DCITM</h3>
                <p className="text-sm text-muted-foreground">IT Management</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Simplifying technology for businesses across the DMV region with 
              reliable, future-ready IT solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@dcitm.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail size={18} />
                <span>info@dcitm.com</span>
              </a>
              
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://www.linkedin.com/company/dcitm"
                  className="p-2 bg-background-light rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.facebook.com/DCITMANAGEMENT"
                  className="p-2 bg-background-light rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/dcitm.usa"
                  className="p-2 bg-background-light rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 DCITM. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;