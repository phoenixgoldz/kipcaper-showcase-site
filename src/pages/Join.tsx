import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Join = () => {
  const [email, setEmail] = useState("");

  return (
    <Layout>
      <SEO title="Join the Heist — Sign up for Updates" description="Get exclusive access to Kip Caper development updates, behind-the-scenes content, and early gameplay previews." />
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-jungle-green/10 to-mystic-green/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display text-5xl lg:text-6xl mb-6 neon-glow">Join the Heist</h1>
            <p className="text-xl text-eucalyptus-mist">
              Ready to join the crew? Follow the green trail and become part of the most daring heist crew in gaming history.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto pb-20">
        <div className="max-w-2xl mx-auto">
          <section className="glass-card p-8 tech-border hover-lift">
            <h2 className="font-display text-2xl mb-6 text-center" style={{color: 'hsl(var(--treasure-gold))'}}>Sign Up for Updates</h2>
            
            <form
              className="space-y-6"
              action="https://buttondown.email/api/emails/subscribe"
              method="post"
              target="_blank"
              rel="noopener noreferrer"
            >
              <input type="hidden" name="tag" value="KipCaper" />
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-3 text-eucalyptus-mist">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@domain.com"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-lg rounded-xl border-2 border-mystic-green/30 focus:border-mystic-green bg-background/50"
                />
              </div>
              
              <Button type="submit" variant="hero" size="xl" className="w-full hover-lift kip-heist-glow">
                Join the Heist
              </Button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="font-display text-lg mb-4 text-center" style={{color: 'hsl(var(--eucalyptus-mist))'}}>Support the Project</h3>
              <div className="mb-6">
                <Button asChild variant="hero" size="xl" className="w-full hover-lift kip-heist-glow mb-4">
                  <a 
                    href="https://www.kickstarter.com/projects/phoenixgoldgames/kip-caper-and-the-codex-caperius" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Back Kip Caper on Kickstarter"
                  >
                    🚀 Back on Kickstarter
                  </a>
                </Button>
              </div>
              
              <h4 className="font-display text-lg mb-4 text-center" style={{color: 'hsl(var(--eucalyptus-mist))'}}>Quick Links</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button variant="outline" asChild className="hover-lift tech-border codex-peek">
                  <a href="#" aria-label="Steam Wishlist placeholder">
                    Steam Wishlist
                  </a>
                </Button>
                <Button variant="outline" asChild className="hover-lift tech-border codex-peek">
                  <a href="#" aria-label="Press Kit soon">
                    Press Kit (soon)
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-treasure-gold to-mystic-green rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl">📧</span>
              </div>
              <h3 className="font-display text-lg mb-2" style={{color: 'hsl(var(--treasure-gold))'}}>Exclusive Updates</h3>
              <p className="text-sm text-eucalyptus-mist">Get the latest development news and gameplay reveals before anyone else.</p>
            </div>
            
            <div className="glass-card p-6 text-center hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-mystic-green to-eucalyptus-mist rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl">🎮</span>
              </div>
              <h3 className="font-display text-lg mb-2" style={{color: 'hsl(var(--mystic-green))'}}>Early Access</h3>
              <p className="text-sm text-eucalyptus-mist">Opportunities for beta testing and exclusive gameplay previews.</p>
            </div>
            
            <div className="glass-card p-6 text-center hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-eucalyptus-mist to-treasure-gold rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl">🎨</span>
              </div>
              <h3 className="font-display text-lg mb-2" style={{color: 'hsl(var(--eucalyptus-mist))'}}>Behind the Scenes</h3>
              <p className="text-sm text-eucalyptus-mist">Developer insights, concept art, and making-of content.</p>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Join;
