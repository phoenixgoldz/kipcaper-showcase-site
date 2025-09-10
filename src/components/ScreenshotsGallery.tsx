import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ScreenshotsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots: any[] = [];

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
            Screenshots coming soon - follow development progress
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-12 max-w-2xl mx-auto">
            <Expand className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Screenshots in Development</h3>
            <p className="text-muted-foreground">
              Game screenshots are being captured as development progresses. Check back soon for stunning visuals showcasing stealth gameplay, character abilities, and immersive environments.
            </p>
          </div>
        </motion.div>

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