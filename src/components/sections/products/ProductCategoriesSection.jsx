import { AnimatedReveal } from "../../animations/AnimatedReveal";
import { cn } from "../../../utils/cn"; // Assuming you have a cn utility, if not I'll just use template literals

export function ProductCategoriesSection({ categories, activeCategoryId, onSelectCategory }) {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center">
            <div className="w-8 h-[2px] bg-industrial-blue" />
            <div className="w-2 h-[2px] bg-primary-red ml-1" />
          </div>
          <h2 className="font-heading font-bold text-industrial-blue text-3xl md:text-4xl uppercase tracking-tight">
            Product Categories
          </h2>
          <div className="flex items-center">
            <div className="w-2 h-[2px] bg-primary-red mr-1" />
            <div className="w-8 h-[2px] bg-industrial-blue" />
          </div>
        </div>
        <p className="font-body text-dark-bg/60 max-w-2xl mx-auto">
          Select a category below to explore our comprehensive range of high-performance industrial materials and specifications.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-16">
        {categories.map((category, index) => {
          const isActive = activeCategoryId === category.id;

          return (
            <AnimatedReveal key={category.id} delay={index * 0.05}>
              <button
                onClick={() => onSelectCategory(category.id)}
                className={`
                  group relative w-full flex items-center justify-between p-3 sm:p-4 md:p-6 
                  bg-white border rounded-xl transition-all duration-300 text-left
                  hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(30,147,171,0.08)]
                  ${isActive ? 'border-industrial-blue shadow-[0_8px_30px_rgba(30,147,171,0.08)]' : 'border-light-gray hover:border-industrial-blue/50'}
                `}
              >
                {/* Top Accent Line on Active/Hover */}
                <div
                  className={`
                    absolute top-0 left-1/2 -translate-x-1/2 h-1 bg-industrial-blue rounded-t-xl transition-all duration-300
                    ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100'}
                  `}
                />

                {/* Subtle Glow on Active */}
                {isActive && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-industrial-blue/20 blur-xl rounded-full" />
                )}

                {/* Title Left */}
                <div className="relative z-10 flex-1 pr-4">
                  <h3 className={`font-heading font-bold uppercase tracking-wider text-[11px] sm:text-sm md:text-base transition-colors duration-300 ${isActive ? 'text-industrial-blue' : 'text-dark-bg group-hover:text-industrial-blue'}`}>
                    {category.title}
                  </h3>
                  <span className="hidden sm:inline-block mt-2 font-body text-xs text-dark-bg/50 uppercase tracking-[0.2em]">
                    View Details
                  </span>
                </div>

                {/* Image Right */}
                <div className={`
                  relative z-10 flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-300
                  ${isActive ? 'scale-110' : 'group-hover:scale-105'}
                `}>
                  {category.mainImage && (
                    <img
                      src={category.mainImage}
                      alt={category.title}
                      className="w-full h-full object-contain drop-shadow-md mix-blend-multiply"
                    />
                  )}
                </div>
              </button>
            </AnimatedReveal>
          );
        })}
      </div>
    </div>
  );
}
