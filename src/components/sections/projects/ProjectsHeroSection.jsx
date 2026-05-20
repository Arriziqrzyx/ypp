import { motion } from 'framer-motion';
import { Container } from "../../ui/Container";
import heroBg from '../../../assets/about.png'; // Using about.png or another wide image for variety

export function ProjectsHeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-dark-bg pt-20 md:pt-0">
      {/* Full Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-dark-bg/40 z-10" />
        <div className="absolute inset-0 bg-industrial-blue/10 mix-blend-multiply z-10" />
        <img
          src={heroBg}
          alt="Industrial Projects"
          className="w-full h-full object-cover grayscale opacity-60"
        />
      </motion.div>

      <Container className="relative z-30 w-full mt-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-6 text-white/60 text-sm font-heading tracking-widest uppercase"
          >
            <span className="text-white/70">Our Track Record</span>
          </motion.div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center">
              <div className="w-8 md:w-12 h-[2px] bg-industrial-blue" />
              <div className="w-2 md:w-3 h-[2px] bg-primary-red ml-1" />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Featured Projects
            </motion.h1>
            <div className="flex items-center">
              <div className="w-2 md:w-3 h-[2px] bg-primary-red mr-1" />
              <div className="w-8 md:w-12 h-[2px] bg-industrial-blue" />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-base md:text-lg font-body max-w-2xl leading-relaxed"
          >
            A showcase of our extensive engineering, procurement, and construction (EPC) portfolio. We consistently deliver high-quality industrial solutions across Indonesia.
          </motion.p>
          
        </div>
      </Container>
    </section>
  );
}
