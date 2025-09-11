import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const CharacterSelector = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  const characters = [
    {
      name: "Kip Caper",
      role: "Master Thief",
      image: "/lovable-uploads/ce5bac29-1805-4689-a67b-2ecb9c945c22.png",
      description: "A nimble and resourceful thief with unmatched stealth capabilities and bo-staff mastery.",
      stats: {
        stealth: 95,
        agility: 90,
        combat: 85,
        leadership: 80
      },
      abilities: ["Shadow Walk", "Bo-Staff Mastery", "Canopy Traversal", "Lock Picking"],
      background: "Raised in the shadows of the urban jungle, Kip learned to navigate both the concrete towers and forest canopies with equal skill."
    },
    {
      name: "Peeka",
      role: "Scout & Reconnaissance", 
      image: "/lovable-uploads/ec8785c5-ccf0-4507-ac99-31d9f48dfe19.png",
      description: "Expert tracker and scout who provides intelligence and support from the shadows.",
      stats: {
        stealth: 92,
        agility: 88,
        combat: 70,
        leadership: 75
      },
      abilities: ["Advanced Tracking", "Silent Communication", "Environmental Navigation", "Trap Detection"],
      background: "A mysterious voice on the radio who becomes Kip's invaluable partner, guiding him through dangerous territories with unmatched field intelligence."
    },
    {
      name: "Tikka",
      role: "Technical Specialist",
      image: "/lovable-uploads/efb16d1f-b1a2-4b9b-be8a-9d7e8d3981ac.png",
      description: "The crew's technical expert, specializing in security systems and mechanical puzzles.",
      stats: {
        stealth: 78,
        agility: 80,
        combat: 75,
        leadership: 85
      },
      abilities: ["Security Bypass", "Mechanical Engineering", "Electronic Warfare", "System Analysis"],
      background: "Joins the crew in Turkey as their technical specialist, bringing crucial expertise in dismantling complex security systems and solving mechanical challenges."
    }
  ];

  const nextCharacter = () => {
    setSelectedCharacter((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setSelectedCharacter((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const character = characters[selectedCharacter];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Meet Your Crew</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each crew member brings unique skills and abilities to master the perfect heist
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Character Image */}
            <motion.div 
              key={selectedCharacter}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50 p-8">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{character.name}</h3>
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      {character.role}
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Character Details */}
            <motion.div
              key={`details-${selectedCharacter}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{character.name}</h3>
                <p className="text-lg text-muted-foreground mb-4">{character.description}</p>
                <p className="text-foreground leading-relaxed">{character.background}</p>
              </div>

              {/* Stats */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Combat Stats</h4>
                {Object.entries(character.stats).map(([stat, value]) => (
                  <div key={stat} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground capitalize font-medium">{stat}</span>
                      <span className="text-primary font-bold">{value}/100</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Abilities */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Special Abilities</h4>
                <div className="flex flex-wrap gap-2">
                  {character.abilities.map((ability, index) => (
                    <motion.div
                      key={ability}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <Badge variant="outline" className="bg-primary/5 border-primary/30 text-foreground">
                        {ability}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button variant="outline" size="icon" onClick={prevCharacter}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {characters.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedCharacter ? 'bg-primary' : 'bg-muted'
                  }`}
                  onClick={() => setSelectedCharacter(index)}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextCharacter}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};