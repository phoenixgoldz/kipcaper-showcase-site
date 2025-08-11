import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import parchment from "@/assets/parchment-texture.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const ENTRIES = [
  { name: "Silent Landing", unlocked: true, text: "Drop like a feather, sound like a rumor. Kip absorbs fall noise for a silent finish." },
  { name: "Leaf Whistle Dash", unlocked: true, text: "Whistle the wind and ride it. Short burst, shorter temper." },
  { name: "Wall-Run Carve", unlocked: true, text: "Feet kiss stone. Momentum keeps secrets from gravity." },
  { name: "Eucalyptus Smoke Bomb", unlocked: true, text: "Green veil, greener exit. Stings eyes, soothes Kip." },
  { name: "Wall-Cling", unlocked: false },
  { name: "Glide Grapple Combo", unlocked: false },
];

const CardItem = ({ name, unlocked, text }: { name: string; unlocked: boolean; text?: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <article
          className="relative p-5 rounded-lg border bg-card hover:shadow-lg transition will-change-transform hover:scale-[1.01] cursor-pointer"
          style={{ perspective: "1000px" }}
        >
          <div className="rounded-md p-6 border bg-muted/20" style={{ transform: "rotateX(2deg) rotateY(-2deg)" }}>
            <div className="relative">
              <img src={parchment} alt="Codex page parchment" className="w-full h-40 object-cover rounded-md opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-display text-xl text-center max-w-[80%]">
                  {unlocked ? name : "Undiscovered"}
                </h3>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Page</span>
              <Badge variant={unlocked ? "default" : "secondary"}>{unlocked ? "Recovered" : "Locked"}</Badge>
            </div>
          </div>
          {!unlocked && (
            <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-border" />
          )}
        </article>
      </DialogTrigger>
      {unlocked && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-display">{name}</DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground">{text}</p>
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
