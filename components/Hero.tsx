import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 pt-12 overflow-hidden bg-paper">
      {/* Border Decoration */}
      <div className="absolute inset-8 border border-accent opacity-5 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 max-w-5xl"
      >
        <span className="font-tech text-sub text-xs tracking-[0.4em] uppercase mb-8 block">
          Digital Portfolio 2026
        </span>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-ink mb-12 leading-tight">
          欢迎来到<br/>
          “怪兽”的<span className="text-accent font-serif italic relative inline-block mx-2">数字森林</span>
        </h1>

        <div className="h-[1px] w-16 bg-accent mx-auto mb-12 opacity-30"></div>

        {/* Keywords */}
        <p className="font-serif text-ink text-sm md:text-base leading-loose tracking-wide max-w-4xl mx-auto uppercase">
          25届影视编导生 <span className="mx-3 text-accent opacity-40">|</span> 
          累计亿级曝光短视频编导 <span className="mx-3 text-accent opacity-40">|</span> 
          AI数字创作探索者 <span className="mx-3 text-accent opacity-40">|</span> 
          乒乓球资深玩家
        </p>
      </motion.div>

      <motion.div 
        className="absolute bottom-12 text-sub opacity-50 flex flex-col items-center gap-3"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-12 w-[1px] bg-sub opacity-30"></div>
        <span className="text-[10px] font-tech uppercase tracking-widest vertical-text">SCROLL</span>
      </motion.div>
    </section>
  );
};

export default Hero;