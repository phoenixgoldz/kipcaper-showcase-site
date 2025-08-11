import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import concept1 from "@/assets/media-concept-1.jpg";
import engine1 from "@/assets/media-engine-1.jpg";
import callcard1 from "@/assets/media-callcard-1.jpg";
import { useMemo, useState } from "react";

const items = [
  { src: concept1, alt: "Concept art — forest camp at night", category: "Concept" },
  { src: engine1, alt: "In-engine dock at night", category: "In-Engine" },
  { src: callcard1, alt: "Calling card emblem variations", category: "Calling Card" },
];

const categories = ["All", "Concept", "In-Engine", "Calling Card"] as const;

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
                  <img src={it.src} alt={it.alt} className="w-full h-52 object-cover" />
                  <figcaption className="p-3 text-sm text-muted-foreground">{it.category}</figcaption>
                </figure>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <img src={it.src} alt={it.alt} className="w-full h-auto rounded-md" />
              </DialogContent>
            </Dialog>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Media;
