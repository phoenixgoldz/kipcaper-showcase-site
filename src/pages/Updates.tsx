import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import updatesData from "@/data/updates.json";
import { Leaf } from "lucide-react";
import w1 from "@/assets/updates-w1.jpg";
import w2 from "@/assets/updates-w2.jpg";
import w3 from "@/assets/updates-w3.jpg";
import w4 from "@/assets/updates-w4.jpg";
import w5 from "@/assets/updates-w5.jpg";
import w6 from "@/assets/updates-w6.jpg";

interface UpdatePost {
  id: string;
  week: number;
  title: string;
  date: string;
  image: string;
  caption: string;
  hashtag: string;
  hasHiddenMark?: boolean;
  alt?: string;
}

const imageByWeek: Record<number, string> = { 1: w1, 2: w2, 3: w3, 4: w4, 5: w5, 6: w6 };

const Updates = () => {
  const posts = (updatesData as { posts: UpdatePost[] }).posts;
  return (
    <Layout>
      <SEO title="Updates — Weekly Calling Cards" />
      <header className="container mx-auto py-8 sm:py-12 px-4 sm:px-6">
        <h1 className="font-display text-3xl sm:text-4xl">Updates</h1>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base">Weekly calling-card drops from the canopy. W1–W6.</p>
      </header>
      <main className="container mx-auto pb-16 sm:pb-20 px-4 sm:px-6">
        <section className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 [column-fill:_balance]">
          {posts.map((p) => (
            <article key={p.id} className="group mb-4 sm:mb-6 break-inside-avoid rounded-lg overflow-hidden border bg-card hover:shadow-lg transition hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={imageByWeek[p.week]} alt={p.alt || `Week ${p.week} update`} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-3 sm:p-4 flex items-start gap-2 sm:gap-3">
                <div className={p.hasHiddenMark ? "text-accent" : "text-muted-foreground"}>
                  <Leaf className={`w-4 h-4 sm:w-5 sm:h-5 ${p.hasHiddenMark ? "transition group-hover:drop-shadow-[0_0_12px_hsl(142_53%_66%/.6)]" : ""}`} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm leading-relaxed">{p.caption}</p>
                  <p className="text-xs text-muted-foreground mt-1">{p.hashtag}</p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Updates;
