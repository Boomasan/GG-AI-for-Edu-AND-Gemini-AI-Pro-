import { Target, Lightbulb } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Premium Background Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-50/20 blur-[120px] -z-10"></div>
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] rounded-full bg-slate-100/25 blur-[130px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading & Flanking Images */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.4fr_1.2fr] gap-8 lg:gap-12 items-center mb-20">
          {/* Left Block: Seminar Poster */}
          <div className="order-2 lg:order-1 flex justify-center max-w-sm mx-auto lg:max-w-none">
            <div className="relative group overflow-hidden rounded-3xl border border-slate-200/60 shadow-lg shadow-slate-100/50 transition-all duration-500 hover:shadow-xl hover:border-slate-300/80 w-full bg-slate-50">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/20 pointer-events-none z-10"></div>
              <img 
                src="/images/philosophy-seminar-poster.jpg" 
                alt="Seminar Poster: Sustainable Organizational Growth" 
                className="w-full h-auto object-contain select-none hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Center Block: Section Heading Text */}
          <div className="order-1 lg:order-2 text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-secondary/5 border border-secondary/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-secondary uppercase font-sans">
              แนวคิดหลักขององค์กร
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-black text-slate-900 leading-tight">
              <span className="whitespace-nowrap">เทคโนโลยีจะไร้ความหมาย</span>
              <br />
              <span className="whitespace-nowrap">หากปราศจากการยอมรับใช้งานจริง</span>
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent font-extrabold whitespace-nowrap">
                (User Adoption)
              </span>
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mt-4"></div>
            <p className="text-slate-500 text-sm md:text-base font-normal max-w-xl mx-auto pt-2 leading-relaxed">
              <span className="inline-block whitespace-nowrap">การจัดหาฮาร์ดแวส์และซอฟต์แวร์ที่ล้ำสมัย</span>{' '}
              <span className="inline-block whitespace-nowrap">เป็นเพียงครึ่งหนึ่งของความสำเร็จเท่านั้น</span>
              <br className="hidden lg:inline" />
              <span className="inline-block whitespace-nowrap">การทรานส์ฟอร์มสู่ยุคดิจิทัลที่แท้จริง</span>{' '}
              <span className="inline-block whitespace-nowrap">เกิดขึ้นจากการปรับเปลี่ยนพฤติกรรม</span>{' '}
              <span className="inline-block whitespace-nowrap">และการออกแบบการเรียนรู้ที่มีประสิทธิภาพ</span>
            </p>
          </div>

          {/* Right Block: Stage Seminar Atmosphere */}
          <div className="order-3 lg:order-3 flex justify-center max-w-md mx-auto lg:max-w-none">
            <div className="relative group overflow-hidden rounded-3xl border border-slate-200/60 shadow-lg shadow-slate-100/50 transition-all duration-500 hover:shadow-xl hover:border-slate-300/80 w-full bg-slate-50">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/20 pointer-events-none z-10"></div>
              <img 
                src="/images/philosophy-seminar-stage.jpg" 
                alt="Seminar Stage Atmosphere: NIECT 2024" 
                className="w-full h-auto object-contain select-none hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Philosophy Core Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          {/* Left Block: Premium Showcase Image Container */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <div className="relative group overflow-hidden rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-100/50 transition-all duration-500 hover:shadow-2xl hover:border-slate-300/80 h-full bg-slate-50">
              {/* Decorative reflective glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/20 pointer-events-none z-10"></div>
              <img 
                src="/images/roi-challenge.png" 
                alt="ความท้าทายด้านผลตอบแทนจากการลงทุน (ROI) ของเทคโนโลยียุคใหม่" 
                className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Block: TPACK and SAMR Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* TPACK Card */}
            <div className="gradient-border-card p-8 md:p-10 flex flex-col justify-between shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 h-full text-left border border-slate-100/60">
              <div>
                {/* Icon Container */}
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-secondary/5 to-accent/2 flex items-center justify-center text-secondary border border-secondary/5 shadow-inner">
                  <Target className="h-6.5 w-6.5" />
                </div>
                {/* Title */}
                <h3 className="text-2xl font-black text-slate-900 mt-8">กรอบการทำงาน TPACK</h3>
                {/* Body */}
                <p className="text-slate-500 text-sm leading-relaxed mt-4 font-normal">
                  เราบูรณาการความรู้ด้าน<strong>เทคโนโลยี (Technological)</strong>, <strong>ศาสตร์การสอน (Pedagogical)</strong> และ<strong>เนื้อหาเฉพาะทาง (Content)</strong> เพื่อให้มั่นใจว่าเครื่องมือดิจิทัลจะถูกนำไปใช้สร้างการเรียนรู้และการทำงานที่เกิดผลลัพธ์จริง ไม่ใช่เพียงแค่ภาพลักษณ์ภายนอก
                </p>
              </div>
              {/* Pills */}
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="bg-slate-50 border border-slate-100 text-slate-600 px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-sm">เทคโนโลยี</span>
                <span className="bg-slate-50 border border-slate-100 text-slate-600 px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-sm">ศาสตร์การสอน</span>
                <span className="bg-slate-50 border border-slate-100 text-slate-600 px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-sm">เนื้อหา</span>
              </div>
            </div>

            {/* SAMR Card */}
            <div className="gradient-border-card p-8 md:p-10 flex flex-col justify-between shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 h-full text-left border border-slate-100/60">
              <div>
                {/* Icon Container */}
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-amber-500/5 to-amber-300/2 flex items-center justify-center text-amber-500 border border-amber-500/5 shadow-inner">
                  <Lightbulb className="h-6.5 w-6.5" />
                </div>
                {/* Title */}
                <h3 className="text-2xl font-black text-slate-900 mt-8">แบบจำลอง SAMR</h3>
                {/* Body */}
                <p className="text-slate-500 text-sm leading-relaxed mt-4 font-normal">
                  เรายกระดับการยอมรับใช้งานอุปกรณ์ทีละขั้น: ตั้งแต่ขั้นพื้นฐานอย่างการ<strong>แทนที่ (Substitution)</strong> และการ<strong>เพิ่มพูน (Augmentation)</strong> ไปจนถึงขั้นพัฒนาอย่างการ<strong>ปรับแต่งกระบวนการ (Modification)</strong> และการ<strong>เปลี่ยนนิยามใหม่ (Redefinition)</strong> ของการทำงานอย่างสมบูรณ์
                </p>
              </div>
              {/* Pills */}
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="bg-slate-50 border border-slate-100 text-slate-600 px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-sm">การแทนที่</span>
                <span className="bg-slate-50 border border-slate-100 text-slate-600 px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-sm">การเพิ่มพูน</span>
                <span className="bg-slate-50 border border-slate-100 text-slate-600 px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-sm">การเปลี่ยนนิยามใหม่</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Philosophy Stats / Capsule Band */}
        <div className="bg-slate-700 rounded-[2.5rem] p-8 md:p-14 text-white grid grid-cols-1 md:grid-cols-3 gap-10 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          {/* Card 1 */}
          <div className="text-center md:text-left space-y-3 relative z-10 flex flex-col justify-start">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs text-accent font-black uppercase tracking-wider">การออกแบบศาสตร์การสอน</span>
            </div>
            <h4 className="text-lg font-bold text-white tracking-wide">หลักสูตรและการเรียนรู้เฉพาะทาง</h4>
            <p className="text-xs text-slate-400 font-normal leading-relaxed">กระบวนการทำงานและแผนการสอนที่ออกแบบขึ้นเป็นพิเศษสำหรับการใช้งานร่วมกับชุดเครื่องมือ Samsung และ Google</p>
          </div>
          
          {/* Card 2 */}
          <div className="text-center md:text-left space-y-3 border-t md:border-t-0 md:border-x border-white/10 pt-8 md:pt-0 md:px-8 relative z-10 flex flex-col justify-start">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs text-accent font-black uppercase tracking-wider">การปรับพฤติกรรมสู่ดิจิทัล</span>
            </div>
            <h4 className="text-lg font-bold text-white tracking-wide">การอบรมด้วยความเข้าใจและใส่ใจ</h4>
            <p className="text-xs text-slate-400 font-normal leading-relaxed">ก้าวข้ามอุปสรรคทางจิตวิทยาและการต่อต้าน เพื่อกระตุ้นการยอมรับเทคโนโลยีในกลุ่มบุคลากรขนาดใหญ่</p>
          </div>

          {/* Card 3 */}
          <div className="text-center md:text-left space-y-3 border-t md:border-t-0 border-white/10 pt-8 md:pt-0 md:pl-8 relative z-10 flex flex-col justify-start">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs text-emerald-400 font-black uppercase tracking-wider">เป้าหมายทางธุรกิจ</span>
            </div>
            <h4 className="text-lg font-bold text-white tracking-wide">ความคุ้มค่าด้านงบประมาณไอที</h4>
            <p className="text-xs text-slate-400 font-normal leading-relaxed">เปลี่ยนงบประมาณจัดซื้อเทคโนโลยีขนาดใหญ่ให้เป็นประสิทธิภาพในการดำเนินงานที่วัดผลได้อย่างชัดเจน</p>
          </div>
        </div>
      </div>
    </section>
  );
}
