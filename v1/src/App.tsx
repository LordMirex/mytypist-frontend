import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";

// Import critical pages directly (no lazy loading)
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Lazy load dashboard and other pages for better initial load
const Dashboard = lazy(() => import("./pages/Dashboard"));

// Keep lazy loading for less critical pages
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const HowToUse = lazy(() => import("./pages/HowToUse"));
const Blog = lazy(() => import("./pages/Blog"));
const FAQ = lazy(() => import("./pages/FAQ"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Templates = lazy(() => import("./pages/Templates"));
const CreateDocument = lazy(() => import("./pages/CreateDocument"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminUsers = lazy(() => import("./pages/AdminUsers"));
const AdminHealth = lazy(() => import("./pages/AdminHealth"));
const AdminBonuses = lazy(() => import("./pages/AdminBonuses"));
const AdminPreview = lazy(() => import("./pages/AdminPreview"));
const AdminUploadTemplate = lazy(() => import("./pages/AdminUploadTemplate"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BecomePartner = lazy(() => import("./pages/BecomePartner"));
const Legals = lazy(() => import("./pages/Legals"));
const Support = lazy(() => import("./pages/Support"));
const Settings = lazy(() => import("./pages/Settings"));
const Bonuses = lazy(() => import("./pages/Bonuses"));
const Analytics = lazy(() => import("./pages/Analytics"));

// Optimized loading component with semantic tokens and preload hint
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary border-t-transparent"></div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Lazy load new product pages
const AutoSign = lazy(() => import("./pages/AutoSign"));
const AutoType = lazy(() => import("./pages/AutoType"));

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/how-to-use" element={<HowToUse />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/create-document" element={<CreateDocument />} />
              <Route path="/autosign" element={<AutoSign />} />
              <Route path="/autotype" element={<AutoType />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/health" element={<AdminHealth />} />
              <Route path="/admin/bonuses" element={<AdminBonuses />} />
              <Route path="/admin/preview" element={<AdminPreview />} />
              <Route path="/admin/upload-template" element={<AdminUploadTemplate />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/become-partner" element={<BecomePartner />} />
              <Route path="/legals" element={<Legals />} />
              <Route path="/support" element={<Support />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/bonuses" element={<Bonuses />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
