
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OurExpertise from "./pages/OurExpertise";
import Solutions from "./pages/Solutions";
import Quality from "./pages/Quality";
import Innovation from "./pages/Innovation";
import Knowledge from "./pages/Knowledge";
import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/expertise" element={<Layout><OurExpertise /></Layout>} />
          <Route path="/solutions" element={<Layout><Solutions /></Layout>} />
          <Route path="/quality" element={<Layout><Quality /></Layout>} />
          <Route path="/innovation" element={<Layout><Innovation /></Layout>} />
          <Route path="/knowledge" element={<Layout><Knowledge /></Layout>} />
          <Route path="/success-stories" element={<Layout><SuccessStories /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/get-quote" element={<Layout><GetQuote /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
