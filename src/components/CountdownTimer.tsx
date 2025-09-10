import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";

export const CountdownTimer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center"
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <Calendar className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold text-foreground">Coming Soon</h3>
      </div>
      
      <p className="text-muted-foreground mb-6">
        Release date to be announced
      </p>

      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
        <div className="text-lg font-medium text-foreground mb-2">
          In Development
        </div>
        <div className="text-sm text-muted-foreground">
          Follow for updates on the release timeline
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Clock className="w-4 h-4" />
        <span>Stay tuned for release updates</span>
      </div>
    </motion.div>
  );
};