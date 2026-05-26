import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Projects } from './pages/Projects';
import { NotFound } from './pages/NotFound';
import { Preloader } from './components/ui/Preloader';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            {/* Wildcard Fallback Route for 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Analytics />
      </Router>
    </>
  );
}

export default App;
