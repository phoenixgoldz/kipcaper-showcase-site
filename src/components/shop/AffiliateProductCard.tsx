import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Tag } from "lucide-react";

interface AffiliateProductCardProps {
  name: string;
  description: string;
  link: string;
  price: string;
  image: string;
  category: string;
}

export const AffiliateProductCard = ({ name, description, link, price, image, category }: AffiliateProductCardProps) => {
  return (
    <Card className="group hover-lift transition-all duration-500 glass-card border-thief-gold/20 bg-gradient-to-br from-background via-background to-thief-gold/5 overflow-hidden hover:border-thief-gold/40 hover:shadow-xl hover:shadow-thief-gold/10">
      <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-background/50 to-white/5">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='16' fill='%23666'%3ENo Image%3C/text%3E%3C/svg%3E";
          }}
        />
        <div className="absolute top-3 right-3 flex items-center gap-2 bg-thief-gold text-shadow-black px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
          <Tag className="h-3 w-3" />
          {price}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
      </div>
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs px-3 py-1 rounded-full bg-thief-gold/10 text-thief-gold border border-thief-gold/30 font-medium">
            {category}
          </span>
        </div>
        <CardTitle className="text-lg leading-tight group-hover:text-thief-gold transition-colors">{name}</CardTitle>
        <CardDescription className="text-sm leading-relaxed line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button 
          asChild 
          variant="default"
          size="sm" 
          className="w-full bg-gradient-to-r from-thief-gold to-emerald-glow hover:opacity-90 transition-all shadow-lg hover:shadow-thief-gold/20"
        >
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            View on Amazon
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
