import { Link } from "react-router-dom";
import { Heart, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-burgundy-dark text-cream pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <h3 className="font-heading text-2xl font-bold mb-4">
                Vibe<span className="text-gold">Glow</span>
              </h3>
            </Link>
            <p className="font-body text-cream/70 leading-relaxed mb-6">
              Creating timeless celebrations that honor tradition while embracing modern elegance.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-cream/10 hover:bg-gold rounded-full flex items-center justify-center transition-all duration-300 hover:text-foreground"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Events", href: "/events" },
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-cream/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {["Wedding Planning", "Engagement Ceremonies", "Reception Events", "Floral Design", "Photography", "Catering"].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="font-body text-cream/70 hover:text-gold transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Stay Updated</h4>
            <p className="font-body text-cream/70 mb-4">
              Subscribe to receive inspiration and updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-cream/10 border border-cream/20 rounded-lg font-body text-cream placeholder:text-cream/50 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-gold text-foreground font-body font-semibold rounded-lg hover:bg-gold-light transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-cream/50 text-sm">
            © 2024 VibeGlow Events. All rights reserved.
          </p>
          <p className="font-body text-cream/50 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-gold fill-gold" /> for celebrations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
