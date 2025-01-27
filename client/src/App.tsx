import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CV from "@/pages/CV";
import Publications from "@/pages/Publications";
import Blog from "@/pages/Blog";
import Navbar from "@/components/Navbar";

function getBasePath() {
  if (window.location.hostname === 'localhost' || window.location.hostname === '0.0.0.0') {
    return "";
  }
  return "/XingchenYu.github.io";
}

function Router() {
  const [location] = useLocation();
  const base = getBasePath();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Switch base={base}>
          <Route path="/" component={Home} />
          <Route path="/cv" component={CV} />
          <Route path="/publications" component={Publications} />
          <Route path="/blog" component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;