import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function ProductModal({ isOpen, onClose, product }) {
  // Prevent scrolling when modal is open
  // Handled at a higher level or in useEffect here
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Dark Overlay (No Blur) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-5xl bg-white rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.4)] border border-white/20 flex flex-col md:flex-row overflow-hidden max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Floating */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-off-white hover:bg-primary-red hover:text-white transition-colors rounded-full border border-light-gray text-dark-bg/70 shadow-sm"
              aria-label="Close modal"
            >
              <X size={20} strokeWidth={2} />
            </button>

            {/* Left: Image Area */}
            <div className="w-full md:w-1/2 bg-[#f8fafc] flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-light-gray relative min-h-[300px] md:min-h-[500px]">
              {/* Subtle grid pattern background for industrial feel */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-[80%] h-auto object-contain drop-shadow-md relative z-10 mix-blend-multiply"
              />
            </div>

            {/* Right: Content Area */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
              <div className="mb-8">
                <span className="inline-block text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-industrial-blue mb-2">
                  Product Details
                </span>
                <h3 className="font-heading font-black text-2xl md:text-3xl text-dark-bg uppercase tracking-tight leading-tight">
                  {product.title}
                </h3>
              </div>

              <div className="space-y-6">
                {product.description && (
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-dark-bg mb-2">
                      Description
                    </h4>
                    <p className="font-body text-sm text-dark-bg/70 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                )}

                {product.applications && (
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-dark-bg mb-2">
                      Applications
                    </h4>
                    <p className="font-body text-sm text-dark-bg/70 leading-relaxed">
                      {product.applications}
                    </p>
                  </div>
                )}

                {product.materials && (
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-dark-bg mb-2">
                      Materials
                    </h4>
                    <div className="inline-block px-3 py-1.5 bg-off-white border border-light-gray rounded-md">
                      <p className="font-body text-xs text-dark-bg/80 leading-relaxed">
                        {product.materials}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
