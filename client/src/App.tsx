import { Router, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Static base configuration
const base = "/linksMinimal";

// Create a makePublicUrl helper to handle path prefixing
function makePublicUrl(path: string) {
  return `${base}${path}`;
}

// Create a custom hook for prefixed routing
function useLocation() {
  // Get the current location
  const location = window.location.pathname;

  // Remove the base prefix for internal routing
  const path = location.startsWith(base) ? location.slice(base.length) : location;

  return [path];
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