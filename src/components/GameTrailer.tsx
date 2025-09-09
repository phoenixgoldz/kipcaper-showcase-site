import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const GameTrailer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const trailers = [
    {
      id: "gameplay",
      title: "Gameplay Reveal",
      thumbnail: "/lovable-uploads/c6f1235e-1b72-4cd2-a601-3a82de575024.png",
      duration: "2:45"
    },
    {
      id: "story",
      title: "Story Trailer", 
      thumbnail: "/lovable-uploads/97d35cdc-fdf8-4773-9daf-58b31b1e6eb9.png",
      duration: "1:58"
    },
    {
      id: "cinematic",
      title: "Cinematic Trailer",
      thumbnail: "/lovable-uploads/8e82cba2-6678-4196-be37-1f843d808a0b.png", 
      duration: "3:12"
    }
  ];

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
            Experience the world of Kip Caper through our cinematic and gameplay trailers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {trailers.map((trailer, index) => (
            <motion.div
              key={trailer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <div className="relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
                <img 
                  src={trailer.thumbnail} 
                  alt={trailer.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-sm text-white">
                  {trailer.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">{trailer.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

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