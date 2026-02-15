import React from 'react';
import { Leaf, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-40 px-6 text-center relative overflow-hidden text-[#FDFDFB]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/mD0rxcht/xin-jiang-shi-wo-de-jing-shen-bao-hu-qu-1-chi-mu-VV-lai-zi-xiao-hong-shu-wang-ye-ban.jpg" 
            alt="Nature Background" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2623] via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 z-10"></div>
      
      <div className="max-w-3xl mx-auto relative z-20">
         <Leaf className="w-12 h-12 mx-auto mb-12 text-accent opacity-80" />
         
         <p className="font-serif text-xl md:text-3xl leading-relaxed mb-16 font-light">
           “我喜欢树木向上生长的张力，<br/>
           也喜欢它向下扎根，向上舒展的性格。<br/>
           我也是一棵自带生长动力的树，<br/>
           正在寻找一片能<span className="text-[#3A5F4C] bg-paper px-3 py-1 mx-1 text-base align-middle italic font-serif shadow-lg">自由吸氧、共同生长</span>的森林。”
         </p>

         <button className="group px-12 py-5 border border-white/20 hover:bg-white hover:text-ink transition-all duration-500 flex items-center gap-3 mx-auto rounded-sm">
            <span className="font-serif tracking-wider text-sm font-bold">期待与你一起，创造更多可能</span>
            <Heart size={16} className="group-hover:fill-current transition-colors text-gold" />
         </button>

         <div className="mt-32 text-[10px] font-tech text-white/30 tracking-[0.3em] uppercase">
           Monster's Digital Forest © 2026
         </div>
      </div>
    </footer>
  );
};

export default Footer;