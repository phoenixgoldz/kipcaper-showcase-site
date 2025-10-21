import { Button } from "@/components/ui/button"; 
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { StudioBadge } from "@/components/StudioBadge";
import { CountdownTimer } from "@/components/CountdownTimer";
import { PlatformBadges } from "@/components/PlatformBadges";
import { Rocket } from "lucide-react";

const EMBLEM_SRC = "/lovable-uploads/587ae039-a119-445b-a4ae-686bd447dace.png";
const POSTER_SRC = "/lovable-uploads/075a6aba-4b19-4b87-a30f-c65c218b52dd.png";

export const Hero = () => {
  const emblemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = emblemRef.current;
    if (!node) return;
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) return;
    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="relative overflow-hidden noir-vignette sweep-spotlight">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-10 items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Kip Caper and The Codex Caperius
          </h1>
          <p className="text-base sm:text-lg text-eucalyptus-mist max-w-prose">
            "Join me, Kip Caper, for the greatest global heist of our time. We'll outwit poachers, nab relics, and put the Codex Caperius back where it belongs—one daring job at a time."
          </p>
          <ul className="space-y-2 text-sm sm:text-base text-koala-grey">
            <li>• Swipe back the relics before the poachers sniff them out.</li>
            <li>• Master gadgets, glides, and eucalyptus-fueled tricks.</li>
            <li>• Crack the <span className="text-accent font-medium">Codex</span>—page by stolen page.</li>
          </ul>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button asChild variant="hero" size="lg" className="hover-scale kip-heist-glow shadow-2xl sm:size-xl">
              <a 
                href="https://www.kickstarter.com/projects/phoenixgoldgames/kip-caper-and-the-codex-caperius"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Back Kip Caper on Kickstarter"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Back on Kickstarter
              </a>
            </Button>
            <Button asChild variant="gaming" size="lg" className="hover-scale kip-heist-glow shadow-2xl sm:size-xl">
              <a 
                href="https://discord.gg/FxpB2Zw2P6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join the Heist on Discord"
              >
                Join the Heist
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-scale shadow-lg sm:size-xl bg-[#E60023] hover:bg-[#E60023]/90 text-white border-[#E60023]">
              <a 
                href="https://pin.it/2Bv3LCNGx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Pinterest"
              >
                Pinterest
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-scale codex-flip shadow-lg sm:size-xl">
              <Link to="/codex" aria-label="Peek Inside the Codex">Peek Inside the Codex</Link>
            </Button>
          </motion.div>

          {/* Countdown Timer */}
          <div className="pt-4">
            <CountdownTimer />
          </div>

          <p className="text-sm text-eucalyptus-mist italic">"Green means gone."</p>
          <div className="pt-2 opacity-90">
            <StudioBadge size="sm" />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-md mx-auto grain-overlay panel-edge hover-glow overflow-hidden rounded-lg"
        >
          <img 
            src={POSTER_SRC} 
            alt="Kip Caper and The Codex Caperius - Official Game Poster" 
            loading="lazy" 
            className="w-full h-auto object-cover hover-scale transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-shadow/80 via-transparent to-transparent rounded-lg"></div>
          <div ref={emblemRef} className="absolute bottom-4 right-4 transition-transform will-change-transform">
            <img src={EMBLEM_SRC} alt="Masked koala calling card" loading="lazy" className="h-16 sm:h-20 lg:h-24 codex-pulse opacity-80" />
          </div>
        </motion.div>
      </div>

      {/* Platform Badges */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container mx-auto pb-8 sm:pb-10 px-4 sm:px-6"
      >
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-eucalyptus-mist text-sm sm:text-base">Available on</p>
        </div>
        <PlatformBadges />
      </motion.div>
    </section>
  );
};