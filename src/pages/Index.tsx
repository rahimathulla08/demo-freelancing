import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { Calendar, Heart, Star, Users, Flower2, Camera, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredEvents = [
  { icon: Heart, title: "Weddings", description: "Grand celebrations honoring love and tradition." },
  { icon: Users, title: "Engagements", description: "Intimate ceremonies marking beautiful beginnings." },
  { icon: Calendar, title: "Receptions", description: "Magnificent gatherings celebrating unions." },
  { icon: Star, title: "Special Occasions", description: "Magical memories for every milestone." },
];

const featuredServices = [
  { icon: Flower2, title: "Floral Design", description: "Stunning arrangements with fresh flowers." },
  { icon: Camera, title: "Photography", description: "Capturing precious moments forever." },
  { icon: Sparkles, title: "Full Planning", description: "End-to-end event coordination." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />

        {/* Events Preview */}
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold font-body text-sm font-semibold tracking-wider uppercase rounded-full mb-4">
                Our Events
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-4">
                Celebrations We <span className="text-primary">Craft</span>
              </h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                From intimate gatherings to grand celebrations, we bring your vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {featuredEvents.map((event) => (
                <div
                  key={event.title}
                  className="group relative bg-card rounded-2xl p-8 border border-border hover:border-gold/50 transition-all duration-500 hover:shadow-elevated hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                    <event.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{event.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{event.description}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-full hover:bg-burgundy-dark transition-all duration-300 shadow-soft"
              >
                View All Events
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-body text-sm font-semibold tracking-wider uppercase rounded-full mb-4">
                What We Offer
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-4">
                Our Premium <span className="text-gold">Services</span>
              </h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                Comprehensive event solutions tailored to bring your celebration dreams to reality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service) => (
                <div
                  key={service.title}
                  className="group relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-foreground font-body font-semibold rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold"
              >
                Explore All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground font-bold mb-4">
              Ready to Create Your Dream Celebration?
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Let's turn your vision into an unforgettable experience. Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gold text-foreground font-body font-semibold rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold"
              >
                Get in Touch
              </Link>
              <Link
                to="/gallery"
                className="px-8 py-4 border-2 border-primary-foreground/50 text-primary-foreground font-body font-semibold rounded-full hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300"
              >
                View Gallery
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
