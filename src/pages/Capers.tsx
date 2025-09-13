import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import parchment from "@/assets/parchment-texture.jpg";
import reward from "@/assets/concept-boomerang-shadow-run.png";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const STORAGE_KEY = "capers_solved";

const Capers = () => {
  const [value, setValue] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [wrong, setWrong] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached === "1") setUnlocked(true);
  }, []);

  const playTsk = () => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const Ctx = (window.AudioContext || (window as any).webkitAudioContext);
    if (!Ctx) return;
    const ctx = new Ctx();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'square';
    o.frequency.setValueAtTime(380, ctx.currentTime);
    g.gain.setValueAtTime(0.04, ctx.currentTime);
    o.connect(g); g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.08);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().toUpperCase() === 'CAPERS') {
      setUnlocked(true);
      localStorage.setItem(STORAGE_KEY, '1');
    } else {
      setWrong(true);
      playTsk();
      setTimeout(() => setWrong(false), 300);
    }
  };

  return (
    <Layout>
      <SEO title="Capers — Secret" />
      <main className="container mx-auto py-12 sm:py-20 px-4 sm:px-6">
        <section className="mx-auto max-w-2xl text-center">
          <div ref={cardRef} className={`relative mx-auto w-full rounded-xl border p-4 sm:p-8 bg-card grain-overlay ${wrong ? 'flip-once' : 'animate-scale-in'}`}>
            <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden">
              <img src={parchment} alt="Codex page pedestal" className="absolute inset-0 w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-xl sm:text-2xl">Codex Page</span>
              </div>
            </div>
            {!unlocked ? (
              <form onSubmit={submit} className="mt-4 sm:mt-6 grid gap-3">
                <label htmlFor="capers" className="text-sm text-muted-foreground">Enter the recovered word.</label>
                <Input id="capers" value={value} onChange={e => setValue(e.target.value)} placeholder="••••••" className="text-center" />
                <div className="text-xs text-muted-foreground">Six leaves, one word.</div>
                <div className="pt-1">
                  <Button type="submit" variant="hero" className="hover-scale w-full sm:w-auto">Turn the page</Button>
                </div>
              </form>
            ) : (
              <div className="mt-4 sm:mt-6 text-left">
                <p className="text-accent font-medium text-sm sm:text-base">Nicely done, sleuth. Kip approves.</p>
                <div className="mt-4 rounded-lg border p-3 sm:p-4 bg-muted/20 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <img src={reward} alt="Concept Art: Bo-Staff Shadow Run" className="h-16 sm:h-20 w-24 sm:w-32 object-cover rounded mx-auto sm:mx-0" />
                  <div className="text-center sm:text-left">
                    <h3 className="font-display text-base sm:text-lg">Concept Art: Bo-Staff Shadow Run</h3>
                    <a href={reward} download className="story-link text-sm sm:text-base" aria-label="Download reward image">Download PNG</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Capers;
