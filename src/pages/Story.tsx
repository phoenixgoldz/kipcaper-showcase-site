import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const gameInfo = {
  title: "Koala Kip and The Codex Caperis",
  genre: "Stealth • Action-Adventure • Platformer", 
  engine: "Unreal Engine 5.6",
  artStyle: "Cel-shaded anime pulp look with Codex glow effects",
  perspective: "Third-person toon-shaded stealth platformer"
};

const dnaBlendsection = {
  title: "DNA Blend",
  inspiration: [
    { game: "Sly Cooper", description: "Heist-driven flow, humor, skills that unlock platforming design." },
    { game: "Carmen Sandiego", description: "Global chase of Magnus' lieutenants, \"case file\" feel for each chapter." },
    { game: "Koala Twist", description: "Thief crew of Kip, Peeka, and Tikka — each with their own mission turns." }
  ],
  motto: "\"Whatever is thiefier is better.\"",
  scope: "1 new thief skill per chapter, 2–3 setpiece puzzles in the following chapter, crew rotations for variety, missions stay short & punchy.",
  rule: "Avoid Sly Cooper's mistakes while keeping the audience engaged and laughing."
};

const kipIdentity = {
  name: "Kip Caper",
  species: "Humanoid koala, nocturnal, cheeky thief",
  weapon: "Bamboo bo-staff (doubles as collapsible boomerang)",
  theme: "Kip is clever, resourceful, and staff-focused — his ancestors embedded Codex secrets into the staff, each page unlocking a new thief skill.",
  baselineSkill: "Koala Slide",
  skillDescription: "Kip hangs beneath his staff while it rides across ropes, wires, or vines.",
  coreMove: "Fast traversal + cinematic escape stunt",
  progression: "Reappears each chapter with thematic upgrades (vine slides, sand rope descents, magnetic cables, Codex shadow slides)"
};

const gameplayFlow = [
  "Codex Globe Hub: Choose which \"case file\" (chapter) to pursue.",
  "Mission Intro: Comic-style pulp card (like Sly 2) + witty villain reveal.", 
  "Heist Gameplay: Action–stealth platforming puzzles centered on current skill set.",
  "Boss Showdown: Villain abuses a Codex trick → Kip outsmarts them.",
  "Crew Rotations: Later chapters split into playable sections (Kip, Peeka, Tikka).",
  "Skill Unlock: New thief ability added → designed for next chapter's puzzles.",
  "Bantery Wrap-up: Saturday-morning style comedy + tease of Magnus' bigger plan."
];

