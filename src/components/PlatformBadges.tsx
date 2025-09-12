import { Badge } from "@/components/ui/badge";
import steamLogo from "@/assets/steam-logo.png";
import epicGamesLogo from "@/assets/epic-games-logo.png";

export const PlatformBadges = () => {
  const platforms = [
    {
      name: "Steam",
      logo: steamLogo,
      available: false,
      link: "#"
    },
    {
      name: "Epic Games",
      logo: epicGamesLogo,
      available: false,
      link: "#"
    }
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {platforms.map((platform) => (
        <div key={platform.name} className="flex items-center gap-3 glass-card p-4 rounded-xl hover-lift">
          <img 
            src={platform.logo} 
            alt={`${platform.name} logo`}
            className="w-8 h-8 object-contain"
          />
          <div className="flex items-center gap-2">
            <span className="text-foreground font-medium">{platform.name}</span>
            <Badge variant={platform.available ? "default" : "secondary"}>
              {platform.available ? "Available" : "Coming Soon"}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
};