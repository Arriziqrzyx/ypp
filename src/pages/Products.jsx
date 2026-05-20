import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Container } from "../components/ui/Container";
import { ProductsHeroSection } from "../components/sections/products/ProductsHeroSection";
import { ProductCategoriesSection } from "../components/sections/products/ProductCategoriesSection";
import { ProductDetailSection } from "../components/sections/products/ProductDetailSection";
import { ProductModal } from "../components/ui/ProductModal";
import { productCategories } from "../data/productsData";

export function Products() {
  const { t } = useTranslation();
  const location = useLocation();
  const initialCategoryId = location.state?.activeCategoryId || productCategories[0]?.id;
  
  const [activeCategoryId, setActiveCategoryId] = useState(initialCategoryId);
  const [selectedVariant, setSelectedVariant] = useState(null);

  // If the user navigates here with a new category in state while already on the page, update it
  useEffect(() => {
    if (location.state?.activeCategoryId) {
      setActiveCategoryId(location.state.activeCategoryId);
      // Optional: scroll to the category section if needed
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }
  }, [location.state?.activeCategoryId]);

  // Derive the active category object
  const activeCategory = productCategories.find(c => c.id === activeCategoryId);

  // Handle body scroll locking when modal is open
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = selectedVariant ? "hidden" : "unset";
    }

    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, [selectedVariant]);

  return (
    <main className="min-h-screen bg-off-white">
      <Helmet>
        <title>{t('meta.products.title')}</title>
        <meta name="description" content={t('meta.products.description')} />
        <link rel="canonical" href="https://yuritechpp.co.id/products" />
      </Helmet>
      <ProductsHeroSection />

      <section className="py-24">
        <Container>
          <div className="max-w-7xl mx-auto">
            {/* Category Grid */}
            <ProductCategoriesSection
              categories={productCategories}
              activeCategoryId={activeCategoryId}
              onSelectCategory={setActiveCategoryId}
            />

            {/* Dynamic Detail Panel */}
            <ProductDetailSection
              category={activeCategory}
              onVariantClick={setSelectedVariant}
            />
          </div>
        </Container>
      </section>

      {/* Modal Overlay */}
      <ProductModal
        isOpen={!!selectedVariant}
        onClose={() => setSelectedVariant(null)}
        product={selectedVariant}
      />
    </main>
  );
}
