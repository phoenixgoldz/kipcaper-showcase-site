import { Button } from "@/components/ui/button"; import { Link } from "react-router-dom";
const EMBLEM_SRC = "/lovable-uploads/587ae039-a119-445b-a4ae-686bd447dace.png";
import parchment from "@/assets/parchment-texture.jpg";
import { useEffect, useRef } from "react";
import { StudioBadge } from "@/components/StudioBadge";

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
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center py-20">
        <div className="space-y-6 animate-fade-in">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Kip Caper and The Codex Caperius
          </h1>
          <p className="text-lg text-eucalyptus-mist max-w-prose">
            "Join me, Kip Caper, for the greatest global heist of our time. We'll outwit poachers, nab relics, and put the Codex Caperius back where it belongs—one daring job at a time."
          </p>
          <ul className="space-y-2 text-koala-grey">
            <li>• Swipe back the relics before the poachers sniff them out.</li>
            <li>• Master gadgets, glides, and eucalyptus-fueled tricks.</li>
            <li>• Crack the <span className="text-accent font-medium">Codex</span>—page by stolen page.</li>
          </ul>
          <div className="flex gap-3 pt-2">
            <Button asChild variant="hero" className="hover-scale kip-heist-glow">
              <Link to="/join" aria-label="Join the Heist">Join the Heist</Link>
            </Button>
            <Button asChild variant="outline" className="hover-scale codex-flip">
              <Link to="/codex" aria-label="Peek Inside the Codex">Peek Inside the Codex</Link>
            </Button>
          </div>
          <p className="text-sm text-eucalyptus-mist italic">“Green means gone.”</p>
          <div className="pt-2 opacity-90">
            <StudioBadge size="sm" />
          </div>
        </div>
        <div className="relative h-[340px] sm:h-[420px] lg:h-[520px] grain-overlay panel-edge hover-glow parchment-sway">
          <img src={parchment} alt="Codex parchment background" className="absolute inset-0 w-full h-full object-cover opacity-40 rounded-lg" />
          <div ref={emblemRef} className="absolute inset-0 flex items-center justify-center transition-transform will-change-transform">
            <img src={EMBLEM_SRC} alt="Masked koala calling card with mystic glow" loading="lazy" className="h-48 sm:h-64 lg:h-72 codex-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
