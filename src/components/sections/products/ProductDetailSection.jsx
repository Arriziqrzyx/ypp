import { motion, AnimatePresence } from "framer-motion";
import { ProductVariantCard } from "./ProductVariantCard";

export function ProductDetailSection({ category, onVariantClick }) {
  if (!category) return null;

  return (
    <div className="bg-white border border-light-gray rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-10 lg:gap-16"
        >
          {/* Left Column: Specifications & Info */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-8">
            <div className="border-b border-light-gray pb-6">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-dark-bg uppercase tracking-tight mb-2">
                {category.title}
              </h2>
              <div className="w-12 h-1 bg-industrial-blue" />
            </div>

            <div className="space-y-6">
              {/* Mapping through possible specifications provided in data */}
              {category.materials && (
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-industrial-blue mb-2">
                    Materials
                  </h4>
                  <p className="font-body text-sm text-dark-bg/80 leading-relaxed">
                    {category.materials}
                  </p>
                </div>
              )}

              {category.specifications && (
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-industrial-blue mb-2">
                    Specifications
                  </h4>
                  <p className="font-body text-sm text-dark-bg/80 leading-relaxed">
                    {category.specifications}
                  </p>
                </div>
              )}

              {category.classRatings && (
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-industrial-blue mb-2">
                    Class Ratings
                  </h4>
                  <p className="font-body text-sm text-dark-bg/80 leading-relaxed">
                    {category.classRatings}
                  </p>
                </div>
              )}
              
              {category.brands && (
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-industrial-blue mb-2">
                    Brands
                  </h4>
                  <p className="font-body text-sm text-dark-bg/80 leading-relaxed">
                    {category.brands}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Variant Grid */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-dark-bg">
                Available Types
              </h3>
              <span className="font-body text-xs text-dark-bg/50">
                {category.types?.length || 0} items
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5">
              {category.types?.map((variant) => (
                <ProductVariantCard 
                  key={variant.id} 
                  variant={variant} 
                  onClick={onVariantClick} 
                />
              ))}
            </div>
            
            {/* Empty State Fallback */}
            {(!category.types || category.types.length === 0) && (
              <div className="w-full py-16 flex flex-col items-center justify-center border border-dashed border-light-gray rounded-xl bg-off-white/50">
                <p className="font-body text-dark-bg/50 text-sm">No specific variants listed for this category.</p>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
