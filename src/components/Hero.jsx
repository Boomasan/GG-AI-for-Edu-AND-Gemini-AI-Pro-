import { ArrowRight, Smartphone, Cloud, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-primary-dark text-white pt-28 pb-16 overflow-hidden"
    >
      {/* Premium Cyber Grid Overlay with Masking */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Rich Ambient Glowing Radial Orbs */}
      <div className="absolute top-1/4 left-1/12 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-secondary/5 blur-[100px] md:blur-[160px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/12 w-[400px] md:w-[650px] h-[400px] md:h-[650px] rounded-full bg-accent/4 blur-[120px] md:blur-[180px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-emerald-500/2 blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
        {/* Left Column: Premium Pitch & CTAs */}
        <div className="lg:col-span-7 space-y-8 text-left animate-fade-in-up">
          {/* Enhanced Trust Badge */}
          <div className="inline-flex items-center space-x-2.5 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-slate-200">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span>ที่ปรึกษาด้าน EdTech และการเปลี่ยนผ่านองค์กรสู่ยุคดิจิทัล</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
            ผู้ขับเคลื่อนการทรานส์ฟอร์มองค์กร <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-indigo-200 to-sky-200">
              โดยมีมนุษย์เป็นศูนย์กลาง
            </span>
          </h1>

          {/* Upgraded Subheading */}
          <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
            เราเชื่อมโยงศาสตร์การสอนและเทคโนโลยีเข้าด้วยกัน ขับเคลื่อนการเปลี่ยนผ่านสู่ดิจิทัลอย่างแท้จริง ด้วยอัตราการยอมรับใช้งานที่สูงจากผู้ใช้ และการเพิ่มผลตอบแทนจากการลงทุน (ROI) ด้านเทคโนโลยีอย่างคุ้มค่า
          </p>

          {/* Interactive CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#services"
              className="btn-interactive inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-secondary to-accent hover:from-secondary-hover hover:to-accent-hover text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-secondary/25 hover:shadow-2xl transition-all"
            >
              <span>สำรวจบริการของเรา</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="btn-interactive inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-xl text-base font-bold backdrop-blur-sm transition-all"
            >
              <span>ติดต่อเรา</span>
            </a>
          </div>

          {/* Professional Tech Partner Badges */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-slate-300">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              พันธมิตรทางเทคโนโลยี:
            </span>
            <div className="flex items-center space-x-2.5 bg-white/5 px-4 py-2 rounded-xl border border-white/5 backdrop-blur-md">
              <Cloud className="h-4.5 w-4.5 text-blue-400" />
              <span className="text-xs font-semibold text-slate-200">พันธมิตร Google Cloud</span>
            </div>
            <div className="flex items-center space-x-2.5 bg-white/5 px-4 py-2 rounded-xl border border-white/5 backdrop-blur-md">
              <Smartphone className="h-4.5 w-4.5 text-amber-400" />
              <span className="text-xs font-semibold text-slate-200">ระบบรักษาความปลอดภัย Samsung Knox & AI</span>
            </div>
          </div>
        </div>

        {/* Right Column: Layered Premium Glassmorphic Graphic Deck */}
        <div className="lg:col-span-5 flex justify-center relative select-none">
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            {/* Spinning decorative orbit rings */}
            <div className="absolute inset-0 rounded-full border border-white/5 animate-pulse-slow"></div>
            <div className="absolute inset-4 rounded-full border border-dashed border-white/10 animate-spin" style={{ animationDuration: '40s' }}></div>
            <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-secondary/8 to-accent/5 blur-3xl pointer-events-none"></div>

            {/* Main Dashboard Card */}
            <div className="relative z-10 w-full h-full glass-panel-dark rounded-3xl p-7 md:p-8 flex flex-col justify-between shadow-2xl border border-white/10">
              
              {/* Card Header */}
              <div className="flex justify-between items-start">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-secondary/15 to-accent/10 flex items-center justify-center border border-white/10">
                  <GraduationCap className="h-5.5 w-5.5 text-accent" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    อัตราความสำเร็จการเรียนรู้
                  </div>
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-0.5">
                    +94.8%
                  </div>
                </div>
              </div>

              {/* Progress Bars / Indicators */}
              <div className="my-6 space-y-5">
                <div className="text-sm font-bold text-slate-100 flex items-center justify-between">
                  <span>ระบบโครงร่างการเรียนรู้ Supa</span>
                  <span className="text-[10px] text-accent font-mono bg-accent/5 px-2 py-0.5 rounded border border-accent/10">V2.4</span>
                </div>
                
                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="group/progress">
                    <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                      <span className="group-hover/progress:text-slate-200 transition-colors">ศาสตร์การสอนและการประยุกต์ใช้จริง (TPACK)</span>
                      <span className="font-bold text-slate-200">95%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[95%] relative">
                        <span className="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse"></span>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="group/progress">
                    <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                      <span className="group-hover/progress:text-slate-200 transition-colors">การวางระบบนิเวศการทำงานคลาวด์</span>
                      <span className="font-bold text-slate-200">88%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[88%] relative">
                        <span className="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse"></span>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="group/progress">
                    <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                      <span className="group-hover/progress:text-slate-200 transition-colors">ความคุ้มค่าของ ROI ทางเทคโนโลยี</span>
                      <span className="font-bold text-slate-200">92%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-[92%] relative">
                        <span className="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium tracking-wide">ผ่านการตรวจสอบด้วย TPACK + SAMR</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                  Active
                </span>
              </div>
            </div>

            {/* Interactive Floating Badge 1 (Top Right) */}
            <div className="absolute -top-6 -right-6 bg-slate-700/80 backdrop-blur-lg border border-white/10 rounded-2xl py-3 px-4 shadow-2xl flex items-center space-x-3 animate-float-badge z-20">
              <div className="h-8.5 w-8.5 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/15">
                <Cloud className="h-4.5 w-4.5" />
              </div>
              <div className="text-left">
                <div className="text-[9px] text-slate-400 font-black uppercase tracking-wider">Cloud Solution</div>
                <div className="text-xs font-bold text-white">Google Cloud Partner</div>
              </div>
            </div>

            {/* Interactive Floating Badge 2 (Bottom Left) */}
            <div className="absolute -bottom-6 -left-6 bg-slate-700/80 backdrop-blur-lg border border-white/10 rounded-2xl py-3 px-4 shadow-2xl flex items-center space-x-3 animate-float-badge z-20" style={{ animationDelay: '1.5s' }}>
              <div className="h-8.5 w-8.5 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/15">
                <Smartphone className="h-4.5 w-4.5" />
              </div>
              <div className="text-left">
                <div className="text-[9px] text-slate-400 font-black uppercase tracking-wider">Hardware Fluency</div>
                <div className="text-xs font-bold text-white">Samsung Knox & S Pen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
