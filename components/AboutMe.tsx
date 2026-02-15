import React from 'react';
import { Leaf } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-paper relative border-t border-line">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-12 gap-16">
           {/* Left Slogan */}
           <div className="md:col-span-1 hidden md:flex justify-center h-full pt-12">
              <h3 className="vertical-text text-2xl text-accent font-bold tracking-widest border-r border-line pr-8 h-[300px]">
                一棵向上生长的树
              </h3>
           </div>

           {/* Center Content */}
           <div className="md:col-span-7 space-y-20">
              
              <div>
                 <span className="font-tech text-xs text-accent tracking-widest block mb-6">01 / IDENTITY</span>
                 <div className="prose prose-lg text-ink font-serif leading-loose text-justify space-y-6">
                   <p>
                     我是 <span className="highlight">怪兽 (Monster)</span>。这个名字，是因为给坏人起一个让他们害怕的名字，他们就不敢靠近了。但我本人，其实是一个内心细腻温柔、又热烈又倔强（又帅气hh）的girl！
                   </p>
                   <p className="text-sub text-base">
                     作为一名 25 届编导生，我已经在职场中摸爬滚打半年，带着 4 年影视专业的积累，试图在镜头下重塑美好。
                   </p>
                   <p>
                     我是典型的 <span className="highlight">ENFJ</span>，也是向上生长的 <span className="highlight">“甲木”</span>。这种固执让我必须向阳而生，不断突破创作的边界。
                   </p>
                 </div>
              </div>

              <div>
                 <span className="font-tech text-xs text-accent tracking-widest block mb-6">02 / AESTHETICS</span>
                 <p className="font-serif text-base leading-loose text-justify text-ink mb-10">
                    曾疯狂迷恋 <span className="font-bold">蒂姆·波顿</span> 的奇幻和他《大鱼》式的浪漫，试图在怪诞的废墟里建立自己的避难所。但现在，更倾向于 <span className="font-bold">邵艺辉</span> 镜头下的世界。喜欢真实、强大且独立的女性内核。所以现在我的作品不仅追求画面美学，更追求 <span className="highlight">叙事的灵魂</span>。
                 </p>
                 
                 {/* Aesthetic Comparison */}
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3 group">
                       <div className="aspect-[3/4] overflow-hidden bg-[#F0F0F0]">
                          <img 
                            src="https://i.postimg.cc/NM0QWsp5/qi-huan-dian-ying-mei-xue-da-yu-li-de-gou-tu-zhi-jing-se-cai-1-Nefelibata-ying-ju-shou-ji-lai-zi-xiao-hong-shu-wang-ye-ban.jpg" 
                            alt="Fantasy Style" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                          />
                       </div>
                       <div className="flex justify-between items-center border-t border-line pt-2">
                          <span className="text-[10px] font-tech text-sub uppercase">Fantasy</span>
                          <span className="text-xs font-serif text-ink">蒂姆·波顿式浪漫</span>
                       </div>
                    </div>
                    <div className="space-y-3 group mt-12">
                       <div className="aspect-[3/4] overflow-hidden bg-[#F0F0F0]">
                          <img 
                            src="https://i.postimg.cc/k457kJfD/neng-rang-ni-kai-xin-de-jiu-shi-hao-dong-xi-(-ｰ-)-1-a-su-kan-ju-zhuan-yong-lai-zi-xiao-hong-shu-wang-ye-ban.jpg" 
                            alt="Realistic Style" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          />
                       </div>
                       <div className="flex justify-between items-center border-t border-accent pt-2">
                          <span className="text-[10px] font-tech text-accent uppercase">Reality</span>
                          <span className="text-xs font-serif text-ink font-bold">邵艺辉式真实</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right: Decoration */}
           <div className="md:col-span-4 relative hidden md:block">
              <div className="sticky top-32 pl-12 border-l border-line">
                 <div className="aspect-[2/3] overflow-hidden opacity-80 mb-6">
                    <img 
                      src="https://i.postimg.cc/sxnXxngn/IMG-8676.jpg" 
                      alt="Tree / Portrait" 
                      className="w-full h-full object-cover grayscale" 
                    />
                 </div>
                 <Leaf size={40} className="text-accent opacity-20 mb-4" />
                 <p className="vertical-text text-sm text-sub opacity-60 h-32">
                   向阳而生 · 自由呼吸
                 </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;