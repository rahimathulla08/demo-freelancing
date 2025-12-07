import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { Flower2, Camera, Music, Utensils, Sparkles, Palette, Check } from "lucide-react";

const services = [
  {
    icon: Flower2,
    title: "Floral Design",
    description: "Beautiful fresh flower arrangements crafted to elevate your event.",
    features: ["Custom floral designs", "Stage & mandap florals"],
    price: "From ₹50,000",
  },
  {
    icon: Palette,
    title: "Décor & Styling",
    description: "Unique décor setups blending modern and traditional aesthetics.",
    features: ["Theme-based décor", "Lighting & draping"],
    price: "From ₹1,00,000",
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Professional photography capturing your best wedding moments.",
    features: ["Candid photography", "Cinematic videography"],
    price: "From ₹75,000",
  },
  {
    icon: Music,
    title: "Entertainment",
    description: "Live performances and DJs that keep your event vibrant.",
    features: ["Live bands / DJs", "Sangeet choreography"],
    price: "From ₹40,000",
  },
  {
    icon: Utensils,
    title: "Catering Services",
    description: "Delicious cuisines prepared by expert chefs for any occasion.",
    features: ["Multi-cuisine menus", "Live food counters"],
    price: "From ₹800/plate",
  },
  {
    icon: Sparkles,
    title: "Full Event Planning",
    description: "Complete end-to-end event coordination for a stress-free experience.",
    features: ["Venue & vendor management", "On-site supervision"],
    price: "From ₹2,00,000",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-14 bg-gradient-to-b from-secondary/80 to-background relative">
        <div className="container mx-auto px-4 md:px-8 text-center" />
        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full mb-3">
            Our Services
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Our Premium <span className="text-gold">Services</span>
          </h1>

          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Complete event solutions crafted with elegance and precision.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-4 ">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card rounded-xl p-5 sm:p-6 md:p-8 border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-elevated"
              >
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-foreground" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4 md:mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 font-body text-xs sm:text-sm text-foreground">
                      <Check className="w-4 h-4 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="pt-4 md:pt-6 border-t border-border">
                  <span className="font-body text-[10px] sm:text-xs text-muted-foreground">Pricing</span>
                  <p className="font-heading text-lg sm:text-xl font-bold text-primary">
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Our <span className="text-gold">Process</span>
            </h2>
            <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground">
              A seamless journey from vision to celebration.
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
                <div className="w-14 h-14 md:w-20 md:h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                  <span className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold mb-1">
                  {item.title}
                </h3>

                <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground">
                  {item.desc}
                </p>

                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[70%] h-0.5 bg-gold/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppBubble />
    </div>
  );
};

export default Services;
