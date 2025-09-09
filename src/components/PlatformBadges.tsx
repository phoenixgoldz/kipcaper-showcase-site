import { motion } from "framer-motion";

export const PlatformBadges = () => {
  const platforms = [
    {
      name: "Steam",
      logo: "🎮",
      available: true,
      link: "#"
    },
    {
      name: "PlayStation 5", 
      logo: "🎯",
      available: true,
      link: "#"
    },
    {
      name: "Xbox Series X|S",
      logo: "🎲",
      available: true, 
      link: "#"
    },
    {
      name: "Nintendo Switch",
      logo: "🕹️",
      available: false,
      link: "#"
    },
    {
      name: "Epic Games",
      logo: "⚡",
      available: true,
      link: "#"
    },
    {
      name: "GOG",
      logo: "🌟",
      available: true,
      link: "#"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {platforms.map((platform, index) => (
        <motion.a
          key={platform.name}
          href={platform.available ? platform.link : undefined}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`
            flex items-center gap-3 px-6 py-3 rounded-lg border transition-all duration-300
            ${platform.available 
              ? 'bg-card border-border/50 hover:border-primary/50 hover:bg-card/80 cursor-pointer' 
              : 'bg-muted/20 border-muted/30 cursor-not-allowed opacity-60'
            }
          `}
        >
          <span className="text-2xl">{platform.logo}</span>
          <div className="text-left">
            <div className="font-semibold text-foreground">{platform.name}</div>
            <div className={`text-xs ${platform.available ? 'text-primary' : 'text-muted-foreground'}`}>
              {platform.available ? 'Available' : 'Coming Soon'}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};