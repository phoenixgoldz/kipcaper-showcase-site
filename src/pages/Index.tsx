import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import og from "@/assets/og-image.png";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <SEO title="Kip Caper and The Codex Caperis — Official Site" description="A stealth‑comedy caper with cel‑shaded swagger. Heist the relics, dodge the poachers, and rebuild the Codex." image={og} />
      <Hero />
      <section className="container mx-auto py-16">
        <article className="max-w-2xl">
          <h2 className="font-display text-3xl">Join the Heist</h2>
          <p className="text-muted-foreground mt-2">Get the drop when the trailer lands.</p>
          <div className="mt-4">
            <Button asChild variant="hero" className="hover-scale"><Link to="/join">Sign up</Link></Button>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Index;
