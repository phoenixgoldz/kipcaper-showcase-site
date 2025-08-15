import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <SEO title="Kip Caper and The Codex Caperius — Official Site" description="A stealth‑comedy caper with cel‑shaded swagger. Heist the relics, dodge the poachers, and rebuild the Codex." image="/assets/branding/og-mask-on-parchment.png" />
      <Hero />
      {/* Features Section */}
      <section className="container mx-auto py-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl mb-4 neon-glow">Game Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the ultimate stealth-action adventure with cutting-edge gameplay mechanics
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-card p-8 hover-lift group">
            <div className="w-16 h-16 bg-gradient-to-br from-jungle-green to-eucalyptus-mist rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-display text-xl mb-3" style={{color: 'hsl(var(--treasure-gold))'}}>Precision Stealth</h3>
            <p className="text-muted-foreground">Master the art of silent movement and strategic positioning in dynamic environments.</p>
          </div>
          
          <div className="glass-card p-8 hover-lift group">
            <div className="w-16 h-16 bg-gradient-to-br from-eucalyptus-mist to-mystic-green rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl">🥢</span>
            </div>
            <h3 className="font-display text-xl mb-3" style={{color: 'hsl(var(--treasure-gold))'}}>Bo-Staff Mastery</h3>
            <p className="text-muted-foreground">Wield your signature weapon with physics-based precision and creative problem-solving.</p>
          </div>
          
          <div className="glass-card p-8 hover-lift group">
            <div className="w-16 h-16 bg-gradient-to-br from-mystic-green to-treasure-gold rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="font-display text-xl mb-3" style={{color: 'hsl(var(--treasure-gold))'}}>Canopy Traversal</h3>
            <p className="text-muted-foreground">Navigate breathtaking vertical environments with fluid parkour and climbing mechanics.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto py-20">
        <div className="glass-card p-12 text-center tech-border">
          <h2 className="font-display text-4xl lg:text-5xl mb-4 neon-glow">Ready for the Heist?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of players preparing for the ultimate caper. Get exclusive updates, behind-the-scenes content, and early access opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl" className="hover-lift">
              <Link to="/join">Join the Heist</Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="hover-lift tech-border">
              <Link to="/media">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
