import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-xl text-foreground/70 mb-6">Oops! We couldn't find that page.</p>
        <Link to="/" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium">Return to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
