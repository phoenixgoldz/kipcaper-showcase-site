import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Join = () => {
  const [email, setEmail] = useState("");

  return (
    <Layout>
      <SEO title="Join the Heist — Sign up" />
      <header className="container mx-auto py-12">
        <h1 className="font-display text-4xl">Join the Heist</h1>
        <p className="text-muted-foreground mt-2">Get the drop when the trailer lands. No spam. Only capers.</p>
      </header>
      <main className="container mx-auto pb-20">
        <section className="max-w-xl rounded-xl border p-6 bg-card shadow-sm">
          <form
            className="flex flex-col sm:flex-row gap-3"
            action="https://buttondown.email/api/emails/subscribe"
            method="post"
            target="_blank"
            rel="noopener noreferrer"
          >
            <input type="hidden" name="tag" value="KipCaper" />
            <Input
              type="email"
              name="email"
              required
              placeholder="you@domain.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="hero" className="hover-scale">Sign up</Button>
          </form>
          <div className="mt-6 flex gap-3">
            <Button variant="outline" asChild className="hover-scale">
              <a href="#" aria-label="Steam Wishlist placeholder">Steam Wishlist</a>
            </Button>
            <Button variant="ghost" asChild className="hover-scale">
              <a href="#" aria-label="Press Kit soon">Press Kit (soon)</a>
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Join;
