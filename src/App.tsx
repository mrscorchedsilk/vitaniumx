
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

// Solution pages
import StapleFood from "./pages/solutions/StapleFood";
import ProcessedFoods from "./pages/solutions/ProcessedFoods";
import TherapeuticFoods from "./pages/solutions/TherapeuticFoods";
import AnimalNutrition from "./pages/solutions/AnimalNutrition";
import CustomFormulations from "./pages/solutions/CustomFormulations";
import FmcgFortification from "./pages/solutions/FmcgFortification";

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
          
          {/* Solutions & Products subpages */}
          <Route path="/solutions/staple-food" element={<Layout><StapleFood /></Layout>} />
          <Route path="/solutions/processed-foods" element={<Layout><ProcessedFoods /></Layout>} />
          <Route path="/solutions/therapeutic" element={<Layout><TherapeuticFoods /></Layout>} />
          <Route path="/solutions/animal-nutrition" element={<Layout><AnimalNutrition /></Layout>} />
          <Route path="/solutions/custom" element={<Layout><CustomFormulations /></Layout>} />
          <Route path="/solutions/fmcg" element={<Layout><FmcgFortification /></Layout>} />
          
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
