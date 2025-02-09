
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container" style={{ minHeight: '100vh' }}>
        <Home />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
