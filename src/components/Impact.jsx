import { useState } from 'react';
import { Users, Building2, TrendingUp, BookOpen, Cloud, Brain, Check } from 'lucide-react';

const getLogoClass = (name) => {
  switch (name) {
    case 'C.P.GROUP':
      return 'logo-scale-cp';
    case 'CHIA TAI':
      return 'logo-scale-chiatai';
    case 'EGAT (การไฟฟ้าฝ่ายผลิต)':
      return 'logo-scale-egat';
    default:
      return 'group-hover:scale-105';
  }
};

export default function Impact() {
  const [activeTab, setActiveTab] = useState('enterprise');

  const ourServices = [
    {
      num: '01',
      title: 'Research & Strategic Advisory',
      desc: 'ที่ปรึกษาด้าน Digital and Cultural Transformation และ การใช้งานเทคโนโลยี เพื่อการเพิ่ม Adoption',
      icon: TrendingUp
    },
    {
      num: '02',
      title: 'Digital Talent Development',
      desc: 'การออกแบบหลักสูตรและการอบรมพัฒนาบุคลากร',
      icon: Users
    },
    {
      num: '03',
      title: 'Authorized Partner',
      desc: 'เป็น Authorized Technology Partner',
      icon: BookOpen
    },
    {
      num: '04',
      title: 'Digital Consultant',
      desc: 'การจัด Event และ Roadshow',
      icon: Cloud
    },
    {
      num: '05',
      title: 'Project Management & PMO Services',
      desc: 'การทำ Proof of Concept POC การใช้เทคโนโลยี และ การบริหารโครงการ',
      icon: Brain
    }
  ];

  const clientSegments = {
    enterprise: [
      { name: 'C.P.GROUP', logo: '/images/digital_transformation/cp_group.png' },
      { name: 'CHIA TAI', logo: '/images/digital_transformation/chia_tai.png' },
      { name: 'EMBASSY (USA)', logo: '/images/digital_transformation/embassy_usa.png' },
      { name: 'IRPC', logo: '/images/digital_transformation/irpc.png' },
      { name: 'ptt LNG', logo: '/images/digital_transformation/ptt_lng.png' },
      { name: 'ptt GSP', logo: '/images/digital_transformation/ptt_gsp.png' },
      { name: 'PEA (การไฟฟ้าส่วนภูมิภาค)', logo: '/images/digital_transformation/pea.png' },
      { name: 'EGAT (การไฟฟ้าฝ่ายผลิต)', logo: '/images/digital_transformation/egat.png' },
      { name: 'ERC (สำนักงาน กกพ.)', logo: '/images/digital_transformation/erc.png' },
      { name: 'BJC (เบอร์ลี่ ยุคเกอร์)', logo: '/images/digital_transformation/bjc.png' },
      { name: 'Big C', logo: '/images/digital_transformation/big_c.png' },
      { name: 'AMARIN GROUP', logo: '/images/digital_transformation/amarin_group.png' },
      { name: 'SKY', logo: '/images/digital_transformation/sky.png' },
      { name: 'แว่นท็อปเจริญ (TOP CHAROEN)', logo: '/images/digital_transformation/top_charoen.png' }
    ],
    education: [
      { name: 'กระทรวงศึกษาธิการ', logo: '/images/education/moe.png' },
      { name: 'กรุงเทพมหานคร', logo: '/images/education/bma.png' },
      { name: 'กรมการปกครองส่วนท้องถิ่น', logo: '/images/education/dla.png' },
      { name: 'กระทรวงสาธารณสุข', logo: '/images/education/moph.png' },
      { name: 'สำนักงานคณะกรรมการการอาชีวศึกษา', logo: '/images/education/vec.png' },
      { name: 'สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพฐ)', logo: '/images/education/obec.png' },
      { name: 'สำนักการศึกษา กรุงเทพมหานคร', logo: '/images/education/bma_edu.png' },
      { name: 'กรมส่งเสริมการปกครองท้องถิ่น', logo: '/images/education/dla_promote.png' },
      { name: 'สำนักงานเลขาธิการแพทยสภา', logo: '/images/education/tmc.png' },
      { name: 'วิทยาลัยแพทย์ฉุกเฉินแห่งประเทศไทย', logo: '/images/education/tcep.png' }
    ],
    sme: [
      { name: 'RJ', logo: '/images/sme/RJ.png' },
      { name: 'ScoutOut', logo: '/images/sme/ScoutOut.png' },
      { name: 'โรงพยาบาลสระบุรี', logo: '/images/sme/saraburi_hospital.png' },
      { name: 'ตลาดบางใหญ่', logo: '/images/sme/talad_bang_yai.png' },
      { name: 'OpenDurian', logo: '/images/sme/OpenDurian.png' },
      { name: 'Bon', logo: '/images/sme/BON.png' }
    ]
  };

  const educationStats = [
    {
      title: 'สนับสนุนหน่วยงานการศึกษา',
      desc: 'ระดับกระทรวง ระดับอำเภอ และเข้าถึงโรงเรียนในสังกัดสำนักงานการศึกษาขั้นพื้นฐาน (สพฐ) และสำนักงานอาชีวศึกษา',
      accent: 'border-blue-100/50 text-blue-600/85 bg-blue-50/25'
    },
    {
      title: 'ให้บริการครบ 427 โรงเรียน',
      desc: 'ให้บริการครอบคลุมโซลูชั่น EdTech ทั้งหมดในสังกัดกรุงเทพมหานคร (กทม.)',
      accent: 'border-emerald-100/50 text-emerald-600/85 bg-emerald-50/25'
    },
    {
      title: 'มีส่วนร่วมมากกว่า 80%',
      desc: 'ครอบคลุมโรงเรียนกว่า 1,700 แห่งในสังกัดกรมส่งเสริมการปกครองท้องถิ่น',
      accent: 'border-amber-100/50 text-amber-600/85 bg-amber-50/25'
    },
    {
      title: 'เครือข่ายวิทยาลัยแพทย์ 25 จังหวัด',
      desc: 'สนับสนุนการเรียนรู้ของวิทยาลัยพยาบาลและวิทยาลัยแพทย์ในสังกัดกระทรวงสาธารณสุข',
      accent: 'border-rose-100/50 text-rose-600/85 bg-rose-50/25'
    }
  ];

  const smeCompanies = [
    'บริษัท ทรานส์ฟอร์เมชั่นแนล จำกัด',
    'บริษัท รังนกการค้า จำกัด',
    'บริษัท ฮูปส์ จำกัด',
    'บริษัท สเกาท์เอาท์ จำกัด',
    'บริษัท ตลาดบางใหญ่ จำกัด',
    'โรงพยาบาลสระบุรี',
    'คณะแพทยศาสตร์วชิรพยาบาล',
    'บริษัท โอเพ่นดูเรียน จำกัด',
    'บริษัท วิคเตอร์ บิลเลตส์ จำกัด'
  ];

  return (
    <section id="impact" className="pt-16 pb-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] rounded-full bg-blue-50/30 blur-[130px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-secondary/5 border border-secondary/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-secondary uppercase font-sans">
            บริการของเรา
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            การบริการ <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent font-extrabold">และขอบข่ายความช่วยเหลือ</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mt-4"></div>
          <p className="text-slate-500 text-lg md:text-xl font-normal max-w-2xl mx-auto pt-4 leading-relaxed">
            เรามุ่งมั่นให้บริการและบูรณาการเทคโนโลยีเพื่อเพิ่มประสิทธิภาพและขับเคลื่อนความสำเร็จขององค์กรคุณ
          </p>
        </div>

        {/* Dynamic Services Grid (5 columns) with Premium Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {ourServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl border border-slate-100/80 shadow-sm flex flex-col justify-between items-center text-center relative overflow-hidden group hover:border-slate-200/80 hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1.5 transition-all duration-300 h-full"
              >
                <div className="space-y-6 w-full flex flex-col items-center">
                  {/* Number Badge */}
                  <div className="h-10 w-10 rounded-full bg-secondary/5 border border-secondary/10 text-secondary text-sm font-extrabold flex items-center justify-center font-heading">
                    {service.num}
                  </div>
                  
                  {/* Icon */}
                  <div className="h-16 w-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white group-hover:shadow-lg group-hover:shadow-secondary/20">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-slate-900 leading-snug min-h-[48px] flex items-center justify-center">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal pt-1 group-hover:text-slate-500 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tabbed Client Grid (TRUSTED BY LEADING ORGANIZATIONS) */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100/40 p-8 md:p-14 space-y-12 relative">
          
          {/* Section Subheader */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-4">
            <div className="inline-flex items-center space-x-2 bg-secondary/5 border border-secondary/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-secondary uppercase font-sans">
              ความไว้วางใจ
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent font-extrabold">Leading Organizations</span>
            </h3>
            <div className="h-1.5 w-20 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mt-4"></div>
            <p className="text-slate-500 text-sm md:text-base font-normal max-w-2xl mx-auto pt-4 leading-relaxed">
              ได้รับความไว้วางใจจากสถาบันการศึกษาและองค์กรชั้นนำของประเทศ
            </p>
          </div>

          {/* Premium Sliding Pill Tab Navigation */}
          <div className="bg-slate-100 p-1.5 rounded-[20px] max-w-3xl mx-auto flex flex-col sm:flex-row gap-1 shadow-inner border border-slate-200/40">
            <button
              onClick={() => setActiveTab('enterprise')}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold uppercase tracking-wide transition-all duration-300 rounded-[14px] cursor-pointer ${
                activeTab === 'enterprise'
                  ? 'bg-slate-700 text-white shadow-md font-extrabold'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              การเปลี่ยนแปลงทางดิจิทัล
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold uppercase tracking-wide transition-all duration-300 rounded-[14px] cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-slate-700 text-white shadow-md font-extrabold'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              โรงเรียนและองค์การศึกษา
            </button>
            <button
              onClick={() => setActiveTab('sme')}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold uppercase tracking-wide transition-all duration-300 rounded-[14px] cursor-pointer ${
                activeTab === 'sme'
                  ? 'bg-slate-700 text-white shadow-md font-extrabold'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              ลูกค้าวิสาหกิจขนาดกลาง/ย่อม
            </button>
          </div>

          {/* Tab Content Panel */}
          <div className="pt-4">
            {activeTab === 'enterprise' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 animate-fade-in-up">
                {clientSegments.enterprise.map((client, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white border border-slate-100 hover:border-slate-300/80 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-40"
                  >
                    <div className="h-20 w-full flex items-center justify-center p-2.5 overflow-hidden shrink-0">
                      {client.logo ? (
                        <img 
                          src={client.logo} 
                          alt={client.name} 
                          className={`max-h-full max-w-full object-contain transition-all duration-300 ${getLogoClass(client.name)}`}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className={`${client.logo ? 'hidden' : 'flex'} h-full w-full items-center justify-center bg-blue-50 text-blue-600 font-extrabold text-sm rounded-lg`}>
                        {client.name.substring(0, 2)}
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-800 mt-4 leading-tight block truncate max-w-full group-hover:text-secondary transition-colors">
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-12 animate-fade-in-up">
                {/* Logo grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {clientSegments.education.map((client, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-white border border-slate-100 hover:border-slate-300/80 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-40"
                    >
                      <div className="h-20 w-full flex items-center justify-center p-2.5 overflow-hidden shrink-0">
                        {client.logo ? (
                          <img 
                            src={client.logo} 
                            alt={client.name} 
                            className={`max-h-full max-w-full object-contain transition-all duration-300 ${getLogoClass(client.name)}`}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className={`${client.logo ? 'hidden' : 'flex'} h-full w-full items-center justify-center bg-blue-50 text-blue-600 font-extrabold text-sm rounded-lg`}>
                          {client.name.substring(0, 2)}
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-800 mt-4 leading-tight block truncate max-w-full group-hover:text-secondary transition-colors">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Statistics description cards at the bottom */}
                <div className="border-t border-slate-100 pt-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {educationStats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 border border-slate-100/60 rounded-2xl p-6 text-left shadow-sm hover:shadow-md hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <span className={`inline-block text-xs font-black px-3 py-1.5 rounded-lg border ${stat.accent}`}>
                            {stat.title}
                          </span>
                          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans font-medium">
                            {stat.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sme' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch animate-fade-in-up">
                {/* Left Side: Bullet List */}
                <div className="lg:col-span-5 bg-slate-50 border border-slate-100/60 rounded-[2rem] p-8 text-left shadow-sm flex flex-col justify-center">
                  <h4 className="text-lg font-black text-slate-900 mb-6 flex items-center space-x-2.5">
                    <Building2 className="h-5.5 w-5.5 text-secondary" />
                    <span>พันธมิตรวิสาหกิจและองค์กรธุรกิจ</span>
                  </h4>
                  <ul className="space-y-4">
                    {smeCompanies.map((company, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-sm text-slate-600 font-medium">
                        <div className="h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/10 flex items-center justify-center shrink-0">
                          <Check className="h-3 w-3 text-emerald-600" />
                        </div>
                        <span>{company}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side: Logo Grid */}
                <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {clientSegments.sme.map((client, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-white border border-slate-100 hover:border-slate-300/80 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-40"
                    >
                      <div className="h-20 w-full flex items-center justify-center p-2.5 overflow-hidden shrink-0">
                        {client.logo ? (
                          <img 
                            src={client.logo} 
                            alt={client.name} 
                            className={`max-h-full max-w-full object-contain transition-all duration-300 ${getLogoClass(client.name)}`}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className={`${client.logo ? 'hidden' : 'flex'} h-full w-full items-center justify-center bg-blue-50 text-blue-600 font-extrabold text-sm rounded-lg`}>
                          {client.name.substring(0, 2)}
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-800 mt-4 leading-tight block truncate max-w-full group-hover:text-secondary transition-colors">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
