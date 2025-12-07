import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { Award, Clock, Heart, Users, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: Heart, value: "500+", label: "Events Planned" },
  { icon: Users, value: "10K+", label: "Happy Guests" },
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Award, value: "50+", label: "Awards Won" },
];

const team = [
  {
    name: "Priya Sharma",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Rahul Verma",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Anita Desai",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Vikram Singh",
    role: "Client Relations Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />

        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full mb-3">
            About Us
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-4 leading-tight">
            Weaving Dreams Into
            <span className="text-primary block">Timeless Celebrations</span>
          </h1>

          <p className="font-body text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            At VibeGlow, we believe every celebration tells a unique story worth remembering forever.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-3">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground font-bold mb-4">
                Our <span className="text-gold">Story</span>
              </h2>

              <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                Founded in 2009, VibeGlow Events began with a simple mission: to transform celebrations into unforgettable
                experiences that honor tradition while embracing modern elegance.
              </p>

              <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                What started as a small team of passionate event enthusiasts has grown into one of the most sought-after
                event planning companies in the region.
              </p>

              <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed">
                Our approach combines meticulous planning with creative innovation. Every celebration has its own story,
                and we’re here to help tell it beautifully.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop"
                alt="VibeGlow team at work"
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-3 sm:-bottom-5 -left-4 sm:-left-6 bg-gold rounded-xl p-2 sm:p-5 shadow-gold">
                <span className="font-heading text-2xl sm:text-4xl font-bold text-foreground block">15+</span>
                <span className="font-body text-[10px] sm:text-sm text-foreground/80">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-background rounded-2xl p-5 sm:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
                </div>

                <span className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary block mb-1">
                  {stat.value}
                </span>

                <span className="font-body text-muted-foreground text-xs sm:text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
                To create extraordinary celebrations that honor cultural traditions while incorporating modern elegance.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
                To be the most trusted name in event planning, known for transforming celebrations into timeless memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Meet Our <span className="text-gold">Team</span>
            </h2>
            <p className="font-body text-muted-foreground text-sm sm:text-base">
              The passionate individuals behind your perfect celebrations
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative mb-3 rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold">{member.name}</h3>
                <p className="font-body text-muted-foreground text-xs sm:text-sm">{member.role}</p>
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

export default About;
