import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import Profiles from "./pages/Profiles";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <PageTransition>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/profiles" element={<Profiles />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
