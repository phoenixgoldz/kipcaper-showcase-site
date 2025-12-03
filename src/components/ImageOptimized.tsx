import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageOptimizedProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  aspectRatio?: "square" | "portrait" | "landscape" | "video" | "product" | "auto";
  objectFit?: "cover" | "contain" | "fill";
}

export const ImageOptimized = ({ 
  src, 
  alt, 
  className, 
  loading = "lazy", 
  aspectRatio = "landscape",
  objectFit = "cover"
}: ImageOptimizedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

const aspectRatioClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    video: "aspect-video",
    product: "aspect-[4/3]",
    auto: ""
  };

  const objectFitClasses = {
    cover: "object-cover",
    contain: "object-contain", 
    fill: "object-fill"
  };

  if (hasError) {
    return (
      <div className={cn(
        "flex items-center justify-center bg-muted text-muted-foreground text-sm",
        aspectRatioClasses[aspectRatio],
        className
      )}>
        Image failed to load
      </div>
    );
  }

  return (
    <div className={cn("overflow-hidden", aspectRatioClasses[aspectRatio], className)}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        referrerPolicy="no-referrer"
        className={cn(
          "w-full h-full transition-all duration-300",
          objectFitClasses[objectFit],
          !isLoaded && "opacity-0"
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
};