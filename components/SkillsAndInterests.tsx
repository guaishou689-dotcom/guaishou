import React from 'react';
import { Activity, Award, Hexagon, Zap } from 'lucide-react';

const SkillsAndInterests: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-16 bg-paper border-t border-line">
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* SKILLS */}
        <div className="grid md:grid-cols-12 gap-12">
           <div className="md:col-span-3 border-t border-accent pt-4">
              <span className="font-tech text-xs text-accent tracking-widest block mb-2">04 / SKILLS</span>
              <h2 className="font-serif text-3xl mt-4 text-ink">专业技能<br/>与结果</h2>
           </div>
           
           <div className="md:col-span-9 grid md:grid-cols-2 gap-12 pt-4">
              <div>
                 <h3 className="font-bold mb-4 flex items-center gap-2 text-accent text-lg">
                   <Activity size={18} /> 导演思维与全流程制作
                 </h3>
                 <p className="font-serif text-base leading-relaxed text-sub text-justify">
                   擅长将文字具象化为有美感的画面 。精通 Pr、AE、DaVinci 等专业工具，具备从运镜调度到后期制作的全流程参与能力 。
                 </p>
              </div>
              <div>
                 <h3 className="font-bold mb-4 flex items-center gap-2 text-accent text-lg">
                   <Award size={18} /> 工作数据
                 </h3>
                 <p className="font-serif text-base leading-relaxed text-sub text-justify">
                   在职场实战中，我负责的项目视频累计曝光量已达 <span className="text-gold font-bold text-xl">上亿级</span>，为公司带来了巨大的收益转化 。
                 </p>
                 <div className="mt-6 font-cinematic text-6xl text-gold opacity-30">100M+</div>
              </div>
           </div>
        </div>

        {/* INTERESTS */}
        <div className="grid md:grid-cols-12 gap-12">
           <div className="md:col-span-3 border-t border-accent pt-4">
              <span className="font-tech text-xs text-accent tracking-widest block mb-2">05 / INTERESTS</span>
              <h2 className="font-serif text-3xl mt-4 text-ink">兴趣爱好</h2>
              <p className="text-xs mt-2 text-sub font-tech">TCM · I-CHING · SPORT</p>
           </div>

           <div className="md:col-span-9 grid md:grid-cols-2 gap-8 pt-4">
              <div className="bg-[#F5F7F6] p-10 relative group">
                 <Hexagon className="absolute top-6 right-6 w-12 h-12 text-accent opacity-10 group-hover:rotate-12 transition-transform" />
                 <h3 className="font-bold text-lg mb-4 text-ink">中医、周易</h3>
                 <p className="text-sm text-sub leading-loose mb-6 text-justify">
                   喜欢研究 <span className="font-bold">中医</span> 和 <span className="font-bold">周易</span>，并非为了玄学，而是感觉这个奇妙，万事万物都有自己的底层逻辑，在探索的时候一些新感悟和新发现会让我很兴奋。
                 </p>
                 <div className="flex gap-8 text-xs font-bold text-ink pt-4 border-t border-line">
                    <div><span className="block text-accent mb-1">易经</span> 信息排列</div>
                    <div><span className="block text-accent mb-1">中医</span> 能量流动</div>
                 </div>
              </div>

              <div className="bg-[#F5F7F6] p-10 relative group">
                 <Zap className="absolute top-6 right-6 w-12 h-12 text-accent opacity-10 group-hover:scale-110 transition-transform" />
                 <h3 className="font-bold text-lg mb-4 text-ink">运动</h3>
                 <p className="text-sm text-sub leading-loose mb-6">
                   同时作为一个e人，怎么能少得了运动。
                 </p>
                 <div className="space-y-2 text-xs font-bold text-ink pt-4 border-t border-line">
                    <div className="flex justify-between"><span>乒乓球</span> <span className="text-sub font-normal">校园无敌手</span></div>
                    <div className="flex justify-between"><span>舞蹈 (HipHop)</span> <span className="text-sub font-normal">初学者状态</span></div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsAndInterests;