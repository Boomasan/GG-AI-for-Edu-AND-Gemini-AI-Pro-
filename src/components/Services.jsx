import { Layers, Cpu, Compass, CheckCircle } from 'lucide-react';

export default function Services() {
  const serviceItems = [
    {
      title: 'การบูรณาการระบบนิเวศเทคโนโลยีแบบครบวงจร',
      description: 'เราจัดการและควบคุมการเปิดใช้งานอุปกรณ์รวมถึงบริหารจัดการระบบตั้งแต่ต้นจนจบ เปลี่ยนฮาร์ดแวร์เปล่าให้เป็นพื้นที่ทำงานดิจิทัลที่พร้อมใช้งานได้ทันที',
      bullets: [
        'การจัดเตรียมระบบและเปิดใช้งานอุปกรณ์ Samsung Galaxy AI',
        'การตั้งค่า Knox Manage เพื่อความปลอดภัยและการควบคุมโปรไฟล์การใช้งานอย่างเป็นระบบ',
        'การพัฒนาทักษะความชำนาญในการใช้ S Pen และกระบวนการออกแบบการเรียนรู้',
        'การจัดทำโครงสร้างพื้นฐานระบบ Google Cloud และ Google Workspace for Education'
      ],
      icon: Layers,
      accentColor: 'text-blue-600 bg-blue-500/5 border-blue-500/10 shadow-blue-500/5',
      badge: 'บูรณาการ Samsung & Google'
    },
    {
      title: 'การบริหารจัดการและเพิ่มผลตอบแทนจากงบประมาณไอที',
      description: 'เราวัดผล ปรับปรุง และเพิ่มประสิทธิภาพการใช้งานฮาร์ดแวร์ เพื่อให้มั่นใจว่าลิขสิทธิ์ซอฟต์แวร์และตัวอุปกรณ์สามารถขับเคลื่อนประสิทธิภาพการทำงานได้จริง',
      bullets: [
        'เชื่อมต่อช่องว่างระหว่างขีดความสามารถของอุปกรณ์กับการนำไปใช้งานจริงของผู้ใช้',
        'นำพาบุคลากรเปลี่ยนผ่านจากการใช้เครื่องมือขั้นพื้นฐานสู่ประสิทธิภาพการทำงานขั้นสูง',
        'การติดตามและวัดผลอัตราการยอมรับใช้งานอุปกรณ์และซอฟต์แวร์ระบบคลาวด์อย่างมีระบบ',
        'การจัดทำขั้นตอนการปฏิบัติงานมาตรฐาน (SOPs) เฉพาะตัวสำหรับกระบวนการทำงานแบบดิจิทัล'
      ],
      icon: Cpu,
      accentColor: 'text-amber-500 bg-amber-500/5 border-amber-500/10 shadow-amber-500/5',
      badge: 'ผลตอบแทนจากการดำเนินงาน'
    },
    {
      title: 'การพัฒนาบุคลากรและการยกระดับทักษะ (Upskilling)',
      description: 'เราออกแบบโครงการยกระดับทักษะและการปรับเปลี่ยนพฤติกรรม มุ่งเป้าทั้งกลุ่มผู้สอนและทีมงานในองค์กรเพื่อรองรับกระบวนการทำงานยุคใหม่',
      bullets: [
        'การจัดเวิร์กชอปภายในองค์กรเพื่อบูรณาการการใช้ AI และเครื่องมือช่วยเหลือใน Workspace',
        'หลักสูตรการรับรองศาสตร์การสอนดิจิทัลสำหรับผู้บริหารสถานศึกษาและครูผู้สอน',
        'หลักสูตรการเรียนรู้ย่อย (Micro-learning) เพื่อลดแรงต้านและสร้างทัศนคติเชิงบวกต่อเทคโนโลยี',
        'ค่ายเตรียมความพร้อมสอบรับใบประกาศนียบัตร Google Certified Educator และ Trainer'
      ],
      icon: Compass,
      accentColor: 'text-emerald-500 bg-emerald-500/5 border-emerald-500/10 shadow-emerald-500/5',
      badge: 'การอัปสกิลและการอบรม'
    }
  ];

  return (
    <section id="services" className="pt-24 pb-12 bg-slate-50 relative overflow-hidden">
      {/* Premium Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-blue-100/20 blur-[130px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-200/20 rounded-full blur-[140px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-secondary/5 border border-secondary/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-secondary uppercase font-sans">
            ความเชี่ยวชาญของเรา
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            โซลูชันครบวงจรเพื่อ <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent font-extrabold">ระบบนิเวศและการยอมรับใช้งานดิจิทัล</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mt-4"></div>
          <p className="text-slate-500 text-lg md:text-xl font-normal max-w-2xl mx-auto pt-4 leading-relaxed">
            เปลี่ยนการจัดซื้อไอทีขององค์กรและสภาพแวดล้อมสถาบันการศึกษา ให้เป็นพื้นที่ทำงานยุคดิจิทัลที่มีประสิทธิภาพสูงและผู้ใช้มีความเชี่ยวชาญอย่างแท้จริง
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {serviceItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="card-interactive p-8 bg-white border border-slate-100 flex flex-col justify-between group hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/30 transition-all duration-300"
              >
                <div>
                  {/* Badge & Icon Container */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-110 ${item.accentColor}`}>
                      <IconComponent className="h-6.5 w-6.5" />
                    </div>
                    <span className="text-[10px] bg-slate-100 text-slate-500 font-extrabold tracking-wider uppercase px-3 py-1.5 rounded-xl border border-slate-200/50">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-secondary transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullets list */}
                  <ul className="space-y-3.5">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-slate-600 text-sm">
                        <div className="h-5 w-5 rounded-full bg-secondary/5 flex items-center justify-center shrink-0 mt-0.5 border border-secondary/5">
                          <CheckCircle className="h-3.5 w-3.5 text-secondary" />
                        </div>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer interactive element */}
                <div className="pt-6 mt-8 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-secondary transition-colors uppercase tracking-wider">
                  <span>เรียนรู้เพิ่มเติม</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium Product Showcase Pedestal */}
        <div className="flex flex-col justify-center items-center mt-12 relative w-full select-none">
          {/* Neon pedestal glow ring beneath the tablet */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 md:w-3/5 h-6 bg-gradient-to-r from-secondary/10 via-accent/15 to-secondary/10 rounded-full blur-[20px] pointer-events-none"></div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/5 md:w-2/5 h-2 bg-gradient-to-r from-secondary/20 via-accent/25 to-secondary/20 rounded-full blur-[4px] pointer-events-none"></div>
          
          <div className="flex flex-row justify-center items-center gap-6 md:gap-10 relative z-10 w-full px-4">
            <img 
              src="/images/tabs10fe-blue.png" 
              alt="Samsung Tab S10 FE Blue" 
              className="max-h-40 md:max-h-[190px] w-auto object-contain scale-x-[-1] hover:scale-x-[-1.05] hover:scale-y-[1.05] hover:-translate-y-2 transition-all duration-500 drop-shadow-[0_15px_30px_rgba(37,99,235,0.12)]"
            />
            <img 
              src="/images/samsung-tab-s10-fe-5g.png" 
              alt="Samsung Tab S10 FE 5G Showcase" 
              className="max-h-40 md:max-h-[190px] w-auto object-contain hover:scale-105 hover:-translate-y-2 transition-all duration-500 drop-shadow-[0_15px_30px_rgba(37,99,235,0.12)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
