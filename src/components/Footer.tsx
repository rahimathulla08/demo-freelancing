import { Link } from "react-router-dom";
import { Heart, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const socialIcons = [Instagram, Facebook, Youtube, Twitter];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Wedding Planning",
    "Engagement Ceremonies",
    "Reception Events",
    "Floral Design",
    "Photography",
    "Catering",
  ];

  return (
    <footer className="bg-burgundy-dark text-cream pt-14 pb-7">
      <div className="container mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
                Vibe<span className="text-gold">Glow</span>
              </h3>
            </Link>

            <p className="font-body text-cream/70 leading-relaxed text-sm md:text-base mb-4">
              Creating timeless celebrations that honor tradition while embracing modern elegance.
            </p>

            <div className="flex items-center gap-2 md:gap-3">
              {socialIcons.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 bg-cream/10 hover:bg-gold transition-all duration-300 rounded-full flex items-center justify-center hover:text-foreground"
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base md:text-lg font-bold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-cream/70 text-sm md:text-base hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-base md:text-lg font-bold mb-3">
              Our Services
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="font-body text-cream/70 text-sm md:text-base hover:text-gold transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-base md:text-lg font-bold mb-3">
              Stay Updated
            </h4>
            <p className="font-body text-cream/70 text-sm md:text-base mb-3">
              Subscribe to receive inspiration and updates.
            </p>

            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 md:px-4 md:py-3 bg-cream/10 border border-cream/20 rounded-lg font-body text-cream text-sm md:text-base placeholder:text-cream/50 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-3 py-2 md:px-4 md:py-3 bg-gold text-foreground font-body font-semibold text-sm md:text-base rounded-lg hover:bg-gold-light transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-cream/50 text-xs md:text-sm">
            © 2024 VibeGlow Events. All rights reserved.
          </p>

          <p className="font-body text-cream/50 text-xs md:text-sm flex items-center gap-1">
            Made with <Heart className="w-3 h-3 md:w-4 md:h-4 text-gold fill-gold" /> for celebrations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
