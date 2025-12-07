import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const showTransparent = isHomePage && !isScrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        showTransparent
          ? "bg-transparent py-5"
          : "bg-background/95 backdrop-blur-md shadow-soft py-3"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <span
              className={cn(
                "font-heading text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300",
                showTransparent ? "text-cream" : "text-primary"
              )}
            >
              Vibe<span className="text-gold">Glow</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={cn(
                    "px-4 py-2 font-body font-medium text-sm tracking-wide transition-all duration-300 relative group",
                    showTransparent
                      ? "text-cream/90 hover:text-cream"
                      : "text-foreground hover:text-primary",
                    location.pathname === link.href && (showTransparent ? "text-cream" : "text-primary")
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold transition-all duration-300",
                      location.pathname === link.href ? "w-3/4" : "w-0 group-hover:w-3/4"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/contact"
            className={cn(
              "hidden lg:inline-flex items-center px-6 py-2.5 rounded-full font-body font-semibold text-sm transition-all duration-300",
              showTransparent
                ? "bg-gold text-foreground hover:bg-gold-light shadow-gold"
                : "bg-primary text-primary-foreground hover:bg-burgundy-dark shadow-soft"
            )}
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              showTransparent ? "text-cream" : "text-foreground"
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500",
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          )}
        >
          <ul className="bg-background/95 backdrop-blur-md rounded-xl p-4 space-y-1 shadow-elevated">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={cn(
                    "block px-4 py-3 font-body font-medium hover:text-primary hover:bg-secondary rounded-lg transition-all",
                    location.pathname === link.href ? "text-primary bg-secondary" : "text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-2 bg-primary text-primary-foreground rounded-lg font-body font-semibold"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
