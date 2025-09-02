import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Zap, Users } from "lucide-react";

const chapters = [
  {
    title: "Operation: Roo'd Awakening",
    location: "Sydney, Australia",
    villain: "Inspector Roxxy Redtail",
    villainType: "Kangaroo Rival/Ally",
    skillUnlocked: "Night-Eye Lenses",
    skillDescription: "Reveal glowing thief paths, vents, and ancient glyphs",
    narrative: "Kip reclaims his ancestral bo-staff from Roxxy's vault before Magnus' gang can steal it. He discovers the Codex Caperius device and unlocks his first mystical ability, setting him on a collision course with Silka Sandfang's smuggling empire.",
    gameplay: "Tutorial stealth gameplay featuring ropes, vents, and takedowns. Culminates in a cinematic Koala Slide escape across rooftop wires while dodging floodlights.",
    chapter: "Prologue"
  },
  {
    title: "Carpets, Crates, and Crooks",
    location: "Marrakesh, Morocco", 
    villain: "Silka Sandfang",
    villainType: "Wolf Smuggler Queen",
    skillUnlocked: "Rope Snare",
    skillDescription: "Pull crates, drop chandeliers, and snag distant levers",
    narrative: "Infiltrating the bustling bazaar's contraband network, Kip discovers whispers of Peeka's existence and realizes he can't tackle Magnus' empire alone.",
    gameplay: "Navigate hidden routes revealed by Night-Eye Lenses, manipulate contraband crates marked with glyphs, and master rope slides between rooftops.",
    chapter: "Chapter 1"
  },
  {
    title: "Swamp Things You Don't Want to See", 
    location: "Manaus, Brazil (Amazon)",
    villain: "Don Croco",
    villainType: "Crocodile Caiman Mob Boss",
    skillUnlocked: "Bog Grapple",
    skillDescription: "Hook across swamp mud and drag lightweight bridges",
    narrative: "Kip teams up with Peeka after initially mistaking her for a rival thief. Together they expose Croco's Codex-flooded defenses in the heart of the Amazon.",
    gameplay: "Use Rope Snare to position vine bridges and redirect swamp lanterns, while mastering vine slides across dangerous gaps.",
    chapter: "Chapter 2"
  },
  {
    title: "Tomb It May Concern",
    location: "Luxor, Egypt",
    villain: "Anubis Jackalton", 
    villainType: "Jackal Tomb Raider",
    skillUnlocked: "Sand Shift",
    skillDescription: "Slip into sand/dust piles to evade and slide under gaps",
    narrative: "Kip and Peeka infiltrate cursed tombs where Anubis proves to be highly technical, pushing the duo to seek out Tikka's expertise in Turkey.",
    gameplay: "Navigate crumbling tomb architecture using Bog Grapple, manipulate counterweights, and master rope descents down ancient shafts.",
    chapter: "Chapter 3"
  },
  {
    title: "Rocks, Robbers, and Rooftops",
    location: "Cappadocia, Turkey",
    villain: "Baron Talvik",
    villainType: "Owl Sky-Baron", 
    skillUnlocked: "Wind Glider",
    skillDescription: "Deploy koala glider suit to float and ride air currents",
    narrative: "Kip and Peeka meet Tikka while sabotaging Talvik's underground auction. When the Baron retaliates with trap-filled venues, the crew finally unites.",
    gameplay: "Use Sand Shift to navigate collapsing cave systems and slide through ventilation networks in underground auction houses.",
    chapter: "Chapter 4"
  },
  {
    title: "The Long Con in the Safari Sun",
    location: "Johannesburg, South Africa",
    villain: "Mamba Noir",
    villainType: "Black Mamba Casino/Poacher Kingpin",
    skillUnlocked: "Shadow Decoy", 
    skillDescription: "Create Codex illusions to lure and misdirect guards",
    narrative: "The crew stages an Ocean's 11-style casino heist con with full team rotation gameplay, infiltrating Mamba's poaching empire from within.",
    gameplay: "Master Wind Glider navigation through air ducts and laser-filled vaults, plus magnetic cable slides over the casino floor.",
    chapter: "Chapter 5"
  },
  {
    title: "An Elephant Never Forgets… to Steal",
    location: "The Shattered Sanctuary (Indian Ocean)",
    villain: "Magnus",
    villainType: "Elephant Warlord Mastermind",
    skillUnlocked: "Codex Synergy",
    skillDescription: "Combine all previous abilities for ultimate thievery",
    narrative: "The final island fortress heist. Magnus' puzzle-box stronghold is built with stolen Codex tricks, but he escapes in true Carmen Sandiego fashion, teasing future adventures.",
    gameplay: "Ultimate skill showcase: Night-Eye glyph doors, Rope Snare chandeliers, Bog Grapple across lava chasms, Sand Shift through vents, Wind Glider over magma drafts, and Shadow Decoy tactical plays.",
    chapter: "Chapter 6"
  }
];

