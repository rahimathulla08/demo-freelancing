import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { Calendar, Heart, Star, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    icon: Heart,
    title: "Weddings",
    description:
      "Grand celebrations honoring love, tradition, and family bonds with exquisite décor and seamless coordination.",
    features: [
      "Traditional Ceremonies",
      "Modern Themes",
      "Destination Weddings",
      "Intimate Gatherings",
    ],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop",
  },
  {
    icon: Users,
    title: "Engagements",
    description:
      "Intimate ceremonies marking the beginning of a beautiful journey together with elegance and grace.",
    features: [
      "Ring Ceremony",
      "Sagai Setup",
      "Family Gatherings",
      "Photo Sessions",
    ],
    image:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=500&fit=crop",
  },
  {
    icon: Calendar,
    title: "Receptions",
    description:
      "Magnificent gatherings celebrating unions with stunning venues, gourmet cuisine, and unforgettable moments.",
    features: [
      "Grand Ballrooms",
      "Outdoor Venues",
      "Theme Parties",
      "Live Entertainment",
    ],
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=500&fit=crop",
  },
  {
    icon: Star,
    title: "Special Occasions",
    description:
      "From milestone birthdays to anniversary celebrations, we create magical memories for every occasion.",
    features: [
      "Birthday Parties",
      "Anniversaries",
      "Baby Showers",
      "Corporate Events",
    ],
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=500&fit=crop",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pb-16 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-gold/10 text-gold font-body text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full mb-4">
            Our Events
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-4 sm:mb-6">
            Celebrations We <span className="text-primary">Craft</span>
          </h1>

          <p className="font-body text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we bring your vision
            to life with meticulous attention to detail.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-6">
        <div className="container mx-auto px-3 md:px-5">
          <div className="space-y-10 sm:space-y-4">
            {events.map((event, index) => (
              <div
                key={event.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative group rounded-2xl overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/60 to-transparent" />

                    {/* Icon in image */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gold rounded-xl flex items-center justify-center shadow-gold">
                        <event.icon className="w-5 h-5 sm:w-7 sm:h-7 text-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                    {event.title}
                  </h2>

                  <p className="font-body text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6">
                    {event.description}
                  </p>

                  <ul className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {event.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 font-body text-xs sm:text-sm text-foreground"
                      >
                        <span className="w-2 h-2 bg-gold rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground font-body text-sm sm:text-base font-semibold rounded-full hover:bg-burgundy-dark transition-all duration-300"
                  >
                    Plan Your {event.title.slice(0, -1)}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
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

export default Events;
