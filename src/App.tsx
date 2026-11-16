import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import { BrandPreloader } from "@/components/common/BrandPreloader";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SonanceAIAssistant = lazy(() => import("@/components/common/SonanceAIAssistant").then(m => ({ default: m.SonanceAIAssistant })));

gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

// Scroll manager to handle hash links and routing page changes smoothly
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          ScrollTrigger.refresh();
        }, 200);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <BrandPreloader />
          <ScrollToHash />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/" element={<AboutPage />} />
              <Route path="/About" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/privacy-policy" element={<PrivacyPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <SonanceAIAssistant />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
