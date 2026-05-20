import { AnimatedReveal } from "../../animations/AnimatedReveal";
import { Maximize2 } from "lucide-react";

export function ProjectShowcaseCard({ project, index, onClick }) {
  return (
    <AnimatedReveal delay={index * 0.1}>
      <button
        onClick={onClick}
        className="group relative w-full flex flex-col text-left bg-white border border-light-gray rounded-xl overflow-hidden hover:border-industrial-blue hover:shadow-[0_8px_30px_rgba(30,147,171,0.12)] transition-all duration-300"
      >
        {/* Image Container */}
        <div className="w-full aspect-[4/3] relative overflow-hidden bg-off-white">
          <div className="absolute inset-0 bg-dark-bg/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          {project.images && project.images.length > 0 ? (
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-dark-bg/40 font-heading text-xs uppercase tracking-widest">No Image</span>
            </div>
          )}

          {/* Hover Overlay Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none bg-industrial-blue/10">
            <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-industrial-blue transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Maximize2 size={20} strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col flex-grow relative">
          {/* Top Accent Line on Hover */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] bg-industrial-blue w-0 group-hover:w-1/3 transition-all duration-500" />

          <h3 className="text-lg font-heading font-bold text-dark-bg uppercase leading-snug mb-3 line-clamp-2 group-hover:text-industrial-blue transition-colors duration-300">
            {project.title}
          </h3>

          <div className="mt-auto pt-4 border-t border-light-gray/50 text-xs font-body font-medium text-dark-bg/60 uppercase tracking-wide">
            {project.location}
          </div>
        </div>
      </button>
    </AnimatedReveal>
  );
}
