import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const GameTrailer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Game Trailers</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trailers coming soon - follow for updates
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-12 max-w-2xl mx-auto">
            <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Trailers in Production</h3>
            <p className="text-muted-foreground">
              Game trailers are currently being developed. Check back soon for exclusive gameplay reveals, cinematic sequences, and behind-the-scenes content.
            </p>
          </div>
        </motion.div>

        {/* Video Modal Placeholder */}
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsPlaying(false)}
          >
            <div className="relative max-w-4xl w-full aspect-video bg-black rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <p className="text-xl">Video Player Placeholder - Click to close</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 border-white/20 text-white hover:bg-white/20"
                onClick={() => setIsPlaying(false)}
              >
                ×
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};