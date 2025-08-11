import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="font-display text-5xl mb-4">Wrong branch.</h1>
        <p className="text-lg text-muted-foreground mb-6">Head back to the canopy.</p>
        <Link to="/" className="story-link">Return Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
