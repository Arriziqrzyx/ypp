import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

export function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
      className="fixed inset-0 z-[9999] bg-[#0B0D12] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute w-[500px] h-[500px] bg-industrial-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-primary-red/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative flex flex-col items-center">
        {/* Glowing Spinner Ring */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-t-primary-red border-r-industrial-blue border-b-white/5 border-l-white/5"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-t-white/10 border-r-white/5 border-b-industrial-blue/50 border-l-primary-red/50 border-dashed"
          />
          
          {/* Logo container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-20 h-20 rounded-full bg-dark-bg/40 backdrop-blur-sm p-3 flex items-center justify-center relative z-10 border border-white/5"
          >
            <motion.img
              src={logo}
              alt="Yuritech Logo"
              className="w-full h-full object-contain"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        {/* Text and progress animation */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex flex-col items-center"
        >
          <h2 className="font-heading font-black text-xl tracking-[0.15em] text-white uppercase">
            YURITECH
          </h2>
          <p className="font-heading font-semibold text-[10px] tracking-[0.25em] text-industrial-blue uppercase mt-1">
            PUTRA PERKASA
          </p>
          
          {/* Animated loading progress bar indicator */}
          <div className="w-32 h-[2px] bg-white/10 rounded-full mt-6 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
              className="w-full h-full bg-gradient-to-r from-industrial-blue to-primary-red"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
