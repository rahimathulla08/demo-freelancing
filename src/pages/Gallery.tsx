import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop", alt: "Elegant wedding ceremony setup", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop", alt: "Beautiful floral arrangements", category: "Décor" },
  { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=400&fit=crop", alt: "Traditional wedding celebration", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=400&fit=crop", alt: "Engagement ceremony décor", category: "Engagement" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop", alt: "Grand reception venue", category: "Reception" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&h=400&fit=crop", alt: "Bride and groom celebration", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop", alt: "Outdoor wedding setup", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop", alt: "Table décor arrangement", category: "Décor" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop", alt: "Wedding venue entrance", category: "Décor" },
  { src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&h=400&fit=crop", alt: "Reception hall setup", category: "Reception" },
  { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop", alt: "Engagement ring ceremony", category: "Engagement" },
  { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=400&fit=crop", alt: "Wedding cake display", category: "Décor" },
];

const categories = ["All", "Wedding", "Engagement", "Reception", "Décor"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold font-body text-sm font-semibold tracking-wider uppercase rounded-full mb-4">
            Our Portfolio
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-6">
            Captured <span className="text-primary">Moments</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A glimpse into the magical celebrations we've had the honor to create.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background sticky top-[72px] z-30 border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-body font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-gold/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-block px-3 py-1 bg-gold text-foreground text-xs font-body font-semibold rounded-full w-fit mb-2">
                    {image.category}
                  </span>
                  <p className="font-heading text-sm text-cream font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground font-bold mb-4">
            Want to See Your Story Here?
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Let us create magical moments for your celebration too.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-foreground font-body font-semibold rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold"
          >
            Start Planning
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppBubble />

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage.replace("w=600&h=400", "w=1200&h=800")}
            alt="Gallery image"
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
