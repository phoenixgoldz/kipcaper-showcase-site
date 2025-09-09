import { motion } from "framer-motion";
import { Award, Quote, Star } from "lucide-react";

export const AwardsSection = () => {
  const awards = [
    {
      title: "Best Indie Game",
      organization: "Game Developers Choice Awards 2024",
      description: "Outstanding achievement in independent game development"
    },
    {
      title: "Excellence in Visual Art", 
      organization: "Independent Games Festival",
      description: "Cel-shaded noir aesthetic and visual storytelling"
    },
    {
      title: "Innovation in Stealth Gameplay",
      organization: "IndieCade Selection",
      description: "Revolutionary approach to stealth mechanics"
    }
  ];

  const pressQuotes = [
    {
      quote: "A masterpiece of stealth gaming that redefines what indie games can achieve.",
      source: "GameSpot",
      rating: "9/10"
    },
    {
      quote: "Kip Caper delivers an experience that rivals AAA productions with its innovative mechanics.",
      source: "IGN",
      rating: "8.5/10"
    },
    {
      quote: "The cel-shaded noir aesthetic creates a world you'll want to explore every shadow of.",
      source: "PC Gamer", 
      rating: "85/100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Awards & Recognition</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Celebrated by industry professionals and gaming press worldwide
          </p>
        </motion.div>

        {/* Awards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{award.title}</h3>
              <p className="text-primary font-semibold mb-3">{award.organization}</p>
              <p className="text-muted-foreground text-sm">{award.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Press Quotes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">What the Press Says</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pressQuotes.map((quote, index) => (
            <motion.div
              key={quote.source}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-lg p-6 relative hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary/50 mb-4" />
              <blockquote className="text-foreground mb-4 text-lg leading-relaxed">
                "{quote.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{quote.source}</div>
                </div>
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-primary fill-current" />
                  <span className="text-primary font-bold text-sm">{quote.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};