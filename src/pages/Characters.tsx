import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const characters = [
  {
    name: "Kip Caper",
    species: "Humanoid Koala",
    role: "Master Thief & Bo-Staff Expert",
    description: "Clever, resourceful, and staff-focused. Kip's ancestors embedded Codex secrets into his bamboo bo-staff, with each recovered page unlocking a new thief skill. Nocturnal by nature and cheeky by choice.",
    abilities: [
      "Koala Slide - Hangs beneath staff while riding ropes, wires, or vines",
      "Night-Eye Lenses - Reveals glowing thief paths and hidden glyphs", 
      "Bo-Staff Combat - Doubles as collapsible boomerang for ranged attacks",
      "Progressive Skills - Unlocks new abilities as Codex pages are recovered"
    ],
    motto: "\"Green means gone.\"",
    image: "/lovable-uploads/ce5bac29-1805-4689-a67b-2ecb9c945c22.png"
  },
  {
    name: "Tikka",
    species: "Tech Genius",
    role: "Codex Upgrader & Strategist",
    description: "The crew's brilliant tech specialist whose ancestors secretly helped Caper family thieves for generations, preserving Codex secrets across time. Off-mission, she retrofits Kip's bo-staff with new Codex technology.",
    abilities: [
      "Codex Integration - Upgrades Kip's staff with recovered technology",
      "System Hacking - Bypasses security systems and electronic locks",
      "Trap Disabling - Neutralizes Codex-powered security measures",
      "Strategic Planning - Maps optimal infiltration routes"
    ],
    motto: "\"Every lock has a digital key.\"",
    image: "/lovable-uploads/7d3f4f03-868e-488d-acbc-bf6ee26fe908.png"
  },
  {
    name: "Peeka",
    species: "Recon Specialist",
    role: "Scout, Aviator & History Buff",
    description: "The crew's eyes in the sky and master of reconnaissance. Her bloodline partnered with Capers throughout history as guides and guardians of hidden Codex caches. She gathers intel and uncovers ancient lore.",
    abilities: [
      "Aerial Reconnaissance - Scouts locations from above for optimal routes",
      "Fast Infiltration - Quick recon runs through enemy territory", 
      "Codex Lore - Deep knowledge of ancient Caper family history",
      "Route Planning - Maps safe passages and escape routes"
    ],
    motto: "\"Knowledge is the best weapon.\"",
    image: "/lovable-uploads/be2fb648-1262-45b0-b454-0dcbc00b3279.png"
  }
];

const Characters = () => {
  return (
    <Layout>
      <SEO 
        title="Characters — Meet the Crew" 
        description="Meet Kip Caper and his crew of master thieves. Learn about their unique abilities, backgrounds, and roles in reclaiming the Codex Caperius." 
      />
      
      <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4 neon-glow px-4">Meet the Crew</h1>
          <p className="text-lg sm:text-xl text-eucalyptus-mist max-w-2xl mx-auto px-4">
            The master thieves dedicated to reclaiming the stolen Codex Caperius, each bringing unique skills forged through generations of adventure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {characters.map((character, index) => (
            <Card key={character.name} className="glass-card hover-lift group overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-b from-jungle-green/20 to-midnight-shadow/60">
                <img 
                  src={character.image} 
                  alt={`${character.name} character art`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-shadow/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="mb-2 bg-treasure-gold/20 text-treasure-gold border-treasure-gold/30">
                    {character.species}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h2 className="font-display text-2xl mb-1" style={{color: 'hsl(var(--treasure-gold))'}}>
                    {character.name}
                  </h2>
                  <p className="text-mystic-green font-medium">{character.role}</p>
                </div>
                
                <p className="text-koala-grey leading-relaxed">
                  {character.description}
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-display text-lg" style={{color: 'hsl(var(--eucalyptus-mist))'}}>
                    Signature Abilities
                  </h3>
                  <ul className="space-y-2">
                    {character.abilities.map((ability, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="text-mystic-green mt-1 text-xs">▸</span>
                        <span className="text-koala-grey">{ability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm italic text-eucalyptus-mist">
                    {character.motto}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-20 text-center px-4 sm:px-0">
          <div className="glass-card p-6 sm:p-12 max-w-4xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl mb-4 sm:mb-6" style={{color: 'hsl(var(--treasure-gold))'}}>
              The Legacy Continues
            </h2>
            <p className="text-base sm:text-lg text-eucalyptus-mist leading-relaxed">
              For generations, the Caper family and their trusted allies have been guardians of ancient wisdom, 
              protectors of mystical artifacts, and masters of the impossible heist. Now, as Magnus the elephant 
              warlord threatens to abuse the power of the Codex Caperius, this unlikely crew must unite their 
              skills, honor their bloodlines, and pull off the greatest heist in history.
            </p>
            <p className="text-mystic-green mt-4 font-medium">
              "Whatever is thiefier is better."
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Characters;