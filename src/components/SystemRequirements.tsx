import { motion } from "framer-motion";
import { Monitor, HardDrive, Cpu, Zap, GamepadIcon } from "lucide-react";

export const SystemRequirements = () => {
  const requirements = {
    minimum: {
      os: "TBD",
      processor: "TBD",
      memory: "TBD",
      graphics: "TBD",
      directx: "TBD",
      storage: "TBD",
      network: "TBD"
    },
    recommended: {
      os: "TBD",
      processor: "TBD",
      memory: "TBD", 
      graphics: "TBD",
      directx: "TBD",
      storage: "TBD",
      network: "TBD"
    }
  };

  const requirementIcons = {
    os: Monitor,
    processor: Cpu,
    memory: Zap,
    graphics: GamepadIcon,
    storage: HardDrive
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">System Requirements</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            System requirements will be finalized as development progresses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Minimum Requirements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-secondary/20 p-2 rounded-lg">
                <Monitor className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Minimum</h3>
            </div>
            
            <div className="space-y-4">
              {Object.entries(requirements.minimum).map(([key, value]) => {
                const Icon = requirementIcons[key as keyof typeof requirementIcons] || Monitor;
                return (
                  <div key={key} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground uppercase tracking-wide">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </div>
                      <div className="text-foreground font-medium">{value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Recommended Requirements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-bl-lg">
              Recommended
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Recommended</h3>
            </div>
            
            <div className="space-y-4">
              {Object.entries(requirements.recommended).map(([key, value]) => {
                const Icon = requirementIcons[key as keyof typeof requirementIcons] || Monitor;
                return (
                  <div key={key} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground uppercase tracking-wide">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </div>
                      <div className="text-foreground font-medium">{value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6"
        >
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground">Note:</strong> System requirements are currently being determined based on development progress. 
            Final specifications will be announced closer to release.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">In Development</span>
            <span className="bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full">Solo Project</span>
            <span className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full">Early Stage</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};