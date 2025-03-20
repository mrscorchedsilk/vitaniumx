
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white pt-16">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-bold text-vitanium-600 mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4 text-navy-900">Page Not Found</h1>
        <p className="text-lg text-neutral-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="btn-primary inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
