
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="text-center max-w-md px-4">
        <div className="bg-brand-orange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Package className="h-10 w-10 text-brand-orange" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! It looks like this package got lost in transit.
        </p>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-brand-orange hover:bg-brand-dark-orange text-white">
              Return Home
            </Button>
          </Link>
          <Link to="/track">
            <Button variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
              Track a Package
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
