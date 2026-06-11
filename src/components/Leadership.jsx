import { Award, ShieldCheck } from 'lucide-react';

export default function Leadership() {
  const teamData = {
    leadershipTeam: [
      {
        id: 'supathida',
        name: 'ดร. สุพธิดา พรหมพยัคฆ์',
        role: 'ผู้ก่อตั้ง และประธานเจ้าหน้าที่บริหาร (CEO)',
        subtitle: 'ผู้เชี่ยวชาญด้านการเปลี่ยนผ่านองค์กรสู่ดิจิทัลและกลยุทธ์ AI ระดับภูมิภาค',
        credentials: [
          'ปริญญาเอก (Ph.D.) สาขาเทคโนโลยีการศึกษา',
          'รางวัล Google Cloud Partner of the Year (ฝ่ายการศึกษา)',
          'ทูตเทคโนโลยี Gemini (Gemini Ambassador)'
        ],
        imageRef: '/images/team-supathida.png'
      },
      {
        id: 'puttarak',
        name: 'พุทธรักษ์ มั่นเมือง',
        role: 'ประธานเจ้าหน้าที่ฝ่ายเทคโนโลยี (CTO)',
        subtitle: 'ผู้เชี่ยวชาญด้านโครงสร้างพื้นฐานคลาวด์และสถาปัตยกรรมดิจิทัล',
        credentials: [
          'ประสบการณ์ทำงานด้านไอทีและคลาวด์กว่า 23 ปี',
          'ผู้ฝึกอบรมที่ได้รับการรับรอง Google for Education Certified Trainer',
          'ผู้เชี่ยวชาญการดูแลระบบ Professional Workspace Admin'
        ],
        imageRef: '/images/team-puttarak.png'
      }
    ]
  };

  return (
    <section id="leadership" className="py-24 bg-white relative overflow-hidden">
      {/* Background elegant gradient glows */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-slate-50 blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-blue-50/15 blur-[130px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-accent/5 border border-accent/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-accent uppercase font-sans">
            คณะผู้บริหาร
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            ผู้นำด้าน <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent font-extrabold">EdTech ระดับสากล</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mt-4"></div>
          <p className="text-slate-500 text-lg md:text-xl font-normal max-w-2xl mx-auto pt-4 leading-relaxed">
            นำโดยผู้บุกเบิกด้านการเปลี่ยนผ่านสู่ดิจิทัล ผู้เชี่ยวชาญการออกแบบหลักสูตร และสถาปนิกคลาวด์ระดับแนวหน้า
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {teamData.leadershipTeam.map((member) => (
            <div
              key={member.id}
              className="card-interactive bg-white border border-slate-100/80 rounded-[2rem] overflow-hidden flex flex-col md:flex-row group hover:border-slate-200/80 hover:shadow-2xl hover:shadow-slate-200/30 transition-all duration-300"
            >
              {/* Photo Area */}
              <div className="relative w-full md:w-5/12 min-h-[300px] md:min-h-full bg-slate-50 overflow-hidden shrink-0">
                <img
                  src={member.imageRef}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300"></div>
              </div>

              {/* Text Area */}
              <div className="p-8 flex flex-col justify-between text-left flex-grow font-sans">
                <div className="space-y-6">
                  {/* Role & Badge */}
                  <div className="space-y-1">
                    <span className="text-[10px] bg-secondary/5 border border-secondary/10 text-secondary font-black tracking-wider uppercase px-2.5 py-1 rounded-lg">
                      {member.id === 'supathida' ? 'Founder & CEO' : 'Co-Founder & CTO'}
                    </span>
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider pt-2">
                      {member.role}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">
                    {member.name}
                  </h3>

                  {/* Subtitle description */}
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed border-l-2 border-slate-200 pl-3">
                    {member.subtitle}
                  </p>

                  {/* Credentials / Badges */}
                  <div className="space-y-3 pt-2">
                    <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest flex items-center gap-1.5">
                      <Award className="h-4 w-4 text-accent" />
                      <span>คุณวุฒิและผลงานสำคัญ</span>
                    </div>
                    <ul className="space-y-2">
                      {member.credentials.map((cred, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2.5 text-xs text-slate-600 font-semibold bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl shadow-sm"
                        >
                          <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
