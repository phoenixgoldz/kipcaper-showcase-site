import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Globe, Zap } from "lucide-react";

export const FeatureGrid = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "Unreal Engine 5.6",
      description: "Cutting-edge graphics with cel-shaded anime aesthetics and stunning Codex glow effects.",
      badge: "Engine"
    },
    {
      icon: Globe,
      title: "Global Heists",
      description: "From Sydney's rooftops to Amazon swamps, infiltrate exotic locations across six thrilling chapters.",
      badge: "World"
    },
    {
      icon: Zap,
      title: "Progressive Skills",
      description: "Master new thief abilities each chapter—from Night-Eye Lenses to Shadow Decoys.",
      badge: "Skills"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Built for Adventure</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A cutting-edge stealth platformer powered by Unreal Engine 5.6, featuring global heists and progressive skill mastery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-card to-card/80 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {feature.badge}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};