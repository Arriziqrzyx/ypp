import { motion } from "framer-motion";

export function ProductVariantCard({ variant, onClick }) {
  return (
    <motion.button
      onClick={() => onClick(variant)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col w-full bg-white border border-light-gray rounded-lg overflow-hidden transition-shadow hover:shadow-[0_10px_30px_rgba(30,147,171,0.1)] text-left"
    >
      {/* Image Area - Clean */}
      <div className="relative w-full aspect-square bg-[#f8fafc] flex items-center justify-center p-6 overflow-hidden">
        {/* Subtle grid pattern for premium tech feel */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
        
        <img
          src={variant.image}
          alt={variant.title}
          className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 mix-blend-multiply"
        />
        
        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-dark-bg/0 group-hover:bg-dark-bg/5 transition-colors duration-300 z-20 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-heading font-bold uppercase tracking-widest text-dark-bg shadow-sm">
            View Details
          </span>
        </div>
      </div>

      {/* Label Area - Industrial Blue Bottom */}
      <div className="w-full bg-industrial-blue py-3 px-4 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary-red">
        <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs md:text-sm text-center line-clamp-1">
          {variant.title}
        </h4>
      </div>
    </motion.button>
  );
}
