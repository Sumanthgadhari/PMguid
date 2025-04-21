
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/ui/layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-xl">
          <h1 className="text-6xl font-bold mb-4 text-pmblue">404</h1>
          <p className="text-2xl text-gray-600 mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <p className="text-gray-500 mb-8">
            The page might have been moved, deleted, or never existed in the first place.
          </p>
          <Button asChild size="lg">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
