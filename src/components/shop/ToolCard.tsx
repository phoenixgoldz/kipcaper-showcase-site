import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ImageOptimized } from "@/components/ImageOptimized";

interface ToolCardProps {
  name: string;
  description: string;
  logo: string;
  link: string;
  category: string;
}

export const ToolCard = ({ name, description, logo, link, category }: ToolCardProps) => {
  return (
    <Card className="group hover-lift transition-all duration-300 glass-card border-white/10 hover:border-primary/30">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-background/80 to-primary/5 p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <ImageOptimized
              src={logo}
              alt={`${name} logo`}
              aspectRatio="square"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
            {category}
          </span>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">{name}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          asChild 
          variant="outline" 
          size="sm" 
          className="w-full group-hover:bg-primary/10 group-hover:border-primary/30 transition-all"
        >
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            Learn More
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
