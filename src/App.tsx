
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OurExpertise from "./pages/OurExpertise";
import Quality from "./pages/Quality";
import Innovation from "./pages/Innovation";
import Knowledge from "./pages/Knowledge";
import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";

// Solution pages
import MicronutrientPremix from "./pages/solutions/MicronutrientPremix";
import TherapeuticNutrition from "./pages/solutions/TherapeuticNutrition";
import CustomFormulations from "./pages/solutions/CustomFormulations";
import GovernmentPrograms from "./pages/solutions/GovernmentPrograms";

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
          
          {/* Redirect from old solutions page to the first solution page */}
          <Route path="/solutions" element={<Navigate to="/solutions/micronutrient-premix" replace />} />
          
          {/* Solutions & Products subpages */}
          <Route path="/solutions/micronutrient-premix" element={<Layout><MicronutrientPremix /></Layout>} />
          <Route path="/solutions/therapeutic-nutrition" element={<Layout><TherapeuticNutrition /></Layout>} />
          <Route path="/solutions/custom" element={<Layout><CustomFormulations /></Layout>} />
          <Route path="/solutions/government-programs" element={<Layout><GovernmentPrograms /></Layout>} />
          
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
