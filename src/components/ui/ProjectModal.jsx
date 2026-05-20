import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, FileText, Calendar } from "lucide-react";

export function ProjectModal({ isOpen, onClose, project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Reset index when project changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  const images = project?.images || [];
  const total = images.length;

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((i) => (i === 0 ? total - 1 : i - 1));
  }, [total]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((i) => (i === total - 1 ? 0 : i + 1));
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, prev, next, onClose]);

  if (!project) return null;

  const currentImg = images[currentIndex];

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-white shadow-[0_30px_90px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden flex flex-col md:flex-row max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── LEFT: PHOTO GALLERY ── */}
            <div className="relative w-full md:w-[55%] bg-white flex flex-col" style={{ minHeight: 340 }}>

              {/* Main Photo Frame – fixed aspect ratio wrapper */}
              <div className="relative w-full flex-1 overflow-hidden bg-white" style={{ minHeight: 280 }}>

                {/* Clean white background */}

                {/* Main Image */}
                <AnimatePresence custom={direction} initial={false}>
                  <motion.img
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    src={currentImg}
                    alt={`${project.title} – foto ${currentIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-contain z-10"
                  />
                </AnimatePresence>

                {/* Nav Buttons – always visible */}
                {total > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-off-white text-dark-bg/70 hover:text-industrial-blue transition-all duration-200 border border-light-gray shadow-md"
                      aria-label="Foto sebelumnya"
                    >
                      <ChevronLeft size={20} strokeWidth={2.5} />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-off-white text-dark-bg/70 hover:text-industrial-blue transition-all duration-200 border border-light-gray shadow-md"
                      aria-label="Foto berikutnya"
                    >
                      <ChevronRight size={20} strokeWidth={2.5} />
                    </button>
                  </>
                )}

                {/* Photo Counter */}
                {total > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-white border border-light-gray text-dark-bg/60 text-[11px] font-heading font-bold tracking-widest uppercase shadow-sm">
                    FOTO {currentIndex + 1} / {total}
                  </div>
                )}
              </div>

              {/* Thumbnails Strip */}
              {total > 1 && (
                <div className="flex gap-2 p-3 bg-off-white border-t border-light-gray overflow-x-auto scrollbar-none z-20">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                      className={`flex-shrink-0 w-14 h-14 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                        i === currentIndex
                          ? "border-industrial-blue scale-105 shadow-[0_0_0_2px_rgba(30,147,171,0.5)]"
                          : "border-transparent opacity-50 hover:opacity-80"
                      }`}
                      aria-label={`Lihat foto ${i + 1}`}
                    >
                      <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── RIGHT: CONTENT ── */}
            <div className="w-full md:w-[45%] flex flex-col overflow-y-auto bg-white">

              {/* Header Bar */}
              <div className="sticky top-0 bg-white border-b border-light-gray z-10 px-6 py-4 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-industrial-blue">
                    Project Details
                  </span>
                  <h3 className="font-heading font-black text-xl text-dark-bg uppercase tracking-tight leading-snug mt-1">
                    {project.title}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-off-white hover:bg-primary-red hover:text-white text-dark-bg/60 transition-all duration-200 border border-light-gray"
                  aria-label="Tutup"
                >
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>

              {/* Details */}
              <div className="p-6 space-y-5 flex-1">

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-industrial-blue/10 flex items-center justify-center text-industrial-blue mt-0.5">
                    <MapPin size={16} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-dark-bg/40 mb-0.5">Location</p>
                    <p className="font-body text-sm font-semibold text-dark-bg">{project.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-industrial-blue/10 flex items-center justify-center text-industrial-blue mt-0.5">
                    <FileText size={16} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-dark-bg/40 mb-0.5">Contract No.</p>
                    <p className="font-body text-sm font-semibold text-dark-bg font-mono">{project.contractNo}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-industrial-blue/10 flex items-center justify-center text-industrial-blue mt-0.5">
                    <Calendar size={16} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-dark-bg/40 mb-0.5">Period</p>
                    <p className="font-body text-sm font-semibold text-dark-bg">{project.period}</p>
                  </div>
                </div>

                {project.description && (
                  <div className="pt-4 mt-2 border-t border-light-gray/60">
                    <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-dark-bg/40 mb-2">Description</p>
                    <p className="font-body text-sm text-dark-bg/75 leading-relaxed">{project.description}</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-light-gray bg-off-white/60">
                <p className="text-[10px] font-heading uppercase tracking-widest text-dark-bg/40">
                  PT. Yuritech Putra Perkasa
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
