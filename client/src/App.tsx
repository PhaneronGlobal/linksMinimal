import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";

function App() {
  const basePath = import.meta.env.BASE_URL || '/';
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <Home />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;