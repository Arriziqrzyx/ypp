import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/hero.png';
import logo from '../../assets/ypp_white.png';

export function AboutHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg pt-24 md:pt-0">
      {/* Full Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-dark-bg/40 z-10" />
        <div className="absolute inset-0 bg-industrial-blue/5 mix-blend-multiply z-10" />
        <img
          src={heroBg}
          alt="Industrial Facility"
          className="w-full h-full object-cover grayscale opacity-60"
        />
      </motion.div>

      <Container className="relative z-30 w-full mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

          {/* Left Column: Titles & Summary */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2 mb-6 text-white/60 text-sm font-heading tracking-widest uppercase"
            >
              <span className="text-white/70">About Us</span>
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-heading font-extrabold text-white leading-[1.1]"
              >
                Company Overview
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/80 text-sm md:text-base lg:text-lg font-body max-w-2xl leading-relaxed"
            >
              PT. YURITECH PUTRA PERKASA was incorporated on Jakarta established since year on 2005 as an Stockiest, Supplier, Trading & EPC Contractor / Construction Services. We fulfill any rapid development of diversed modern industries.
            </motion.p>
          </div>

          {/* Right Column: Company Logo */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}
              className="w-48 md:w-64 lg:w-80 relative"
            >
              {/* Optional glow effect behind logo */}
              <div className="absolute inset-0 bg-white/10 blur-[50px] rounded-full" />
              <img
                src={logo}
                alt="PT. YURITECH PUTRA PERKASA Logo"
                className="w-full h-auto object-contain relative z-10"
              />
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
