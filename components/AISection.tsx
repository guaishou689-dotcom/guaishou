import React from 'react';

const AISection: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-16 bg-[#F8F9F8]">
      <div className="max-w-5xl mx-auto">
         <div className="text-center mb-20">
            <span className="font-tech text-xs text-sub block mb-4 tracking-widest">03 / FUTURE</span>
            <h2 className="font-serif text-4xl text-ink">AI 探索</h2>
         </div>

         <div className="grid md:grid-cols-2 gap-20 items-start">
            <div className="prose prose-lg font-serif text-ink leading-loose text-justify">
               <p>
                 早在 <span className="highlight">deepseek</span> 和 <span className="highlight">元宝</span> 出生的几个月前，我就对 AI 这个小怪物充满好奇与思考，开始探索。于是我的毕设以 AI 为主题，创作一场关于 AI 数字人与人类亲情的短片。
               </p>
               <div className="pl-6 border-l-2 border-accent my-8 py-2">
                 <p className="text-sm text-sub italic">
                   “那个时候，市面上的图生视频和 AI 生图技术还存在很多逻辑缺陷，但我依然带着偏执的好奇心，用 AI 完成了整部片的视觉开头。”
                 </p>
               </div>
               <p>
                 到现在各个大模型的逐渐成熟，工作生活已经离不开它，比如你现在正在浏览的网页，也是这个它帮我一起做的。未来我也想在这个方面去尝试更多的可能。
               </p>
            </div>

            {/* AI Project Cover */}
            <div className="relative p-3 bg-white shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500">
               <div className="aspect-video bg-[#EAEFEA] overflow-hidden relative group cursor-pointer">
                  {/* Play button removed */}
                  <img 
                    src="https://i.postimg.cc/kGJ7PxqP/1dfdd4790ef3a4b024299a61cde733f7.jpg" 
                    className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" 
                    alt="AI Project Cover" 
                  />
                  <div className="absolute bottom-4 left-4 font-tech text-[10px] text-white bg-black/40 px-2 py-1 backdrop-blur-md">THESIS_PROJECT.AI</div>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default AISection;