import { Button } from "@/components/ui/button";
import emblem from "@/assets/emblem-masked-koala.png";
import parchment from "@/assets/parchment-texture.jpg";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const emblemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = emblemRef.current;
    if (!node) return;
    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10; // -5..5
      const y = (e.clientY / innerHeight - 0.5) * 10;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center py-20">
        <div className="space-y-6 animate-fade-in">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Kip Caper and The Codex Caperis
          </h1>
          <p className="text-lg text-muted-foreground max-w-prose">
            A stealth-comedy caper with cel-shaded swagger. UE5.6.
          </p>
          <ul className="space-y-2 text-foreground/90">
            <li>• Heist the relics. Dodge the poachers.</li>
            <li>• Gadgets, glides, and eucalyptus-fueled upgrades.</li>
            <li>• Unlock the <span className="text-accent font-medium">Codex</span>—one page at a time.</li>
          </ul>
          <div className="flex gap-3 pt-2">
            <Button asChild variant="hero" className="hover-scale">
              <a href="/join" aria-label="Join the Heist">Join the Heist</a>
            </Button>
            <Button asChild variant="outline" className="hover-scale">
              <a href="/codex" aria-label="Read the Codex">Read the Codex</a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">“Green means gone.”</p>
        </div>
        <div className="relative h-[340px] sm:h-[420px] lg:h-[520px] grain-overlay">
          <img src={parchment} alt="Codex parchment background" className="absolute inset-0 w-full h-full object-cover opacity-40 rounded-lg" />
          <div ref={emblemRef} className="absolute inset-0 flex items-center justify-center transition-transform will-change-transform">
            <img src={emblem} alt="Masked koala calling card with subtle glow" className="h-48 sm:h-64 lg:h-72 drop-shadow-[0_0_30px_hsl(142_53%_66%/.25)]" />
          </div>
        </div>
      </div>
    </section>
  );
};
