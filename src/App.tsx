
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import TopicTemplate from "./pages/TopicTemplate";

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Add console log to help debug
console.log('App component rendering');

// Add error boundary component to catch rendering errors
const ErrorFallback = () => {
  useEffect(() => {
    console.error("An error occurred in the application rendering");
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong
        </h1>
        <p className="mb-4">
          Please try refreshing the page or clearing your browser cache.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    // Log important information for debugging
    console.log('Current path:', window.location.pathname);
    console.log('Base URL:', import.meta.env.BASE_URL);
    console.log('Public URL:', import.meta.env.PUBLIC_URL || 'Not defined');
    console.log('Environment:', import.meta.env.MODE);
    console.log('Hash:', window.location.hash);
    console.log('Search:', window.location.search);
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/topic/:topicId" element={<TopicTemplate />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
