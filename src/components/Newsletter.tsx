import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Gift, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast({
        title: "Welcome to the crew!",
        description: "You'll receive exclusive updates and early access to game content.",
      });
    }
  };

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center"
      >
        <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Gift className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Welcome to the Crew!</h3>
        <p className="text-muted-foreground">
          You're now part of the inner circle. Expect exclusive content, early access, and insider updates.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-2xl p-8"
    >
      <div className="text-center mb-6">
        <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Join the Inner Circle</h3>
        <p className="text-muted-foreground">
          Get exclusive updates, early access to content, and insider information about the heist.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" className="px-6">
            <Bell className="w-4 h-4 mr-2" />
            Subscribe
          </Button>
        </div>
      </form>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>Exclusive gameplay reveals</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="w-2 h-2 bg-secondary rounded-full"></div>
          <span>Early access opportunities</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span>Developer insights</span>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        No spam, just the good stuff. Unsubscribe anytime.
      </p>
    </motion.div>
  );
};