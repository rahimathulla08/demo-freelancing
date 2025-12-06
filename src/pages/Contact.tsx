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

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      budget: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-14 md:pb-20 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
        <div className="absolute -top-16 -left-20 w-56 h-56 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-primary/10 text-primary font-body text-xs md:text-sm font-semibold tracking-wider uppercase rounded-full mb-4">
            Get in Touch
          </span>

          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground font-bold mb-4 md:mb-6 leading-tight">
            Let's Create <span className="text-gold">Magic</span> Together
          </h1>

          <p className="font-body text-sm md:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto leading-relaxed">
            Ready to start planning your dream celebration? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-5 md:py-5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-5 gap-10 md:gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              <div className="bg-secondary rounded-2xl p-5 md:p-8">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-10">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                    </div>
                    <div>
                      <span className="font-body text-xs md:text-sm text-muted-foreground block mb-1">
                        Phone
                      </span>
                      <a className="font-body text-sm md:text-base font-semibold text-foreground hover:text-primary transition-colors">
                        +91 98765 43210
                      </a>
                      <br />
                      <a className="font-body text-sm md:text-base font-semibold text-foreground hover:text-primary transition-colors">
                        +91 98765 43211
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                    </div>
                    <div>
                      <span className="font-body text-xs md:text-sm text-muted-foreground block mb-1">
                        Email
                      </span>
                      <a className="font-body text-sm md:text-base font-semibold text-foreground hover:text-primary transition-colors">
                        hello@vibeglow.com
                      </a>
                      <br />
                      <a className="font-body text-sm md:text-base font-semibold text-foreground hover:text-primary transition-colors">
                        info@vibeglow.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                    </div>
                    <div>
                      <span className="font-body text-xs md:text-sm text-muted-foreground block mb-1">
                        Location
                      </span>
                      <span className="font-body text-sm md:text-base font-semibold text-foreground">
                        123 Celebration Avenue,
                        <br /> Bandra West, Mumbai,
                        <br /> Maharashtra 400050
                      </span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                    </div>
                    <div>
                      <span className="font-body text-xs md:text-sm text-muted-foreground block mb-1">
                        Working Hours
                      </span>
                      <span className="font-body text-sm md:text-base font-semibold text-foreground">
                        Mon - Sat: 10:00 AM - 7:00 PM
                        <br /> Sunday: By Appointment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-5 md:p-8 shadow-soft"
              >
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>

                <div className="grid md:grid-cols-2 gap-5 mb-6">
                  <div>
                    <label className="font-body text-xs md:text-sm font-medium text-foreground block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm md:text-base"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="font-body text-xs md:text-sm font-medium text-foreground block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-6">
                  <div>
                    <label className="font-body text-xs md:text-sm font-medium text-foreground block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm md:text-base"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="font-body text-xs md:text-sm font-medium text-foreground block mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm md:text-base"
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

                <div className="grid md:grid-cols-2 gap-5 mb-6">
                  <div>
                    <label className="font-body text-xs md:text-sm font-medium text-foreground block mb-2">
                      Tentative Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm md:text-base"
                    />
                  </div>

                  <div>
                    <label className="font-body text-xs md:text-sm font-medium text-foreground block mb-2">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm md:text-base"
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
                  <label className="font-body text-xs md:text-sm font-medium text-foreground block mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm md:text-base resize-none"
                    placeholder="Tell us about your dream celebration..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-6 py-3 md:py-4 bg-gradient-gold text-foreground font-body font-semibold rounded-full hover:opacity-90 transition-all duration-300 shadow-gold text-sm md:text-base"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
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
