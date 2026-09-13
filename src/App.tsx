import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/footer/Footer';
import { ScrollToTop } from './components/navigation/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

// Pages
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { ServicesPage } from './pages/ServicesPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#04060d] dark:text-slate-100 relative selection:bg-cyan-500/20 selection:text-cyan-800 dark:selection:text-cyan-200 transition-colors duration-500">
          {/* Scroll To Top on Route Change */}
          <ScrollToTop />

          {/* Desktop Custom Cursor with Multi-State Feedback */}
          <CustomCursor />

          {/* Snappy Initial Entrance Screen */}
          {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

          {/* Application Layout */}
          <div className={`transition-opacity duration-500 flex flex-col min-h-screen ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            {/* Global Multi-Page Navigation with Light/Dark Theme Switcher */}
            <Navbar />

            {/* Main Smoothly Transitioning Outlet */}
            <main className="flex-1 w-full flex flex-col">
              <AnimatedRoutes />
            </main>

            {/* Global Engineered Footer */}
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
