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

      {/* Call to Action */}
      <section className="container mx-auto py-24">
        <div className="glass-card p-16 text-center tech-border hover-lift shadow-2xl bg-gradient-to-br from-midnight-shadow via-jungle-green/5 to-mystic-green/10">
          <h2 className="font-display text-5xl lg:text-6xl mb-6 neon-glow text-treasure-gold">Ready for the Heist?</h2>
          <p className="text-xl lg:text-2xl text-eucalyptus-mist mb-12 max-w-3xl mx-auto leading-relaxed">
            Psst… The crew's meeting in the canopy. Sign here if you've got quick paws, sharp eyes, and no fear of heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild variant="hero" size="xl" className="hover-lift kip-heist-glow shadow-2xl">
              <a 
                href="https://discord.gg/Xpana9fD"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join the Heist on Discord"
              >
                Join the Heist
              </a>
            </Button>
            <Button asChild variant="outline" size="xl" className="hover-lift tech-border codex-peek shadow-xl">
              <Link to="/story">See What's Missing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="container mx-auto py-24">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl mb-6 text-treasure-gold neon-glow">Built for Adventure</h2>
          <p className="text-eucalyptus-mist text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            A cutting-edge stealth platformer powered by Unreal Engine 5.6, featuring global heists and progressive skill mastery.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="group text-center p-8 rounded-2xl glass-card hover-lift transition-all duration-500 hover:shadow-2xl hover:scale-105">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-treasure-gold to-mystic-green flex items-center justify-center shadow-lg group-hover:shadow-treasure-gold/50 transition-all duration-300 group-hover:scale-110">
              <span className="text-3xl">🎮</span>
            </div>
            <h3 className="font-display text-2xl mb-4 text-treasure-gold group-hover:text-mystic-green transition-colors">Unreal Engine 5.6</h3>
            <p className="text-eucalyptus-mist leading-relaxed">Cutting-edge graphics with cel-shaded anime aesthetics and stunning Codex glow effects.</p>
          </div>
          <div className="group text-center p-8 rounded-2xl glass-card hover-lift transition-all duration-500 hover:shadow-2xl hover:scale-105">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-mystic-green to-jungle-green flex items-center justify-center shadow-lg group-hover:shadow-mystic-green/50 transition-all duration-300 group-hover:scale-110">
              <span className="text-3xl">🌍</span>
            </div>
            <h3 className="font-display text-2xl mb-4 text-treasure-gold group-hover:text-mystic-green transition-colors">Global Heists</h3>
            <p className="text-eucalyptus-mist leading-relaxed">From Sydney's rooftops to Amazon swamps, infiltrate exotic locations across six thrilling chapters.</p>
          </div>
          <div className="group text-center p-8 rounded-2xl glass-card hover-lift sm:col-span-2 lg:col-span-1 transition-all duration-500 hover:shadow-2xl hover:scale-105">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-jungle-green to-treasure-gold flex items-center justify-center shadow-lg group-hover:shadow-jungle-green/50 transition-all duration-300 group-hover:scale-110">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="font-display text-2xl mb-4 text-treasure-gold group-hover:text-mystic-green transition-colors">Progressive Skills</h3>
            <p className="text-eucalyptus-mist leading-relaxed">Master new thief abilities each chapter—from Night-Eye Lenses to Shadow Decoys.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
