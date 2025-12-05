import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { Flower2, Camera, Music, Utensils, Sparkles, Palette, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Flower2,
    title: "Floral Design",
    description: "Stunning arrangements with fresh flowers, marigolds, and exotic blooms that transform your venue into a garden of dreams.",
    features: [
      "Custom floral arrangements",
      "Mandap decoration",
      "Table centerpieces",
      "Bridal bouquets",
      "Stage backdrop flowers",
      "Car decoration",
    ],
    price: "Starting from ₹50,000",
  },
  {
    icon: Palette,
    title: "Décor & Styling",
    description: "Breathtaking venue transformations with traditional and modern aesthetics that leave lasting impressions.",
    features: [
      "Theme conceptualization",
      "Lighting design",
      "Draping & fabric work",
      "Props & installations",
      "Entry gates & pathways",
      "Seating arrangements",
    ],
    price: "Starting from ₹1,00,000",
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Capturing precious moments with artistic vision and technical excellence for memories that last forever.",
    features: [
      "Candid photography",
      "Cinematic videography",
      "Drone coverage",
      "Pre-wedding shoots",
      "Same-day edits",
      "Photo albums",
    ],
    price: "Starting from ₹75,000",
  },
  {
    icon: Music,
    title: "Entertainment",
    description: "Live music, DJs, and traditional performances that keep your guests entertained throughout the celebration.",
    features: [
      "Live band performances",
      "Professional DJs",
      "Sangeet choreography",
      "Traditional artists",
      "Sound & lighting",
      "Anchor services",
    ],
    price: "Starting from ₹40,000",
  },
  {
    icon: Utensils,
    title: "Catering Services",
    description: "Exquisite cuisine featuring traditional delicacies and contemporary flavors crafted by expert chefs.",
    features: [
      "Multi-cuisine menus",
      "Live cooking stations",
      "Custom menu planning",
      "Bar services",
      "Dessert counters",
      "Service staff",
    ],
    price: "Starting from ₹800/plate",
  },
  {
    icon: Sparkles,
    title: "Full Event Planning",
    description: "End-to-end coordination ensuring every detail is flawlessly executed for a stress-free celebration.",
    features: [
      "Venue selection",
      "Vendor management",
      "Budget planning",
      "Timeline coordination",
      "Guest management",
      "On-site supervision",
    ],
    price: "Starting from ₹2,00,000",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-body text-sm font-semibold tracking-wider uppercase rounded-full mb-4">
            What We Offer
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-6">
            Our Premium <span className="text-gold">Services</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive event solutions tailored to bring your celebration dreams to reality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-elevated"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <Check className="w-4 h-4 text-gold flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="pt-6 border-t border-border">
                  <span className="font-body text-sm text-muted-foreground">Pricing</span>
                  <p className="font-heading text-xl font-bold text-primary">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-4">
              Our <span className="text-gold">Process</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg">
              A seamless journey from vision to celebration
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Share your vision and requirements" },
              { step: "02", title: "Planning", desc: "Detailed proposal and timeline" },
              { step: "03", title: "Execution", desc: "Flawless coordination and setup" },
              { step: "04", title: "Celebration", desc: "Your perfect day unfolds" },
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                  <span className="font-heading text-2xl font-bold text-foreground">{item.step}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-muted-foreground">{item.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gold/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground font-bold mb-4">
            Let's Create Something Beautiful
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Get a customized quote for your special celebration today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-foreground font-body font-semibold rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppBubble />
    </div>
  );
};

export default Services;
