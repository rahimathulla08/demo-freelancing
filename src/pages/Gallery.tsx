import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { X } from "lucide-react";

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
  { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=400&fit=crop", alt: "Wedding cake display", category: "Décor" }
];

const categories = ["All", "Wedding", "Engagement", "Reception", "Décor"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-24 md:pt-28">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-secondary to-background text-center relative overflow-hidden">
        <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs sm:text-sm rounded-full mb-3">
          Our Portfolio
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
          Captured <span className="text-primary">Moments</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          A glimpse into the magical celebrations we've had the honor to create.
        </p>
      </section>

      {/* FILTER TABS */}
      <section className="py-6 bg-background border-b border-border">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition ${activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-gold/20 text-foreground"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="pt-16 pb-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition duration-500">
                  <span className="px-2 py-0.5 bg-gold text-black text-[10px] sm:text-xs font-semibold rounded-full">
                    {image.category}
                  </span>
                  <p className="text-[11px] sm:text-sm text-cream font-medium mt-1 max-w-[90%]">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppBubble />

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>

          <img
            src={selectedImage.replace("w=600&h=400", "w=1200&h=800")}
            alt="Preview"
            className="max-w-full max-h-[85vh] rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
