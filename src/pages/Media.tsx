import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useMemo, useState } from "react";

const items = [
  { src: "/lovable-uploads/7c20e02d-c842-4643-a1fa-673d6f5d784b.png", alt: "Kip Caper leaping with boomerang — concept illustration", category: "Concept" },
  { src: "/lovable-uploads/34373479-80c6-46b2-b994-0e6961a507f0.png", alt: "Kip Caper character turnarounds — front, back, side views", category: "Concept" },
  { src: "/lovable-uploads/11e6d061-53ae-420f-98ae-8974aef75cd1.png", alt: "Kip Caper front view — character sheet", category: "Concept" },
  { src: "/lovable-uploads/cb832edf-0969-4097-85c2-123b1fe179a3.png", alt: "Ranger kangaroo character concept", category: "Concept" },
  { src: "/lovable-uploads/7ae321bc-5c2e-402b-a646-634ae3f6e807.png", alt: "Mission layout sketch — sawmill level design", category: "Concept" },
  { src: "/lovable-uploads/966a52db-9402-45c5-8b72-2c1a4aad1d19.png", alt: "Bird character concept with glasses", category: "Concept" },
  { src: "/lovable-uploads/ec8785c5-ccf0-4507-ac99-31d9f48dfe19.png", alt: "Masked koala emblem concept", category: "Concept" },
  { src: "/lovable-uploads/fbbc5e2b-5920-4674-9c0c-5a9e72c21920.png", alt: "Commando snake character concept", category: "Concept" },
];

const categories = ["All", "Concept"] as const;

type Category = typeof categories[number];

const Media = () => {
  const [cat, setCat] = useState<Category>("All");
  const filtered = useMemo(() => (cat === "All" ? items : items.filter(i => i.category === cat)), [cat]);

  return (
    <Layout>
      <SEO title="Media — Gallery" />
      <header className="container mx-auto py-12">
        <h1 className="font-display text-4xl">Media</h1>
        <p className="text-muted-foreground mt-2">Concepts, in-engine shots, and calling-card studies.</p>
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
                <figure className="rounded-lg overflow-hidden border bg-card hover:shadow-lg cursor-pointer grain-overlay">
                  <img src={it.src} alt={it.alt} className="w-full h-52 object-cover" loading="lazy" />
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
