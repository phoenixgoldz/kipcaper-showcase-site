import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { GameTrailer } from "@/components/GameTrailer";
import { ScreenshotsGallery } from "@/components/ScreenshotsGallery";
import { SystemRequirements } from "@/components/SystemRequirements";
import { AwardsSection } from "@/components/AwardsSection";
import { CharacterSelector } from "@/components/CharacterSelector";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <SEO title="Kip Caper and The Codex Caperius — Official Site" description="Master the art of thievery in this cel-shaded stealth-platformer. Join Kip, Tikka, and Peeka as they reclaim the stolen Codex Caperius across six exotic locations." image="/lovable-uploads/feba1c36-3442-4724-9d16-7b7a9186e9ba.png" />
      <Hero />
      
      {/* Game Trailer Section */}
      <GameTrailer />
      
      {/* Character Selector */}
      <CharacterSelector />
      
      {/* Screenshots Gallery */}
      <ScreenshotsGallery />

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

      {/* System Requirements */}
      <SystemRequirements />

      {/* Awards Section */}
      <AwardsSection />

      {/* Newsletter Signup */}
      <section className="container mx-auto py-20">
        <Newsletter />
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
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl mb-4 text-treasure-gold">Built for Adventure</h2>
          <p className="text-eucalyptus-mist text-lg max-w-2xl mx-auto">
            A cutting-edge stealth platformer powered by Unreal Engine 5.6, featuring global heists and progressive skill mastery.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group text-center p-6 rounded-xl glass-card hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-treasure-gold to-mystic-green flex items-center justify-center">
              <span className="text-2xl">🎮</span>
            </div>
            <h3 className="font-display text-xl mb-2 text-treasure-gold">Unreal Engine 5.6</h3>
            <p className="text-eucalyptus-mist text-sm">Cutting-edge graphics with cel-shaded anime aesthetics and stunning Codex glow effects.</p>
          </div>
          <div className="group text-center p-6 rounded-xl glass-card hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-mystic-green to-jungle-green flex items-center justify-center">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="font-display text-xl mb-2 text-treasure-gold">Global Heists</h3>
            <p className="text-eucalyptus-mist text-sm">From Sydney's rooftops to Amazon swamps, infiltrate exotic locations across six thrilling chapters.</p>
          </div>
          <div className="group text-center p-6 rounded-xl glass-card hover-lift sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-jungle-green to-bark-brown flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-display text-xl mb-2 text-treasure-gold">Progressive Skills</h3>
            <p className="text-eucalyptus-mist text-sm">Master new thief abilities each chapter—from Night-Eye Lenses to Shadow Decoys.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
