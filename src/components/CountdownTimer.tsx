import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";

export const CountdownTimer = () => {
  // Set release date to 6 months from now for demo purposes
  const releaseDate = new Date();
  releaseDate.setMonth(releaseDate.getMonth() + 6);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = releaseDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

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
        The heist begins in {releaseDate.toLocaleDateString('en-US', { 
          month: 'long', 
          year: 'numeric' 
        })}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4"
          >
            <div className="text-3xl font-bold text-primary mb-1">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">
              {unit.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Clock className="w-4 h-4" />
        <span>Updates every second until release</span>
      </div>
    </motion.div>
  );
};