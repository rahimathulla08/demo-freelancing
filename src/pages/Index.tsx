import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import {
  Calendar,
  Heart,
  Star,
  Users,
  Flower2,
  Camera,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const featuredEvents = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Grand celebrations honoring love and tradition.",
  },
  {
    icon: Users,
    title: "Engagements",
    description: "Intimate ceremonies marking beautiful beginnings.",
  },
  {
    icon: Calendar,
    title: "Receptions",
    description: "Magnificent gatherings celebrating unions.",
  },
  {
    icon: Star,
    title: "Special Occasions",
    description: "Magical memories for every milestone.",
  },
];

const featuredServices = [
  {
    icon: Flower2,
    title: "Floral Design",
    description: "Stunning arrangements with fresh flowers.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing precious moments forever.",
  },
  {
    icon: Sparkles,
    title: "Full Planning",
    description: "End-to-end event coordination.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <HeroSection />

        {/* Events Preview */}
        <section className="py-14 sm:py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            {/* Heading */}
            <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs sm:text-sm font-semibold rounded-full mb-3">
                Our Events
              </span>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-3">
                Celebrations We <span className="text-primary">Craft</span>
              </h2>

              <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground">
                From intimate gatherings to grand celebrations, we bring your
                vision to life.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
              {featuredEvents.map((event) => (
                <div
                  key={event.title}
                  className="group relative bg-card rounded-2xl p-6 sm:p-8 border border-border hover:border-gold/50 transition-all duration-500 hover:shadow-elevated hover:-translate-y-2"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                    <event.icon className="w-7 h-7 sm:w-8 sm:h-8 text-gold" />
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2">
                    {event.title}
                  </h3>

                  <p className="font-body text-sm sm:text-base text-muted-foreground">
                    {event.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="text-center mt-10 sm:mt-12">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground text-sm sm:text-base font-semibold rounded-full hover:bg-burgundy-dark transition shadow-soft"
              >
                View All Events
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-14 sm:py-20 md:py-28 bg-secondary relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            {/* Heading */}
            <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-full mb-3">
                What We Offer
              </span>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                Our Premium <span className="text-gold">Services</span>
              </h2>

              <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground">
                Comprehensive event solutions tailored to bring your celebration
                dreams to reality.
              </p>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {featuredServices.map((service) => (
                <div
                  key={service.title}
                  className="group relative bg-background rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-primary/5 opacity-0 group-hover:opacity-100 transition" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>

                    <p className="font-body text-sm sm:text-base text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="text-center mt-10 sm:mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gold text-foreground font-semibold text-sm sm:text-base rounded-full hover:bg-gold-light transition shadow-gold"
              >
                Explore All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppBubble />
    </div>
  );
};

export default Index;