const chapters = [
  {
    id: "prologue",
    title: "Cargo Plane Heist",
    operation: "Sky's the Limit",
    subtitle: "Tutorial + inciting incident", 
    setting: "Inside a massive cargo ship airplane flying over the desert at night.",
    openingLine: "Kip mutters: \"Time to snag that sweet golden treasure cargo…\"",
    gameplay: "Teach movement, jump, crouch-stealth. Crate climbing, rope-balancing, spotlight evasion. Traps (laser grid floor panels, swinging hooks to avoid, cargo boxes moving along floor to be crushed by).",
    climax: "Kip reaches the Codex cargo crate → ambushed by Magnus' lieutenant Silka sandfang.",
    villain: "Silka Sandfang (Silver wolf smuggler queen)",
    villainImage: "/lovable-uploads/c7104955-097a-4316-b2fb-090253d9fae1.png",
    villainDetails: {
      species: "Silver wolf",
      role: "Smuggler Queen / Air Pirate", 
      personality: "Silka is sharp-tongued, arrogant, and always two steps ahead. She loves the thrill of cornering prey in tight spaces. Kip is \"small-time\" to her, but she still toys with him because she enjoys the game.",
      jobDescription: "Smuggling queen who traffics ancient Codex artifacts through cargo planes and hidden shipping routes. Think ruthless CEO + pirate captain.",
      villainryStyle: "Stylish, practical, and pragmatic. She will cut losses (like crashing a plane) just to keep the Codex fragment out of Kip's hands.",
      codexTie: "Knows how to weaponize contraband shipments."
    },
    villainBanter: "Quips at Kip, shoots the engines, and escapes via airlock parachute. Before jumping another quip at kip.",
    setpiece: "Kip sprints through chaos, dodges sliding crates, then Koala Slides on a dangling cable to the cockpit.",
    radioMystery: "After wreck, Kip finds the Codex crate and a broken radio. A mysterious voice crackles in from someone watching, giving tutorial hints through Chapter 1.",
    skillUnlocked: "Night-Eye Lenses",
    chapter: "Prologue"
  },
  {
    id: "chapter1", 
    title: "Carpets, Crates, and Crooks Oh My?!",
    location: "Marrakesh, Morocco",
    villain: "Silka Sandfang (Silver wolf smuggler queen)",
    villainImage: "/lovable-uploads/c7104955-097a-4316-b2fb-090253d9fae1.png",
    villainDetails: {
      species: "Silver wolf",
      role: "Smuggler Queen / Air Pirate",
      personality: "Same as prologue, but here she shows her true colors — fiercely territorial, paranoid about Kip sniffing around her smuggling network.",
      jobDescription: "Runs a sprawling smuggling cartel disguised as a shipping/export business. Contraband crates are marked with Codex glyphs, tying her shipments to Magnus.",
      villainryStyle: "Uses traps, tricks, and diversions. Boss fight emphasizes pulling ropes/chandeliers, crate puzzles, and dodging her whip-like snare weapon.",
      skillFocus: "Rope Snare"
    },
    skillUnlocked: "Rope Snare → pull crates, drop chandeliers, snag levers",
    narrative: "Kip emerges safe from wreckage among desert ruins and cargo debris. Uses radio hints to track contraband crates glowing with glyphs.",
    puzzles: "Night-Eye Lenses reveal hidden thief opportunities and thief routes. Contraband crates marked with glyphs tied to Silka's smuggling ring.",
    koalaSlide: "Rope slides between rooftops, dodging lanterns and banners",
    setsUp: "Chapter 2's Amazon swamp → the mystery voice turns out to be Peeka, Kip's soon-to-be scout partner.",
    chapter: "Chapter 1"
  },
  {
    id: "chapter2",
    title: "Swamp Things You Don't Want to See", 
    location: "Manaus, Brazil (Amazon)",
    villain: "Don Croco (crocodile caiman mob boss)",
    villainImage: "/lovable-uploads/cbe2153c-efe2-42cd-91fc-b5d058d9788f.png",
    villainDetails: {
      species: "Crocodile (caiman mob boss)",
      role: "Swamp Crime Boss",
      personality: "A swaggering brute who pretends to be \"civilized,\" but his temper snaps easily. Loves to monologue, calling himself a \"businessman.\"",
      jobDescription: "Mob boss who uses Codex tricks to flood the Amazon and extort villages into paying him tribute. He's part crocodile, part casino-style showman.",
      villainryStyle: "Uses brute strength, swamp-based traps, and underlings to do his dirty work. Kip must use agility and rope/snare tricks to outwit him.",
      skillFocus: "Bog Grapple"
    },
    skillUnlocked: "Bog Grapple → hook across swamp mud, drag lightweight bridges",
    narrative: "Kip teams with Peeka after mistaking her for a rival thief. Together they expose Croco's Codex-flooded defenses.",
    puzzles: "Pull vine bridges into place. Snare swamp lanterns to misdirect guards.",
    koalaSlide: "Swinging vine slides across swamp gaps",
    setsUp: "Chapter 3's tomb traversal.",
    chapter: "Chapter 2"
  },
  {
    id: "chapter3",
    title: "Tomb It May Concern",
    location: "Luxor, Egypt", 
    villain: "Anubis Jackalton (jackal tomb raider)",
    villainImage: "/lovable-uploads/5d3a4fd5-773c-4e65-93d6-65d8a8f51e99.png",
    villainDetails: {
      species: "Jackal",
      role: "Tomb Raider / Fake Archaeologist",
      personality: "Obsessed, academic, and theatrical. Thinks he's the \"chosen guardian of the tombs\" but really he's just a Codex thief playing dress-up as a pharaoh's priest.",
      jobDescription: "A tomb raider posing as an archaeologist. Sells stolen relics on the black market while hoarding Codex fragments for himself.",
      villainryStyle: "Traps galore. Puzzles and riddles dominate the environment. Boss fight has him summoning sand shades and collapsing tombs.",
      skillFocus: "Sand Shift"
    },
    skillUnlocked: "Sand Shift → slip into sand/dust piles to evade and slide under gaps",
    narrative: "Kip & Peeka infiltrate cursed tombs. Anubis proves highly technical, pushing them to seek Tikka in Turkey.",
    puzzles: "Grapple crumbling bridges. Pull down counterweights to unlock doors.",
    koalaSlide: "Rope descents down tomb shafts",
    setsUp: "Chapter 4 caves & cliffs.",
    chapter: "Chapter 3"
  },
  {
    id: "chapter4",
    title: "Rocks, Robbers, and Rooftops",
    location: "Cappadocia, Turkey",
    villain: "Baron Talvik (owl sky-baron)",
    villainImage: "/lovable-uploads/734355f8-c7fa-468f-83f7-65233ff06838.png",
    villainDetails: {
      species: "Owl",
      role: "Black-Market Auctioneer / Arms Dealer",
      personality: "Cold, calculating, aristocratic. Speaks like a pompous noble. Believes himself untouchable above the rabble.",
      jobDescription: "A black-market auctioneer and arms dealer, selling stolen Codex artifacts to the highest bidder. Uses underground caves as smuggling vaults.",
      villainryStyle: "Air superiority — swooping attacks, wind gust traps, and henchmen with aerial gadgets. He fights from above while Kip uses stealth to ground him.",
      skillFocus: "Wind Glider"
    },
    skillUnlocked: "Wind Glider → koala glider suit to float and ride drafts",
    narrative: "Kip & Peeka meet Tikka while sabotaging Talvik's auction. Baron retaliates with underground auctions full of traps. Crew unites.",
    puzzles: "Slide under collapsing cave walls. Sneak through sand vents.",
    koalaSlide: "Underground rope networks, some booby-trapped",
    setsUp: "Chapter 5 rooftops & casino infiltration.",
    chapter: "Chapter 4"
  },
  {
    id: "chapter5",
    title: "The Long Con in the Safari Sun",
    location: "Johannesburg, South Africa",
    villain: "Mamba Noir (black mamba casino/poacher kingpin)",
    villainImage: "/lovable-uploads/716a1dd8-ab52-4b17-8aa2-4698fe57226d.png",
    villainDetails: {
      species: "Black Mamba snake",
      role: "Casino Empire Owner / Poaching Kingpin",
      personality: "Sleek, manipulative, and charismatic. Treats every encounter like a poker game. Loves gambling with other people's lives.",
      jobDescription: "Runs a casino empire and a poaching operation on the side. His casino doubles as a vault for Codex treasures.",
      villainryStyle: "Trickster, using illusions and traps. Boss fight is part con, part combat, requiring Kip and crew to spot the real Mamba among shadow decoys.",
      skillFocus: "Shadow Decoy"
    },
    skillUnlocked: "Shadow Decoy → Codex illusion to lure guards",
    narrative: "Crew stages a casino heist con, Ocean's 11–style. Full team rotation playable.",
    puzzles: "Glide across air ducts and ledges. Balance against air trap corridors in vault.",
    koalaSlide: "Magnetic cable slides over laser-filled casino floor",
    setsUp: "Chapter 6 infiltration gauntlet.",
    chapter: "Chapter 5"
  },
  {
    id: "chapter6",
    title: "An Elephant Never Forgets… to Steal",
    location: "The Shattered Sanctuary (Indian Ocean)",
    villain: "Magnus (elephant warlord mastermind)",
    villainImage: "/lovable-uploads/259620bf-21b5-47d1-b0c0-e69d8557586f.png",
    villainDetails: {
      species: "Elephant",
      role: "Warlord Mastermind",
      personality: "Cunning, ruthless, and visionary. Unlike his lieutenants, he's not driven by greed alone — he wants the Codex for power and legacy.",
      jobDescription: "Warlord mastermind who manipulates others to do his bidding. Each lieutenant was only a pawn in his Codex scheme.",
      villainryStyle: "Uses every Codex trick mastered by the others, combining them into overwhelming challenges. His fortress is a living puzzle-box designed to break thieves.",
      skillFocus: "Codex Synergy"
    },
    skillUnlocked: "Codex Synergy → no new skill, but combine all previous powers",
    narrative: "Final island heist. Fortress puzzle-box built with Codex tricks. Magnus escapes in true Carmen Sandiego fashion, teasing sequel.",
    puzzles: "Night-Eye: glyph doors in lava tunnels. Rope Snare: chandeliers. Bog Grapple: swing magma chasms. Sand Shift: vents. Wind Glider: lava drafts. Shadow Decoy: lure guards into traps.",
    koalaSlide: "Eclipse Shadow Slides across Codex cables mid-battle",
    setsUp: "Sequel setup with Magnus' escape.",
    chapter: "Chapter 6"
  }
];

