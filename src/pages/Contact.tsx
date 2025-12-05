import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", eventType: "", eventDate: "", budget: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-body text-sm font-semibold tracking-wider uppercase rounded-full mb-4">
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-6">
            Let's Create <span className="text-gold">Magic</span> Together
          </h1>
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to start planning your dream celebration? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-secondary rounded-2xl p-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <span className="font-body text-sm text-muted-foreground block mb-1">Phone</span>
                      <a href="tel:+919876543210" className="font-body font-semibold text-foreground hover:text-primary transition-colors">
                        +91 98765 43210
                      </a>
                      <br />
                      <a href="tel:+919876543211" className="font-body font-semibold text-foreground hover:text-primary transition-colors">
                        +91 98765 43211
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <span className="font-body text-sm text-muted-foreground block mb-1">Email</span>
                      <a href="mailto:hello@vibeglow.com" className="font-body font-semibold text-foreground hover:text-primary transition-colors">
                        hello@vibeglow.com
                      </a>
                      <br />
                      <a href="mailto:info@vibeglow.com" className="font-body font-semibold text-foreground hover:text-primary transition-colors">
                        info@vibeglow.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <span className="font-body text-sm text-muted-foreground block mb-1">Location</span>
                      <span className="font-body font-semibold text-foreground">
                        123 Celebration Avenue,<br />
                        Bandra West, Mumbai,<br />
                        Maharashtra 400050
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <span className="font-body text-sm text-muted-foreground block mb-1">Working Hours</span>
                      <span className="font-body font-semibold text-foreground">
                        Mon - Sat: 10:00 AM - 7:00 PM<br />
                        Sunday: By Appointment
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-secondary rounded-2xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2520832991447!2d72.82976931490251!3d19.054999387097844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9410830616d%3A0x111b63353dbbce01!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VibeGlow Events Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="font-body text-sm font-medium text-foreground block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-body text-sm font-medium text-foreground block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="font-body text-sm font-medium text-foreground block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="font-body text-sm font-medium text-foreground block mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="engagement">Engagement</option>
                      <option value="reception">Reception</option>
                      <option value="birthday">Birthday</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="eventDate" className="font-body text-sm font-medium text-foreground block mb-2">
                      Tentative Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="font-body text-sm font-medium text-foreground block mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="under5">Under ₹5 Lakhs</option>
                      <option value="5to10">₹5 - 10 Lakhs</option>
                      <option value="10to25">₹10 - 25 Lakhs</option>
                      <option value="25to50">₹25 - 50 Lakhs</option>
                      <option value="above50">Above ₹50 Lakhs</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="font-body text-sm font-medium text-foreground block mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                    placeholder="Tell us about your dream celebration, including expected guest count, venue preferences, and any special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-gold text-foreground font-body font-semibold rounded-full hover:opacity-90 transition-all duration-300 shadow-gold"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppBubble />
    </div>
  );
};

export default Contact;
