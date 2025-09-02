import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <SEO title="Kip Caper and The Codex Caperius — Official Site" description="Master the art of thievery in this cel-shaded stealth-platformer. Join Kip, Tikka, and Peeka as they reclaim the stolen Codex Caperius across six exotic locations." image="/lovable-uploads/feba1c36-3442-4724-9d16-7b7a9186e9ba.png" />
      <Hero />
      {/* Features Section */}
      <section className="container mx-auto py-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl mb-4 neon-glow">Game Features</h2>
          <p className="text-xl text-eucalyptus-mist max-w-2xl mx-auto">
            Master the art of thievery in this cel-shaded stealth-platformer. Unlock mystical bo-staff skills, traverse exotic locations, and assemble your crew to reclaim the stolen Codex Caperius.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-8 hover-lift group">
            <div className="w-16 h-16 bg-gradient-to-br from-jungle-green to-eucalyptus-mist rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-display text-xl mb-3" style={{color: 'hsl(var(--treasure-gold))'}}>Precision Stealth</h3>
            <p className="text-koala-grey">Slip past the clueless with style and zero footprints.</p>
          </div>
          
          <div className="glass-card p-8 hover-lift group">
            <div className="w-16 h-16 bg-gradient-to-br from-eucalyptus-mist to-mystic-green rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl">🥢</span>
            </div>
            <h3 className="font-display text-xl mb-3" style={{color: 'hsl(var(--treasure-gold))'}}>Bo-Staff Mastery</h3>
            <p className="text-koala-grey">Spin it, vault with it, bonk with it—your trusty bamboo never quits.</p>
          </div>
          
          <div className="glass-card p-8 hover-lift group">
            <div className="w-16 h-16 bg-gradient-to-br from-mystic-green to-treasure-gold rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="font-display text-xl mb-3" style={{color: 'hsl(var(--treasure-gold))'}}>Canopy Traversal</h3>
            <p className="text-koala-grey">From drainpipes to treetop zip lines—if it's climbable, it's mine-able.</p>
          </div>

          <div className="glass-card p-8 hover-lift group">
            <div className="w-16 h-16 bg-gradient-to-br from-treasure-gold to-jungle-green rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="font-display text-xl mb-3" style={{color: 'hsl(var(--treasure-gold))'}}>Crew Rotations</h3>
            <p className="text-koala-grey">Switch between Kip, Tikka, and Peeka—each with unique abilities.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto py-20">
        <div className="glass-card p-12 text-center tech-border">
          <h2 className="font-display text-4xl lg:text-5xl mb-4 neon-glow">Ready for the Heist?</h2>
          <p className="text-xl text-eucalyptus-mist mb-8 max-w-2xl mx-auto">
            Psst… The crew's meeting in the canopy. Sign here if you've got quick paws, sharp eyes, and no fear of heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl" className="hover-lift kip-heist-glow">
              <Link to="/join">Join the Heist</Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="hover-lift tech-border codex-peek">
              <Link to="/story">See What's Missing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="container mx-auto py-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl mb-4" style={{color: 'hsl(var(--treasure-gold))'}}>Built for Adventure</h2>
          <p className="text-xl text-eucalyptus-mist max-w-2xl mx-auto">
            Powered by cutting-edge technology and years of heist expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-card p-8 hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-mystic-green to-treasure-gold rounded-2xl mb-6 flex items-center justify-center">
              <span className="text-2xl">🎮</span>
            </div>
            <h3 className="font-display text-xl mb-3" style={{color: 'hsl(var(--treasure-gold))'}}>Unreal Engine 5.6</h3>
            <p className="text-koala-grey">Next-generation graphics with cel-shaded artistry and dynamic lighting.</p>
          </div>
          
          <div className="glass-card p-8 hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-treasure-gold to-eucalyptus-mist rounded-2xl mb-6 flex items-center justify-center">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="font-display text-xl mb-3" style={{color: 'hsl(var(--treasure-gold))'}}>Global Locations</h3>
            <p className="text-koala-grey">Six exotic locations from Sydney's rooftops to Egyptian tombs.</p>
          </div>
          
          <div className="glass-card p-8 hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-eucalyptus-mist to-mystic-green rounded-2xl mb-6 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-display text-xl mb-3" style={{color: 'hsl(var(--treasure-gold))'}}>Progressive Skills</h3>
            <p className="text-koala-grey">Unlock new abilities with each recovered Codex page.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
