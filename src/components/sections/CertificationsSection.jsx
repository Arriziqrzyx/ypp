import { useState, useEffect, useRef } from 'react';
import { X, FileText, ZoomIn, ZoomOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedReveal } from '../animations/AnimatedReveal';
import { legalDocuments } from '../../data/documentData';

export function CertificationsSection() {
  const { t } = useTranslation();
  const [selectedCert, setSelectedCert] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
  }, [selectedCert]);

  useEffect(() => {
    if (zoomScale === 1) {
      setPanOffset({ x: 0, y: 0 });
    }
  }, [zoomScale]);

  useEffect(() => {
    if (!selectedCert) return;

    // Lock page body scroll natively
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      // Restore scroll state when closed
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedCert]);

  const handleMouseDown = (e) => {
    e.stopPropagation();
    if (zoomScale <= 1) return;
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX - panOffset.x, y: clientY - panOffset.y });
  };

  const handleMouseMove = (e) => {
    e.stopPropagation();
    if (!isDragging || zoomScale <= 1) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    let newX = clientX - dragStart.x;
    let newY = clientY - dragStart.y;

    // Constrain panning relative to the active zoom level
    const maxOffset = (zoomScale - 1) * 350;
    newX = Math.min(Math.max(newX, -maxOffset), maxOffset);
    newY = Math.min(Math.max(newY, -maxOffset), maxOffset);

    setPanOffset({ x: newX, y: newY });
  };

  const handleMouseUp = (e) => {
    if (e) e.stopPropagation();
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.stopPropagation();
    const zoomFactor = 0.15;
    const direction = e.deltaY < 0 ? 1 : -1;

    setZoomScale((prevScale) => {
      const newScale = prevScale + direction * zoomFactor;
      return Math.min(Math.max(newScale, 1), 3);
    });
  };

  return (
    <section className="relative py-20 md:py-24 bg-off-white border-t border-light-gray overflow-hidden">
      {/* subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-industrial-blue/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <AnimatedReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center">
                <div className="w-12 h-[2px] bg-industrial-blue" />
                <div className="w-3 h-[2px] bg-primary-red ml-1" />
              </div>
              <h2 className="text-sm font-heading font-bold uppercase tracking-[0.3em] text-industrial-blue">
                {t('certifications.hero.subtitle')}
              </h2>
              <div className="flex items-center">
                <div className="w-3 h-[2px] bg-primary-red mr-1" />
                <div className="w-12 h-[2px] bg-industrial-blue" />
              </div>
            </div>

            <h3 className="font-heading font-bold text-dark-bg text-2xl sm:text-3xl md:text-5xl leading-tight mb-6">
              {t('certifications.hero.title')}
            </h3>

            <p className="text-dark-bg/70 font-body leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
              {t('certifications.hero.description')}
            </p>
          </div>
        </AnimatedReveal>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 mt-10 max-w-6xl mx-auto">
          {legalDocuments.map((cert, index) => (
            <AnimatedReveal key={cert.id} delay={0.04 * index}>
              <button
                onClick={() => setSelectedCert(cert)}
                className="
                    group
                    relative
                    overflow-hidden
                    text-left
                    bg-white
                    border
                    border-light-gray
                    hover:border-industrial-blue
                    transition-all
                    duration-300
                    hover:-translate-y-[2px]
                    hover:shadow-xl
                    hover:shadow-industrial-blue/5
                    h-full
                    w-full
                  "
              >
                {/* top accent line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-industrial-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="flex items-center gap-4 p-4">
                  {/* icon */}
                  <div
                    className="
                        relative
                        flex
                        items-center
                        justify-center
                        w-14
                        h-14
                        bg-industrial-blue
                        text-white
                        flex-shrink-0
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                  >
                    <FileText className="w-7 h-7 stroke-[1.7]" />
                  </div>

                  {/* content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="
                          font-heading
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-dark-bg
                          group-hover:text-industrial-blue
                          transition-colors
                          text-xs
                          md:text-sm
                          leading-snug
                        "
                    >
                      {t(`certifications.list.items.${cert.id}`)}
                    </h3>

                    <div className="mt-2 flex items-center gap-1 text-dark-bg/40 group-hover:text-primary-red transition-colors duration-300">
                      <span className="text-[10px] font-body uppercase tracking-[0.2em] font-semibold">
                        {t('certifications.list.view')}
                      </span>
                      <span className="flex items-center gap-0 text-xs font-bold leading-none">
                        <span className="inline-block w-4 h-px bg-current group-hover:w-6 transition-all duration-300 align-middle translate-y-px" />
                        <span>&rsaquo;</span>
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </AnimatedReveal>
          ))}
        </div>
      </Container>

      {/* MODAL */}
      {selectedCert && (
        <div
          data-lenis-prevent
          className="
              fixed
              inset-0
              z-[100]
              bg-black/70
              flex
              items-center
              justify-center
              p-4
              md:p-6
              animate-in
              fade-in
              duration-200
              overscroll-none
            "
          onClick={() => setSelectedCert(null)}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="
                relative
                w-full
                max-w-5xl
                bg-white
                overflow-hidden
                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                border
                border-light-gray
                overscroll-none
              "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-light-gray bg-off-white">
              <div className="pr-4">
                <p className="text-industrial-blue font-body uppercase tracking-[0.3em] text-[10px] font-semibold">
                  {t('certifications.hero.subtitle')}
                </p>
                <h3 className="mt-1 font-heading font-bold text-dark-bg text-base md:text-xl leading-tight uppercase tracking-wider">
                  {t(`certifications.list.items.${selectedCert.id}`)}
                </h3>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="
                    w-10
                    h-10
                    bg-off-white
                    hover:bg-primary-red
                    hover:text-white
                    transition-all
                    duration-200
                    flex
                    items-center
                    justify-center
                    text-dark-bg
                    flex-shrink-0
                    border
                    border-light-gray
                  "
              >
                ✕
              </button>
            </div>

            {/* Image Section with Zoom */}
            <div className="relative bg-[#f5f7fa] overflow-hidden">
              <div
                ref={containerRef}
                data-lenis-prevent
                className="max-h-[65vh] h-[65vh] overflow-hidden flex items-center justify-center p-3 md:p-5 select-none overscroll-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
                onWheel={handleWheel}
                style={{ cursor: zoomScale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
              >
                <img
                  src={selectedCert.img}
                  alt={t(`certifications.list.items.${selectedCert.id}`)}
                  style={{
                    transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomScale})`,
                    transformOrigin: 'center center',
                    transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    maxHeight: '60vh',
                  }}
                  className="w-auto h-full object-contain select-none pointer-events-none"
                />
              </div>

              {/* Floating Zoom Controls */}
              <div className="absolute bottom-4 right-4 z-50 bg-dark-bg/85 backdrop-blur-md border border-white/10 px-2.5 py-1.5 flex items-center gap-2 shadow-xl rounded-lg">
                <button
                  onClick={() => setZoomScale(prev => Math.max(prev - 0.25, 1))}
                  disabled={zoomScale === 1}
                  className="
                      w-8
                      h-8
                      flex
                      items-center
                      justify-center
                      bg-white/10
                      disabled:bg-white/5
                      disabled:opacity-40
                      hover:bg-primary-red
                      text-white
                      rounded
                      transition-all
                      duration-200
                    "
                  title="Zoom Out"
                >
                  <ZoomOut size={16} />
                </button>

                <span className="text-white text-xs font-heading font-semibold w-12 text-center select-none">
                  {Math.round(zoomScale * 100)}%
                </span>

                <button
                  onClick={() => setZoomScale(prev => Math.min(prev + 0.25, 3))}
                  disabled={zoomScale === 3}
                  className="
                      w-8
                      h-8
                      flex
                      items-center
                      justify-center
                      bg-white/10
                      disabled:bg-white/5
                      disabled:opacity-40
                      hover:bg-primary-red
                      text-white
                      rounded
                      transition-all
                      duration-200
                    "
                  title="Zoom In"
                >
                  <ZoomIn size={16} />
                </button>

                <div className="w-px h-5 bg-white/20 mx-0.5" />

                <button
                  onClick={() => setZoomScale(1)}
                  disabled={zoomScale === 1}
                  className="
                      h-8
                      px-2.5
                      flex
                      items-center
                      justify-center
                      bg-white/10
                      disabled:bg-white/5
                      disabled:opacity-40
                      hover:bg-industrial-blue
                      text-white
                      text-[10px]
                      font-heading
                      font-bold
                      uppercase
                      tracking-wider
                      rounded
                      transition-all
                      duration-200
                    "
                  title="Reset Zoom"
                >
                  {t('certifications.list.reset')}
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-4 px-5 md:px-6 py-4 border-t border-light-gray bg-white">
              <p className="text-xs md:text-sm text-dark-bg/60 font-body">
                {t('certifications.list.preview')}
              </p>

              <button
                onClick={() => setSelectedCert(null)}
                className="
                    px-6
                    py-2.5
                    bg-industrial-blue
                    hover:bg-industrial-blue/90
                    text-white
                    font-heading
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[11px]
                    transition-all
                    duration-200
                  "
              >
                {t('certifications.list.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}