import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useMemo, useState } from "react";

const items = [
  // Official Poster
  { src: "/lovable-uploads/feba1c36-3442-4724-9d16-7b7a9186e9ba.png", alt: "Kip Caper and The Codex Caperius — Official Game Poster", category: "Key Art" },
  // Concept art (earlier batch)
  { src: "/lovable-uploads/7c20e02d-c842-4643-a1fa-673d6f5d784b.png", alt: "Kip Caper leaping with bo-staff — concept illustration", category: "Concept" },
  { src: "/lovable-uploads/34373479-80c6-46b2-b994-0e6961a507f0.png", alt: "Kip Caper character turnarounds — front, back, side views", category: "Concept" },
  { src: "/lovable-uploads/11e6d061-53ae-420f-98ae-8974aef75cd1.png", alt: "Kip Caper front view — character sheet", category: "Concept" },
  { src: "/lovable-uploads/cb832edf-0969-4097-85c2-123b1fe179a3.png", alt: "Ranger kangaroo character concept", category: "Concept" },
  { src: "/lovable-uploads/7ae321bc-5c2e-402b-a646-634ae3f6e807.png", alt: "Mission layout sketch — sawmill level design", category: "Concept" },
  { src: "/lovable-uploads/966a52db-9402-45c5-8b72-2c1a4aad1d19.png", alt: "Bird character concept with glasses", category: "Concept" },
  { src: "/lovable-uploads/ec8785c5-ccf0-4507-ac99-31d9f48dfe19.png", alt: "Masked koala emblem concept", category: "Concept" },
  { src: "/lovable-uploads/fbbc5e2b-5920-4674-9c0c-5a9e72c21920.png", alt: "Commando snake character concept", category: "Concept" },
  // New concept art batch
  { src: "/lovable-uploads/ef71a3d6-3959-49a8-b367-969bbda54902.png", alt: "Calling card concept — desk with shadow (1c)", category: "Concept" },
  { src: "/lovable-uploads/12ee8f58-0775-4a5e-83c5-8f281fcd43d2.png", alt: "Calling card concept — forest floor (2a)", category: "Concept" },
  { src: "/lovable-uploads/2cb05079-87ba-4c93-aa96-813c5caccab9.png", alt: "Calling card concept — window silhouette (3p)", category: "Concept" },
  { src: "/lovable-uploads/8e82cba2-6678-4196-be37-1f843d808a0b.png", alt: "Calling card concept — rusty padlock (4e)", category: "Concept" },
  { src: "/lovable-uploads/a4e9a7a9-60d2-4d86-92f0-9f7eda3e774a.png", alt: "Calling card concept — whirlpool (5r)", category: "Concept" },
  { src: "/lovable-uploads/7a4e13db-f40e-475b-ba33-b4c97c50c088.png", alt: "Calling card concept — parchment note (6s)", category: "Concept" },
  { src: "/lovable-uploads/acdc8bb0-5706-4adf-9d4f-1cb199cea415.png", alt: "Canopy Cruiser vehicle concept", category: "Concept" },
  { src: "/lovable-uploads/1e72695c-281c-4a2e-8ae1-c6444c3ded89.png", alt: "Key art poster — Kip Caper and the Codex Caperis", category: "Concept" },
  { src: "/lovable-uploads/ec5cf9bf-f675-42fe-9aff-41501382990c.png", alt: "Masked koala mark on parchment — logo study", category: "Concept" },
];

const categories = ["All", "Key Art", "Concept"] as const;

type Category = typeof categories[number];

const Media = () => {
  const [cat, setCat] = useState<Category>("All");
  const filtered = useMemo(() => (cat === "All" ? items : items.filter(i => i.category === cat)), [cat]);

  return (
    <Layout>
      <SEO title="Media — Concept Art Gallery" description="Official concept art and key art for Kip Caper and the Codex Caperius." />
      <header className="container mx-auto py-12">
        <h1 className="font-display text-4xl">Media</h1>
        <p className="text-muted-foreground mt-2">Official concept art and key art.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={"px-3 py-1.5 rounded-md border text-sm " + (cat === c ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted")}
              aria-pressed={cat === c}
            >{c}</button>
          ))}
        </div>
      </header>
      <main className="container mx-auto pb-16">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((it, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <figure className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg cursor-pointer grain-overlay hover-lift">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={it.src} alt={it.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <figcaption className="p-3 text-sm text-muted-foreground">{it.category}</figcaption>
                </figure>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <img src={it.src} alt={it.alt} className="w-full max-h-[80vh] object-contain rounded-md" loading="lazy" />
              </DialogContent>
            </Dialog>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Media;
