import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Container } from "../../ui/Container";
import heroBg from '../../../assets/hero.png'; // Need to check path depth: src/components/sections/products -> ../../../assets/hero.png

export function ProductsHeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg pt-24 md:pt-0 pb-16 md:pb-0">
      {/* Full Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/85 to-dark-bg/60 z-10" />
        <div className="absolute inset-0 bg-industrial-blue/10 mix-blend-multiply z-10" />
        <img
          src={heroBg}
          alt="Industrial Facility"
          className="w-full h-full object-cover grayscale opacity-50"
        />
      </motion.div>

      <Container className="relative z-30 w-full mt-10 md:mt-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">

          {/* Left Column: Titles & Summary */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2 mb-6 text-white/60 text-sm font-heading tracking-widest uppercase"
            >
              <span className="text-white/70">{t('products.hero.subtitle')}</span>
            </motion.div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                <div className="w-12 h-[2px] bg-industrial-blue" />
                <div className="w-3 h-[2px] bg-primary-red ml-1" />
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-heading font-extrabold text-white leading-[1.1] tracking-tight"
              >
                {t('products.hero.title')}
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/80 text-sm md:text-base lg:text-lg font-body max-w-xl leading-relaxed"
            >
              {t('products.hero.description')}
            </motion.p>
          </div>

          {/* Right Column: Material Standards & Specifications */}
          <div className="w-full lg:w-1/2 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-dark-bg/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col gap-8"
            >
              {/* Material Standard */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-[2px] bg-industrial-blue" />
                  <h3 className="font-heading font-bold text-sm md:text-base text-white uppercase tracking-widest">
                    {t('products.hero.standard')}
                  </h3>
                </div>
                <p className="font-body text-white/70 leading-relaxed text-sm md:text-base pl-9">
                  ASTM, ASME, ANSI, API, JIS, MSS, DIN, BS, AWWA, JWWA, ISO, AS, SII, SNI & Special Type.
                </p>
              </div>

              {/* Material Specification */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-[2px] bg-industrial-blue" />
                  <h3 className="font-heading font-bold text-sm md:text-base text-white uppercase tracking-widest">
                    {t('products.hero.specification')}
                  </h3>
                </div>
                <p className="font-body text-white/70 leading-relaxed text-sm md:text-base pl-9">
                  Stainless Steel, Carbon Steel, Cast Steel, Cast Iron, Bronze, Brass, Alloy, Aluminum, Aluminum Brass, Monel, Inconel, PVC, PTFE, Polyethylene and etc.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}