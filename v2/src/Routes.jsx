import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import TemplateDetailPages from './pages/template-detail-pages';
import PricingUpgrade from './pages/pricing-upgrade';
import TemplateGallery from './pages/template-gallery';
import UserDashboard from './pages/user-dashboard';
import DocumentCreatorStudio from './pages/document-creator-studio';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Landing page route */}
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/template-detail-pages" element={<TemplateDetailPages />} />
          <Route path="/pricing-upgrade" element={<PricingUpgrade />} />
          <Route path="/template-gallery" element={<TemplateGallery />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/document-creator-studio" element={<DocumentCreatorStudio />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;