const teamFlow = [
  "Prologue & Chapter 1: Kip solo",
  "Chapter 2: Kip + Peeka (Peeka scout missions)",
  "Chapter 3: Kip + Peeka", 
  "Chapter 4: Kip + Peeka + Tikka joins",
  "Chapter 5: Full crew rotation",
  "Chapter 6: Full crew finale"
];

const Story = () => {
  return (
    <Layout>
      <SEO 
        title="Story — The Codex Heist Saga" 
        description="Follow Kip Caper's journey from cargo plane crash to global heist mastermind as he assembles his crew and reclaims the stolen Codex Caperius across six exotic chapters." 
      />
      
      <div className="container mx-auto py-10 sm:py-14 lg:py-16 px-5 sm:px-6">
        {/* Game Overview */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 neon-glow px-2 leading-tight">Kip Caper and The Codex Caperius</h1>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 px-4">
            <Badge variant="secondary" className="bg-treasure-gold/20 text-treasure-gold border-treasure-gold/30 text-sm sm:text-base py-2 px-4">
              {gameInfo.genre}
            </Badge>
            <Badge variant="secondary" className="bg-mystic-green/20 text-mystic-green border-mystic-green/30 text-sm sm:text-base py-2 px-4">
              {gameInfo.engine}
            </Badge>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-eucalyptus-mist max-w-3xl mx-auto mb-5 px-4 leading-relaxed">
            {gameInfo.artStyle}
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-koala-grey px-4 leading-relaxed">
            {gameInfo.perspective}
          </p>
        </div>

        {/* DNA Blend Section */}
        <section className="mb-12 sm:mb-16">
          <Card className="glass-card hover-lift">
            <CardHeader className="p-4 sm:p-6">
              <h2 className="font-display text-2xl sm:text-3xl text-treasure-gold">🎭 DNA Blend</h2>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {dnaBlendsection.inspiration.map((item, index) => (
                  <div key={index} className="glass-card p-4 hover-lift">
                    <h3 className="font-display text-lg text-mystic-green mb-2">{item.game}</h3>
                    <p className="text-koala-grey text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="text-center space-y-4">
                <p className="text-2xl text-treasure-gold font-display italic">{dnaBlendsection.motto}</p>
                <p className="text-eucalyptus-mist">{dnaBlendsection.scope}</p>
                <p className="text-koala-grey text-sm font-semibold">{dnaBlendsection.rule}</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Kip Identity Section */}
        <section className="mb-12 sm:mb-16">
          <Card className="glass-card hover-lift">
            <CardHeader className="p-4 sm:p-6">
              <h2 className="font-display text-2xl sm:text-3xl text-treasure-gold">🐨 Core Identity: Kip Caper</h2>
            </CardHeader>
            <CardContent className="space-y-4 p-4 sm:p-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="font-display text-xl text-mystic-green mb-2">Character Profile</h3>
                  <p className="text-eucalyptus-mist mb-2"><strong>Species:</strong> {kipIdentity.species}</p>
                  <p className="text-eucalyptus-mist mb-2"><strong>Weapon:</strong> {kipIdentity.weapon}</p>
                  <p className="text-koala-grey">{kipIdentity.theme}</p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-mystic-green mb-2">Signature Move</h3>
                  <p className="text-treasure-gold font-semibold mb-2">{kipIdentity.baselineSkill}</p>
                  <p className="text-eucalyptus-mist mb-2">{kipIdentity.skillDescription}</p>
                  <p className="text-koala-grey text-sm"><strong>Core Move:</strong> {kipIdentity.coreMove}</p>
                  <p className="text-koala-grey text-sm"><strong>Progression:</strong> {kipIdentity.progression}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>


        {/* Chapters */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-treasure-gold flex-shrink-0" strokeWidth={2.5} />
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-center text-treasure-gold">Chapters & Skills</h2>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {chapters.map((chapter, index) => (
              <Card key={chapter.id} className="glass-card hover-lift overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${index === 0 ? "from-treasure-gold/20 to-mystic-green/20" : "from-jungle-green/20 to-eucalyptus-mist/20"} p-4 sm:p-6`}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 bg-treasure-gold/30 text-treasure-gold text-xs">
                        {chapter.chapter}
                      </Badge>
                      <h3 className="font-display text-xl sm:text-2xl text-treasure-gold">{chapter.title}</h3>
                      {chapter.location && (
                        <p className="text-mystic-green font-medium">{chapter.location}</p>
                      )}
                      {chapter.operation && (
                        <p className="text-eucalyptus-mist italic">Operation: {chapter.operation}</p>
                      )}
                    </div>
                    {chapter.skillUnlocked && (
                      <Badge variant="secondary" className="bg-mystic-green/20 text-mystic-green border-mystic-green/30">
                        {chapter.skillUnlocked.split(" →")[0]}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  {chapter.subtitle && (
                    <p className="text-lg text-treasure-gold font-semibold">{chapter.subtitle}</p>
                  )}
                  
                  {chapter.setting && (
                    <div>
                      <h4 className="font-display text-lg text-mystic-green mb-1">Setting</h4>
                      <p className="text-eucalyptus-mist">{chapter.setting}</p>
                    </div>
                  )}

                  {chapter.openingLine && (
                    <div>
                      <h4 className="font-display text-lg text-mystic-green mb-1">Opening Line</h4>
                      <p className="text-treasure-gold italic">{chapter.openingLine}</p>
                    </div>
                  )}

                  {chapter.villain && (
                    <div>
                      <h4 className="font-display text-lg text-mystic-green mb-3">🎭 Villain Profile</h4>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-treasure-gold mb-1">{chapter.villain}</h5>
                          {chapter.villainDetails && (
                            <div className="space-y-2 text-sm">
                              <p><span className="text-mystic-green font-medium">Species:</span> <span className="text-eucalyptus-mist">{chapter.villainDetails.species}</span></p>
                              <p><span className="text-mystic-green font-medium">Role:</span> <span className="text-eucalyptus-mist">{chapter.villainDetails.role}</span></p>
                              {chapter.villainDetails.skillFocus && (
                                <p><span className="text-mystic-green font-medium">Skill Focus:</span> <span className="text-treasure-gold">{chapter.villainDetails.skillFocus}</span></p>
                              )}
                            </div>
                          )}
                        </div>
                        {chapter.villainImage && (
                          <div className="flex-shrink-0">
                            <img 
                              src={chapter.villainImage} 
                              alt={chapter.villain}
                              className="w-20 h-20 object-cover rounded-lg border border-border/30"
                            />
                          </div>
                        )}
                      </div>
                      
                      {chapter.villainDetails && (
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="text-mystic-green font-medium">Personality:</span>
                            <p className="text-koala-grey mt-1">{chapter.villainDetails.personality}</p>
                          </div>
                          <div>
                            <span className="text-mystic-green font-medium">Job Description:</span>
                            <p className="text-koala-grey mt-1">{chapter.villainDetails.jobDescription}</p>
                          </div>
                          <div>
                            <span className="text-mystic-green font-medium">Villainy Style:</span>
                            <p className="text-koala-grey mt-1">{chapter.villainDetails.villainryStyle}</p>
                          </div>
                          {chapter.villainDetails.codexTie && (
                            <div>
                              <span className="text-mystic-green font-medium">Codex Connection:</span>
                              <p className="text-koala-grey mt-1">{chapter.villainDetails.codexTie}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {chapter.narrative && (
                    <div>
                      <h4 className="font-display text-lg text-mystic-green mb-1">Narrative</h4>
                      <p className="text-koala-grey">{chapter.narrative}</p>
                    </div>
                  )}

                  {chapter.gameplay && (
                    <div>
                      <h4 className="font-display text-lg text-mystic-green mb-1">Gameplay</h4>
                      <p className="text-koala-grey">{chapter.gameplay}</p>
                    </div>
                  )}

                  {chapter.puzzles && (
                    <div>
                      <h4 className="font-display text-lg text-mystic-green mb-1">Environment Puzzles</h4>
                      <p className="text-koala-grey">{chapter.puzzles}</p>
                    </div>
                  )}

                  {chapter.koalaSlide && (
                    <div>
                      <h4 className="font-display text-lg text-mystic-green mb-1">Koala Slide Reuse</h4>
                      <p className="text-koala-grey">{chapter.koalaSlide}</p>
                    </div>
                  )}

                  {chapter.climax && (
                    <div>
                      <h4 className="font-display text-lg text-mystic-green mb-1">Climax</h4>
                      <p className="text-koala-grey">{chapter.climax}</p>
                    </div>
                  )}

                  {chapter.radioMystery && (
                    <div>
                      <h4 className="font-display text-lg text-mystic-green mb-1">📻 Radio Mystery</h4>
                      <p className="text-koala-grey">{chapter.radioMystery}</p>
                    </div>
                  )}

                  {chapter.skillUnlocked && (
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="font-display text-lg text-treasure-gold mb-1">Skill Unlocked</h4>
                      <p className="text-mystic-green font-medium">{chapter.skillUnlocked}</p>
                    </div>
                  )}

                  {chapter.setsUp && (
                    <div className="text-sm text-eucalyptus-mist italic">
                      <strong>Sets Up:</strong> {chapter.setsUp}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Play Flow */}
        <section>
          <Card className="glass-card hover-lift">
            <CardHeader>
              <h2 className="font-display text-3xl text-treasure-gold">🎭 Team Play Flow</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {teamFlow.map((phase, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-mystic-green mt-1">▸</span>
                    <p className="text-eucalyptus-mist">{phase}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Story;