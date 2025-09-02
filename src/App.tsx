import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Codex from "./pages/Codex";
import Updates from "./pages/Updates";
import Media from "./pages/Media";
import Join from "./pages/Join";
import Capers from "./pages/Capers";
import Characters from "./pages/Characters";
import Story from "./pages/Story";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/codex" element={<Codex />} />
          <Route path="/story" element={<Story />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/media" element={<Media />} />
          <Route path="/join" element={<Join />} />
          <Route path="/capers" element={<Capers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
