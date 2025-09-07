import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import parchment from "@/assets/parchment-texture.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ENTRIES = [
  { name: "Silent Landing", unlocked: false },
  { name: "Leaf Whistle Dash", unlocked: false },
  { name: "Wall-Run Carve", unlocked: false },
  { name: "Eucalyptus Smoke Bomb", unlocked: false },
  { name: "Wall-Cling", unlocked: false },
  { name: "Glide Grapple Combo", unlocked: false },
];

const CardItem = ({ name, unlocked, text }: { name: string; unlocked: boolean; text?: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <article
          className={cn(
            "relative p-6 rounded-2xl glass-card cursor-pointer transition-all duration-500 hover-lift group",
            unlocked ? "tech-border" : "opacity-60 hover:opacity-80"
          )}
          style={{ perspective: "1000px" }}
        >
          <div className={cn(
            "rounded-xl p-8 border-2 transition-all duration-300",
            unlocked 
              ? "border-treasure-gold/30 bg-gradient-to-br from-treasure-gold/10 to-mystic-green/10" 
              : "border-muted bg-muted/20"
          )} style={{ transform: "rotateX(1deg) rotateY(-1deg)" }}>
            <div className="relative">
              <img 
                src={parchment} 
                alt="Ancient parchment background" 
                className={cn(
                  "w-full h-48 object-cover rounded-xl transition-opacity duration-300",
                  unlocked ? "opacity-40" : "opacity-20"
                )} 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className={cn(
                  "font-display text-xl text-center max-w-[90%] transition-all duration-300",
                  unlocked ? "text-treasure-gold neon-glow" : "text-muted-foreground"
                )}>
                  {unlocked ? name : "???"}
                </h3>
              </div>
              {unlocked && (
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-treasure-gold to-mystic-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-muted-foreground font-semibold">
                {unlocked ? "Codex Entry" : "Locked Page"}
              </span>
              <Badge 
                variant={unlocked ? "default" : "secondary"}
                className={cn(
                  "transition-all duration-300",
                  unlocked && "bg-gradient-to-r from-treasure-gold to-mystic-green text-midnight-shadow"
                )}
              >
                {unlocked ? "Recovered" : "Undiscovered"}
              </Badge>
            </div>
          </div>
          {!unlocked && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-midnight-shadow/50 to-muted/50 flex items-center justify-center">
              <div className="text-4xl opacity-50">🔒</div>
            </div>
          )}
        </article>
      </DialogTrigger>
      {unlocked && (
        <DialogContent className="glass-card border-2 border-treasure-gold/30">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-treasure-gold">{name}</DialogTitle>
          </DialogHeader>
          <p className="text-foreground/80 text-lg leading-relaxed">{text}</p>
        </DialogContent>
      )}
    </Dialog>
  );
};

const Codex = () => {
  const [items] = useState(ENTRIES);
  return (
    <Layout>
      <SEO title="Codex — Recovered Pages" />
      <header className="container mx-auto py-12">
        <h1 className="font-display text-4xl">The Codex</h1>
        <p className="text-muted-foreground mt-2">Pages you’ve recovered. The rest remains in the canopy…</p>
      </header>
      <main className="container mx-auto pb-16">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <CardItem key={it.name} {...it} />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Codex;
