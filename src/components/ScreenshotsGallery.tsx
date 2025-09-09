import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ScreenshotsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    {
      src: "/lovable-uploads/8aee9921-2238-4cd3-b6a7-1754cc4c0fc0.png",
      alt: "Kip Caper stealth gameplay in urban environment",
      category: "Gameplay"
    },
    {
      src: "/lovable-uploads/acdc8bb0-5706-4adf-9d4f-1cb199cea415.png",
      alt: "Character abilities and bo-staff combat",
      category: "Combat"
    },
    {
      src: "/lovable-uploads/966a52db-9402-45c5-8b72-2c1a4aad1d19.png",
      alt: "Canopy traversal and vertical navigation",
      category: "Traversal"
    },
    {
      src: "/lovable-uploads/be2fb648-1262-45b0-b454-0dcbc00b3279.png",
      alt: "Team coordination and crew mechanics",
      category: "Teamwork"
    },
    {
      src: "/lovable-uploads/efb16d1f-b1a2-4b9b-be8a-9d7e8d3981ac.png",
      alt: "Detailed character customization",
      category: "Customization"
    },
    {
      src: "/lovable-uploads/feba1c36-3442-4724-9d16-7b7a9186e9ba.png",
      alt: "Environmental storytelling and world design",
      category: "World"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(screenshots.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(screenshots.length / 3)) % Math.ceil(screenshots.length / 3));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Screenshots</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the stunning visuals and immersive gameplay of Kip Caper
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(screenshots.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {screenshots.slice(slideIndex * 3, slideIndex * 3 + 3).map((screenshot, index) => (
                    <motion.div
                      key={slideIndex * 3 + index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group cursor-pointer"
                      onClick={() => setSelectedImage(slideIndex * 3 + index)}
                    >
                      <div className="relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
                        <img
                          src={screenshot.src}
                          alt={screenshot.alt}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <span className="text-sm text-white font-medium">{screenshot.category}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Image Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img
                src={screenshots[selectedImage].src}
                alt={screenshots[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 border-white/20 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};