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
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold font-body text-sm font-semibold tracking-wider uppercase rounded-full mb-4">
            About Us
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-6">
            Weaving Dreams Into
            <span className="text-primary block">Timeless Celebrations</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            At VibeGlow, we believe every celebration tells a unique story worth remembering forever.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-6">
                Our <span className="text-gold">Story</span>
              </h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                Founded in 2009, VibeGlow Events began with a simple mission: to transform celebrations into unforgettable experiences that honor tradition while embracing modern elegance.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                What started as a small team of passionate event enthusiasts has grown into one of the most sought-after event planning companies in the region. Over 15 years, we've had the privilege of orchestrating more than 500 celebrations, each unique, each magical.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our approach combines meticulous planning with creative innovation. We understand that every family, every couple, and every celebration has its own story to tell, and we're here to help tell it beautifully.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop"
                alt="VibeGlow team at work"
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold rounded-xl p-6 shadow-gold">
                <span className="font-heading text-4xl font-bold text-foreground block">15+</span>
                <span className="font-body text-sm text-foreground/80">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-background rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-gold" />
                </div>
                <span className="font-heading text-3xl md:text-4xl font-bold text-primary block mb-1">
                  {stat.value}
                </span>
                <span className="font-body text-muted-foreground text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                To create extraordinary celebrations that honor cultural traditions while incorporating contemporary elegance, ensuring every event is a reflection of our clients' unique stories and dreams.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                To be the most trusted name in event planning, known for transforming celebrations into timeless memories through exceptional creativity, impeccable service, and unwavering attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-4">
              Meet Our <span className="text-gold">Team</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg">
              The passionate individuals behind your perfect celebrations
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative mb-4 rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="font-body text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground font-bold mb-4">
            Let's Create Your Story
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Ready to turn your celebration dreams into reality? We'd love to be part of your journey.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-foreground font-body font-semibold rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppBubble />
    </div>
  );
};

export default About;