const Story = () => {
  return (
    <Layout>
      <SEO 
        title="Story — The Global Heist" 
        description="Follow Kip Caper's journey across six exotic locations as he assembles his crew and reclaims the stolen Codex Caperius from Magnus and his villainous lieutenants." 
      />
      
      <div className="container mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl lg:text-5xl mb-4 neon-glow">The Global Heist</h1>
          <p className="text-xl text-eucalyptus-mist max-w-3xl mx-auto">
            Journey across six exotic locations as Kip assembles his crew and reclaims the stolen Codex Caperius. 
            Each chapter unlocks new abilities and brings you closer to confronting Magnus, the elephant warlord who threatens the world.
          </p>
        </div>

        <div className="space-y-8">
          {chapters.map((chapter, index) => (
            <Card key={chapter.title} className="glass-card hover-lift overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <Badge variant="outline" className="mb-2 border-treasure-gold text-treasure-gold">
                      {chapter.chapter}
                    </Badge>
                    <h2 className="font-display text-2xl mb-2" style={{color: 'hsl(var(--treasure-gold))'}}>
                      {chapter.title}
                    </h2>
                    <div className="flex items-center gap-2 text-eucalyptus-mist">
                      <MapPin className="w-4 h-4" />
                      <span>{chapter.location}</span>
                    </div>
                  </div>
                  <div className="text-right lg:text-left">
                    <div className="text-sm text-koala-grey mb-1">Main Antagonist</div>
                    <div className="font-display text-lg text-mystic-green">{chapter.villain}</div>
                    <div className="text-sm text-koala-grey">{chapter.villainType}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-display text-lg mb-3 flex items-center gap-2" style={{color: 'hsl(var(--eucalyptus-mist))'}}>
                      <Users className="w-5 h-5" />
                      Story
                    </h3>
                    <p className="text-koala-grey leading-relaxed">
                      {chapter.narrative}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-lg mb-3 flex items-center gap-2" style={{color: 'hsl(var(--eucalyptus-mist))'}}>
                      <Zap className="w-5 h-5" />
                      New Skill Unlocked
                    </h3>
                    <div className="space-y-2">
                      <div className="font-medium text-mystic-green">{chapter.skillUnlocked}</div>
                      <p className="text-sm text-koala-grey">{chapter.skillDescription}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h3 className="font-display text-lg mb-3" style={{color: 'hsl(var(--eucalyptus-mist))'}}>
                    Gameplay Highlights
                  </h3>
                  <p className="text-koala-grey leading-relaxed">
                    {chapter.gameplay}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <Card className="glass-card p-12 text-center">
            <h2 className="font-display text-3xl mb-6" style={{color: 'hsl(var(--treasure-gold))'}}>
              Progressive Mastery System
            </h2>
            <p className="text-lg text-eucalyptus-mist leading-relaxed mb-6">
              Each chapter builds upon the last, with newly acquired skills becoming essential tools for future heists. 
              By the final confrontation, you'll have mastered the complete Codex Caperius arsenal—but Magnus won't go down without a fight.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                "Night-Eye Lenses",
                "Rope Snare", 
                "Bog Grapple",
                "Sand Shift",
                "Wind Glider",
                "Shadow Decoy"
              ].map((skill, index) => (
                <Badge key={skill} variant="secondary" className="bg-mystic-green/20 text-mystic-green border-mystic-green/30">
                  {skill}
                </Badge>
              ))}
            </div>
            <p className="text-mystic-green font-medium">
              "The greatest heist isn't about what you steal—it's about what you give back."
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Story;