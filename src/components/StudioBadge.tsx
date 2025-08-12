import React, { useState } from "react";
import { cn } from "@/lib/utils";

const STUDIO_LOGO = "/lovable-uploads/phoenixgold-logo.png"; // Replace with actual uploaded path if different

export const StudioBadge = ({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) => {
  const [showFallback, setShowFallback] = useState(false);
  const sizes: Record<string, string> = { sm: "h-6", md: "h-8", lg: "h-10" };

  return (
    <span className={cn("inline-flex items-center gap-2", className)} aria-label="PhoenixGold Game Studios">
      {!showFallback && (
        <img
          src={STUDIO_LOGO}
          alt="PhoenixGold Game Studios logo"
          loading="lazy"
          className={cn("w-auto", sizes[size])}
          onError={() => setShowFallback(true)}
        />
      )}
      {showFallback && (
        <span className="px-2 py-1 rounded-md border border-border bg-background/40 text-foreground/80 text-xs tracking-wide">
          PhoenixGold Game Studios
        </span>
      )}
    </span>
  );
};
