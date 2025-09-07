import { cn } from "@/lib/utils";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const Feature = ({ icon, title, description, gradient }: FeatureProps) => (
  <div className="group text-center p-6 rounded-xl glass-card hover-lift">
    <div className={cn("w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center", gradient)}>
      <span className="text-2xl">{icon}</span>
    </div>
    <h3 className="font-display text-xl mb-2 text-treasure-gold">{title}</h3>
    <p className="text-eucalyptus-mist text-sm">{description}</p>
  </div>
);

export const FeatureGrid = () => {
  const features: FeatureProps[] = [
    {
      icon: "🎮",
      title: "Unreal Engine 5.6",
      description: "Cutting-edge graphics with cel-shaded anime aesthetics and stunning Codex glow effects.",
      gradient: "bg-gradient-to-br from-treasure-gold to-mystic-green"
    },
    {
      icon: "🌍",
      title: "Global Heists",
      description: "From Sydney's rooftops to Amazon swamps, infiltrate exotic locations across six thrilling chapters.",
      gradient: "bg-gradient-to-br from-mystic-green to-jungle-green"
    },
    {
      icon: "⚡",
      title: "Progressive Skills",
      description: "Master new thief abilities each chapter—from Night-Eye Lenses to Shadow Decoys.",
      gradient: "bg-gradient-to-br from-jungle-green to-bark-brown"
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl sm:text-4xl mb-4 text-treasure-gold">Built for Adventure</h2>
        <p className="text-eucalyptus-mist text-lg max-w-2xl mx-auto">
          A cutting-edge stealth platformer powered by Unreal Engine 5.6, featuring global heists and progressive skill mastery.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={feature.title} className={index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}>
            <Feature {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
};