import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0); 

  useEffect(() => {
    // 0s: Initial fog
    // 1s: Fog clears
    const timer1 = setTimeout(() => setStep(1), 1000);
    // 5s: Complete
    const timer2 = setTimeout(onComplete, 5000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-paper"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* Background: Forest */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <img 
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000&auto=format&fit=crop" 
          alt="Misty Green Forest" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Fog Overlay */}
      <motion.div 
        className="absolute inset-0 bg-paper z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: step >= 1 ? 0 : 0.9 }} 
        transition={{ duration: 3, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-20 text-center flex flex-col items-center">
        {/* Geometric Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-8"
        >
           <svg width="100" height="100" viewBox="0 0 100 100" className="stroke-white" style={{ strokeWidth: 1.5, fill: 'none' }}>
             <motion.path d="M50 20 L70 50 L30 50 Z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
             <motion.path d="M50 40 L70 70 L30 70 Z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.3 }} />
             <motion.path d="M50 60 L70 90 L30 90 Z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.6 }} />
           </svg>
        </motion.div>

        {/* Text Fade In */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="text-3xl md:text-4xl font-serif font-light text-white drop-shadow-md"
        >
           怪兽的数字森林
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;