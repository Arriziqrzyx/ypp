import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export function AnimatedReveal({ 
  children, 
  className, 
  delay = 0, 
  direction = "up" 
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98], // Cinematic easing
        delay: delay
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
