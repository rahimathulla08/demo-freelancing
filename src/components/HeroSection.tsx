import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-celebration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/30 rounded-full animate-pulse-glow opacity-50" />
      <div className="absolute bottom-32 right-10 w-24 h-24 border border-gold/20 rounded-full animate-float opacity-40" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold rounded-full animate-shimmer" />
      <div
        className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-gold/60 rounded-full animate-shimmer"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        {/* Tagline */}
        <p
          className="font-body text-gold text-xs sm:text-sm md:text-base tracking-[0.1em] uppercase mb-5 opacity-0 animate-fade-in-up whitespace-nowrap"
          style={{ animationDelay: "0.2s" }}
        >
          ✦ Traditional • Elegant • Memorable ✦
        </p>

        {/* Main Heading */}
        <h1
          className="
            font-heading
            text-2xl sm:text-3xl md:text-5xl lg:text-6xl
            text-cream/90
            font-bold leading-tight mb-8
            opacity-0 animate-fade-in-up
          "
          style={{ animationDelay: "0.4s" }}
        >
          Crafting Timeless Celebrations
        </h1>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Link
            to="/services"
            className="px-8 py-3 sm:py-4 bg-gold text-foreground font-body font-semibold rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold hover:shadow-elevated text-sm sm:text-base"
          >
            Explore Services
          </Link>

          <Link
            to="/gallery"
            className="px-8 py-3 sm:py-4 border-2 border-cream/50 text-cream font-body font-semibold rounded-full hover:bg-cream/10 hover:border-cream transition-all duration-300 text-sm sm:text-base"
          >
            View Gallery
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
