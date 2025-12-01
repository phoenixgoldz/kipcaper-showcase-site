import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { StudioBadge } from "@/components/StudioBadge";
import { AudioPlayer } from "@/components/AudioPlayer";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "px-3 py-2 rounded-md text-sm font-medium hover-scale story-link",
    isActive ? "text-accent" : "text-foreground/80 hover:text-foreground"
  );

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative scroll-smooth">
      {/* Background effects */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none"></div>
      
      {/* Global Audio Player */}
      <AudioPlayer />
      
      <header className={cn(
        "sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 transition-all duration-300", 
        scrolled ? "bg-background/80 shadow-2xl" : "bg-background/60"
      )} role="banner">
        <div className="container mx-auto flex items-center justify-between py-2.5 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-6">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 hover-scale group">
            <StudioBadge size="sm" className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-display text-base sm:text-lg lg:text-xl bg-gradient-to-r from-thief-gold to-emerald-glow bg-clip-text text-transparent">
              Kip Caper
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-2" aria-label="Main Navigation">
            <NavLink to="/story" className={navLinkClass}>Story</NavLink>
            <NavLink to="/characters" className={navLinkClass}>Characters</NavLink>
            <NavLink to="/codex" className={navLinkClass}>Codex</NavLink>
            <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
            <NavLink to="/join" className={cn(navLinkClass({ isActive: false }), "ml-4")}>
              <span className="px-4 py-2 bg-gradient-to-r from-stealth-silver to-thief-gold rounded-lg text-shadow-black font-semibold hover:scale-105 transition-transform kip-glow text-sm">
                Join Heist
              </span>
            </NavLink>
          </nav>
          
          {/* Mobile Navigation - Touch-friendly */}
          <nav className="lg:hidden flex items-center gap-1.5 sm:gap-2 text-xs" aria-label="Mobile Navigation">
            <NavLink to="/story" className="px-2 py-1.5 rounded hover:bg-stealth-silver/10 transition-colors min-h-[44px] flex items-center">Story</NavLink>
            <NavLink to="/characters" className="px-2 py-1.5 rounded hover:bg-stealth-silver/10 transition-colors min-h-[44px] flex items-center">Cast</NavLink>
            <NavLink to="/shop" className="px-2 py-1.5 rounded hover:bg-stealth-silver/10 transition-colors min-h-[44px] flex items-center">Shop</NavLink>
            <NavLink to="/join" className="px-2.5 py-1.5 bg-thief-gold text-shadow-black rounded font-medium hover-scale min-h-[44px] flex items-center">Join</NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1 relative z-10">{children}</main>

      <footer className="relative z-10 border-t border-white/10 mt-8 sm:mt-12 lg:mt-20 glass-card" role="contentinfo">
        <div className="container mx-auto py-6 sm:py-8 lg:py-12 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-center md:text-left">
              <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                <StudioBadge size="sm" />
                <span className="font-display text-sm sm:text-base lg:text-lg">PhoenixGold Game Studios</span>
              </div>
              <p className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">
                Stealing hearts and pixels since 2025. Powered by eucalyptus and questionable life choices.
              </p>
            </div>
            
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-center md:text-left">
              <h3 className="font-display text-sm sm:text-base lg:text-lg" style={{color: 'hsl(var(--thief-gold))'}}>Game</h3>
              <div className="flex flex-col gap-1 sm:gap-1.5 lg:gap-2 text-[10px] sm:text-xs lg:text-sm">
                <Link to="/" className="story-link hover:text-emerald-glow transition-colors">Home</Link>
                <Link to="/story" className="story-link hover:text-emerald-glow transition-colors">Story</Link>
                <Link to="/characters" className="story-link hover:text-emerald-glow transition-colors">Characters</Link>
                <Link to="/codex" className="story-link hover:text-emerald-glow transition-colors">Codex</Link>
                <Link to="/shop" className="story-link hover:text-emerald-glow transition-colors">Shop</Link>
                <Link to="/join" className="story-link hover:text-emerald-glow transition-colors">Join the Heist</Link>
              </div>
            </div>
            
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-center md:text-left">
              <h3 className="font-display text-sm sm:text-base lg:text-lg" style={{color: 'hsl(var(--emerald-glow))'}}>Connect</h3>
              <div className="flex flex-col gap-1 sm:gap-1.5 lg:gap-2 text-[10px] sm:text-xs lg:text-sm">
                <a href="https://discord.gg/FxpB2Zw2P6" target="_blank" rel="noopener noreferrer" className="story-link hover:text-emerald-glow transition-colors">Discord Community</a>
                <a href="#" className="story-link hover:text-emerald-glow transition-colors">Steam Wishlist</a>
                <a href="#" className="story-link hover:text-emerald-glow transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] sm:text-xs lg:text-sm text-muted-foreground gap-3">
            <span className="text-center md:text-left">© {new Date().getFullYear()} PhoenixGold Game Studios. All rights reserved.</span>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="hover:text-emerald-glow transition-colors">Privacy</a>
              <a href="#" className="hover:text-emerald-glow transition-colors">Terms</a>
              <a href="#" className="hover:text-emerald-glow transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
