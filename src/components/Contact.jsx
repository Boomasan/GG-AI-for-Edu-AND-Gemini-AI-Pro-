import { useState } from 'react';
import { Mail, Phone, MapPin, FileText, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    inquiryType: 'integration',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'กรุณาระบุชื่อ-นามสกุล';
    if (!formData.email.trim()) {
      newErrors.email = 'กรุณาระบุอีเมล';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'โปรดระบุที่อยู่อีเมลที่ถูกต้อง';
    }
    if (!formData.organization.trim()) newErrors.organization = 'กรุณาระบุชื่อองค์กร / บริษัท';
    if (!formData.role.trim()) newErrors.role = 'กรุณาระบุตำแหน่งงานของคุณ';
    if (!formData.message.trim()) newErrors.message = 'กรุณาระบุรายละเอียดที่ต้องการติดต่อ';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (validateForm()) {
      // Simulate form submission
      setSubmitStatus('success');
      // Clear form
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        inquiryType: 'integration',
        message: ''
      });
    } else {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative radial gradients */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-slate-50 blur-[130px] -z-10"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-blue-50/10 blur-[140px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-accent/5 border border-accent/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-accent uppercase font-sans">
            ติดต่อเรา
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            เริ่มต้นการ <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent font-extrabold">ทรานส์ฟอร์มองค์กรของคุณ</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mt-4"></div>
          <p className="text-slate-500 text-lg md:text-xl font-normal max-w-2xl mx-auto pt-4 leading-relaxed">
            มีโครงการหรือระบบที่ต้องการพัฒนาอยู่ใช่ไหม? ติดต่อเราวันนี้เพื่อขอนัดหมายรับคำปรึกษาจากผู้เชี่ยวชาญด้านกลยุทธ์การยอมรับเทคโนโลยีของเรา
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Contact Details (Sleek Dark Slate Container) */}
          <div className="lg:col-span-5 bg-primary text-white rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden border border-white/5">
            {/* Background glowing design elements */}
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-accent/2 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="space-y-10 relative z-10 text-left">
              <div>
                <h3 className="text-2xl font-black text-white mb-2 font-heading tracking-wide">สำนักงานใหญ่</h3>
                <p className="text-sm text-slate-400 font-semibold">บริษัท สุภา โซลูชั่นส์ จำกัด</p>
              </div>

              <div className="space-y-7">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 shadow-inner">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1 tracking-wide">ที่อยู่</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      6/2 ซอยหมู่บ้านบ้านบุญส่ง (วิภาวดีรังสิต 46)<br />
                      แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10900
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 shadow-inner">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1 tracking-wide">อีเมล</h4>
                    <a href="mailto:supa@scurvethai.com" className="text-xs text-slate-400 hover:text-white hover:underline transition-all">
                      supa@scurvethai.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 shadow-inner">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1 tracking-wide">เบอร์โทรศัพท์</h4>
                    <a href="tel:0835655965" className="text-xs text-slate-400 hover:text-white hover:underline transition-all">
                      083 565 5965
                    </a>
                  </div>
                </div>

                {/* Tax ID */}
                <div className="flex items-start space-x-4">
                  <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 shadow-inner">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1 tracking-wide">เลขประจำตัวผู้เสียภาษี</h4>
                    <p className="text-xs text-slate-400">
                      0105562056380
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Structured disclaimer */}
            <div className="pt-8 mt-10 border-t border-white/10 text-[11px] text-slate-500 relative z-10 text-left font-sans font-medium leading-relaxed">
              เวลาทำการ: วันจันทร์ – วันศุกร์ เวลา 9:00 น. – 18:00 น. (เวลาประเทศไทย) <br />
              โดยทั่วไปทีมงานของเราจะติดต่อกลับหาคุณภายใน 24 ชั่วโมงทำการ
            </div>
          </div>

          {/* Right Column: Interactive B2B Form Panel */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/50 rounded-[2.5rem] p-8 md:p-12 shadow-sm text-left">
            <h3 className="text-2xl font-black text-slate-900 mb-8 font-heading tracking-wide">ส่งข้อความติดต่อสอบถาม</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form alerts */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-3 bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl text-sm animate-fade-in-up">
                  <CheckCircle2 className="h-5.5 w-5.5 text-emerald-500 shrink-0" />
                  <span className="font-semibold">ส่งข้อมูลการติดต่อสำเร็จเรียบร้อย! ทีมงานของเราจะติดต่อกลับหาคุณโดยเร็วที่สุด</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-3 bg-rose-50 border border-rose-200 text-rose-800 p-4 rounded-2xl text-sm animate-fade-in-up">
                  <AlertCircle className="h-5.5 w-5.5 text-rose-500 shrink-0" />
                  <span className="font-semibold">โปรดแก้ไขข้อผิดพลาดในช่องป้อนข้อมูลด้านล่างให้ถูกต้อง</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-black text-slate-700 uppercase tracking-wider block font-sans">
                    ชื่อ-นามสกุล
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4.5 py-3.5 bg-white border rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${
                      errors.name ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-secondary'
                    }`}
                    placeholder="สมชาย ใจดี"
                  />
                  {errors.name && <span className="text-[11px] text-rose-500 font-semibold block">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-black text-slate-700 uppercase tracking-wider block font-sans">
                    ที่อยู่อีเมล
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4.5 py-3.5 bg-white border rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${
                      errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-secondary'
                    }`}
                    placeholder="somchai@organization.com"
                  />
                  {errors.email && <span className="text-[11px] text-rose-500 font-semibold block">{errors.email}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Organization */}
                <div className="space-y-2">
                  <label htmlFor="organization" className="text-xs font-black text-slate-700 uppercase tracking-wider block font-sans">
                    หน่วยงาน / บริษัท
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className={`w-full px-4.5 py-3.5 bg-white border rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${
                      errors.organization ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-secondary'
                    }`}
                    placeholder="บริษัท สุภา โซลูชั่นส์ จำกัด"
                  />
                  {errors.organization && <span className="text-[11px] text-rose-500 font-semibold block">{errors.organization}</span>}
                </div>

                {/* Role */}
                <div className="space-y-2">
                  <label htmlFor="role" className="text-xs font-black text-slate-700 uppercase tracking-wider block font-sans">
                    ตำแหน่งงานของคุณ
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className={`w-full px-4.5 py-3.5 bg-white border rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${
                      errors.role ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-secondary'
                    }`}
                    placeholder="เช่น ผู้อำนวยการฝ่ายไอที, ครูผู้สอน, ผู้บริหารสถานศึกษา"
                  />
                  {errors.role && <span className="text-[11px] text-rose-500 font-semibold block">{errors.role}</span>}
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="space-y-2">
                <label htmlFor="inquiryType" className="text-xs font-black text-slate-700 uppercase tracking-wider block font-sans">
                  ประเภทการติดต่อสอบถาม
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4.5 py-3.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all cursor-pointer font-sans"
                >
                  <option value="integration">การบูรณาการระบบนิเวศเทคโนโลยีแบบครบวงจร (Turnkey Ecosystem Integration)</option>
                  <option value="roi">การเพิ่มประสิทธิภาพและวัดผล ROI ด้านเทคโนโลยี (Technology ROI Optimization)</option>
                  <option value="upskilling">การพัฒนาบุคลากรและการยกระดับทักษะ (Professional Development / Upskilling)</option>
                  <option value="procurement">การให้คำปรึกษาด้านฮาร์ดแวร์และระบบคลาวด์ (Hardware & Cloud Consultation)</option>
                  <option value="other">การติดต่อสอบถามเรื่องอื่นๆ (Other Inquiry)</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-black text-slate-700 uppercase tracking-wider block font-sans">
                  รายละเอียดความต้องการหรือโครงการ
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className={`w-full px-4.5 py-3.5 bg-white border rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${
                    errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-secondary'
                  }`}
                  placeholder="เราจะสามารถช่วยสนับสนุนการทรานส์ฟอร์มองค์กรของคุณได้อย่างไรบ้าง?"
                ></textarea>
                {errors.message && <span className="text-[11px] text-rose-500 font-semibold block">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-interactive w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary-hover hover:to-accent-hover text-white py-4 rounded-xl text-sm font-bold tracking-wider uppercase shadow-lg shadow-secondary/15 flex items-center justify-center space-x-2 transition-all mt-4 cursor-pointer"
              >
                <span>ส่งข้อมูลติดต่อ</span>
                <Send className="h-4.5 w-4.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
