import { Router, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Static base configuration
const base = "/linksMinimal";

// Create a custom hook for prefixed routing
function useLocation() {
  // Get the current location
  const location = window.location.pathname;

  // Remove the base prefix for internal routing
  const path = location.startsWith(base) ? location.slice(base.length) : location;

  // Navigation function that adds the base prefix
  const navigate = (to: string) => {
    window.history.pushState(null, "", base + to);
    return true;
  };

  return [path, navigate];
}

function AppRouter() {
  return (
    <Router hook={useLocation}>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;