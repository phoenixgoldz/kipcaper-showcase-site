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
      image: `${import.meta.env.BASE_URL}lovable-uploads/ce5bac29-1805-4689-a67b-2ecb9c945c22.png`,
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
      image: `${import.meta.env.BASE_URL}lovable-uploads/9a788c70-05af-45f4-b381-730104aca0a8.png`,
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
      image: `${import.meta.env.BASE_URL}lovable-uploads/129d0e68-6925-4c82-bde5-0f3dd556e9e6.png`,
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-midnight-shadow via-jungle-green/10 to-mystic-green/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-treasure-gold/5 to-mystic-green/5"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-treasure-gold neon-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Meet Your Crew
          </motion.h2>
          <motion.p 
            className="text-eucalyptus-mist text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Each crew member brings unique skills and abilities to master the perfect heist. 
            Choose your approach and leverage their specialized talents.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Character Image */}
            <motion.div 
              key={selectedCharacter}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl glass-card tech-border p-4 sm:p-6 lg:p-8 hover-lift transition-all duration-500 group-hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-treasure-gold/5 to-mystic-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-80 sm:h-96 object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.div 
                    className="bg-midnight-shadow/90 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-treasure-gold/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-treasure-gold mb-2 font-display">{character.name}</h3>
                    <Badge variant="outline" className="bg-treasure-gold/10 text-treasure-gold border-treasure-gold/30 hover:bg-treasure-gold/20 text-xs sm:text-sm">
                      {character.role}
                    </Badge>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Character Details */}
            <motion.div
              key={`details-${selectedCharacter}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{character.name}</h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">{character.description}</p>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">{character.background}</p>
              </div>

              {/* Abilities */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Special Abilities</h4>
                <div className="flex flex-wrap gap-2">
                  {character.abilities.map((ability, index) => (
                    <motion.div
                      key={ability}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <Badge variant="outline" className="bg-primary/5 border-primary/30 text-foreground text-xs sm:text-sm">
                        {ability}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div 
            className="flex justify-center items-center gap-4 sm:gap-6 mt-12 sm:mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button variant="gaming" size="icon" onClick={prevCharacter} className="hover-scale kip-heist-glow">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2 sm:gap-3">
              {characters.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-500 hover:scale-125 ${
                    index === selectedCharacter 
                      ? 'bg-treasure-gold shadow-lg shadow-treasure-gold/50' 
                      : 'bg-eucalyptus-mist/30 hover:bg-treasure-gold/50'
                  }`}
                  onClick={() => setSelectedCharacter(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <Button variant="gaming" size="icon" onClick={nextCharacter} className="hover-scale kip-heist-glow">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
