import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import heroBg from '../../assets/hero.png';

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-dark-bg">
      {/* Full Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/90 via-dark-bg/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-industrial-blue/10 mix-blend-multiply z-10" />
        <img
          src={heroBg}
          alt="Industrial Facility"
          className="w-full h-full object-cover grayscale opacity-80"
        />
      </motion.div>

      <Container className="relative z-30 w-full">
        <div className="max-w-4xl pt-28 md:pt-20 px-1">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-primary-red" />
            <span className="inline-block uppercase tracking-[0.3em] text-white text-xs md:text-sm font-bold">
              Leading the Future
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tighter uppercase leading-[1.15] mb-6 md:mb-8"
          >
            Empowering Industries Through Integrated EPC, Industrial Supply, and Construction Solutions for Geothermal, Petrochemical, Oil & Gas, and Mining Sectors.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/80 text-sm md:text-base lg:text-lg font-body max-w-2xl mb-8 md:mb-10 border-l-2 border-industrial-blue pl-4 md:pl-6"
          >
            Providing engineering excellence with uncompromising standards. General supplies and stockist for pipes, fittings, flanges, and instruments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 md:gap-6"
          >
            <Button
              onClick={() => navigate('/projects')}
              variant="primary"
              className="bg-industrial-blue hover:bg-white hover:text-dark-bg text-white border-transparent"
            >
              Explore Projects
            </Button>
            <Button
              onClick={() => navigate('/products')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-dark-bg hover:border-white bg-transparent"
            >
              Our Products
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        onClick={() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 right-8 lg:right-12 z-30 flex-col items-center gap-2 group cursor-pointer hover:text-industrial-blue transition-colors hidden md:flex"
      >
        <span className="text-white/70 group-hover:text-industrial-blue text-xs uppercase tracking-widest font-heading font-bold transition-colors">
          Scroll to Explore
        </span>
        <ChevronDown className="text-white/70 group-hover:text-industrial-blue transition-colors" size={24} />
      </motion.button>
    </section>
  );
}
