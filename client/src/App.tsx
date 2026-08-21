import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import PrivacyBanner from "./components/PrivacyBanner";
import { ScrollToTop } from "./components/ScrollToTop";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Careers from "@/pages/Careers";
import Talio from "@/pages/Talio";
import TalioV2 from "@/pages/TalioV2";
import Majlis from "@/pages/Majlis";
import SmartBoots from "@/pages/SmartBoots";
import Contact from "@/pages/Contact";
import PrivacyCookies from "@/pages/PrivacyCookies";
import Terms from "@/pages/Terms";

/** Midnight Signal Matrix: dark-by-default routing shell for maybei. */
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/careers" component={Careers} />
      <Route path="/talio" component={Talio} />
      <Route path="/talio-v2" component={TalioV2} />
      <Route path="/majlis" component={Majlis} />
      <Route path="/smart-boots" component={SmartBoots} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-cookies" component={PrivacyCookies} />
      <Route path="/terms" component={Terms} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <ScrollToTop />
            <Router />
            <PrivacyBanner />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
