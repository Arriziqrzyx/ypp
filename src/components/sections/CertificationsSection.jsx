import { useState, useEffect } from 'react';
import { X, FileText } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedReveal } from '../animations/AnimatedReveal';
import { legalDocuments } from '../../data/documentData';

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = selectedCert ? "hidden" : "unset";
    }

    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, [selectedCert]);

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
                Our Credentials
              </h2>
              <div className="flex items-center">
                <div className="w-3 h-[2px] bg-primary-red mr-1" />
                <div className="w-12 h-[2px] bg-industrial-blue" />
              </div>
            </div>

            <h3 className="font-heading font-bold text-dark-bg text-2xl sm:text-3xl md:text-5xl leading-tight mb-6">
              Certifications & Recognition
            </h3>

            <p className="text-dark-bg/70 font-body leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
              Our commitment to safety, compliance, and operational excellence
              is reflected through recognized certifications and industry
              credentials across construction, energy, engineering, and
              industrial services.
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
                      {cert.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-1 text-dark-bg/40 group-hover:text-primary-red transition-colors duration-300">
                      <span className="text-[10px] font-body uppercase tracking-[0.2em] font-semibold">
                        View Certificate
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
          "
          onClick={() => setSelectedCert(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-5xl
              bg-white
              overflow-hidden
              shadow-[0_25px_80px_rgba(0,0,0,0.35)]
              border
              border-light-gray
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-light-gray bg-off-white">
              <div className="pr-4">
                <p className="text-industrial-blue font-body uppercase tracking-[0.3em] text-[10px] font-semibold">
                  Certification
                </p>
                <h3 className="mt-1 font-heading font-bold text-dark-bg text-base md:text-xl leading-tight uppercase tracking-wider">
                  {selectedCert.title}
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

            {/* Image */}
            <div className="relative bg-[#f5f7fa]">
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                className="
                  w-full
                  max-h-[75vh]
                  object-contain
                  p-3
                  md:p-5
                "
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-4 px-5 md:px-6 py-4 border-t border-light-gray bg-white">
              <p className="text-xs md:text-sm text-dark-bg/60 font-body">
                Official certification document preview
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
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}