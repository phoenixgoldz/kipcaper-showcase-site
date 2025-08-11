import { Link, NavLink } from "react-router-dom";
const EMBLEM_SRC = "/lovable-uploads/587ae039-a119-445b-a4ae-686bd447dace.png";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

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
    <div className="min-h-screen flex flex-col">
      <header className={cn("sticky top-0 z-40 backdrop-blur border-b transition", scrolled ? "bg-background/70" : "bg-background/30")}
        role="banner">
        <div className="container mx-auto flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={EMBLEM_SRC} alt="Kip Caper masked koala emblem" loading="lazy" className="h-9 w-9 rounded-md shadow" />
            <span className="font-display text-lg">Kip Caper</span>
          </Link>
          <nav className="flex items-center gap-1" aria-label="Main Navigation">
            <NavLink to="/codex" className={navLinkClass}>Codex</NavLink>
            <NavLink to="/updates" className={navLinkClass}>Updates</NavLink>
            <NavLink to="/media" className={navLinkClass}>Media</NavLink>
            <NavLink to="/join" className={navLinkClass}>Join</NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t mt-16" role="contentinfo">
        <div className="container mx-auto py-10 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src={EMBLEM_SRC} alt="Kip emblem" loading="lazy" className="h-6 w-6 opacity-80" />
            <span>© {new Date().getFullYear()} Kip Caper</span>
          </div>
          <div className="flex gap-4">
            <a href="/" className="story-link">Home</a>
            <a href="/codex" className="story-link">Codex</a>
            <a href="/updates" className="story-link">Updates</a>
            <a href="/media" className="story-link">Media</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
