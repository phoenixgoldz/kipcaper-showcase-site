import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      <SEO title="Kip Caper — The Codex Caperis" />
      <Hero />
      <section className="container mx-auto py-16">
        <article className="max-w-2xl">
          <h2 className="font-display text-3xl">Join the Heist</h2>
          <p className="text-muted-foreground mt-2">Get the drop when the trailer lands.</p>
          <div className="mt-4">
            <Button asChild variant="hero" className="hover-scale"><a href="/join">Sign up</a></Button>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Index;
