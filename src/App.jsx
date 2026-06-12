import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  FileText, 
  Mail, 
  Video, 
  Presentation, 
  Table, 
  BookOpen, 
  ShieldCheck, 
  Lock, 
  Menu, 
  X, 
  ChevronRight, 
  Check, 
  School, 
  User, 
  Phone,
  Briefcase,
  Search,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('educators');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Interactive Prompt simulator state
  const [promptInput, setPromptInput] = useState('');
  const [simulatedOutput, setSimulatedOutput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    institution: '',
    email: '',
    phone: '',
    role: ''
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preset data for Roles / Tabs
  const roleData = {
    educators: {
      title: 'สำหรับการสอน (Educators)',
      desc: 'วางแผนบทเรียนได้เร็วขึ้น สร้างแบบประเมิน สื่อฝึกหัด และปรับเนื้อหาให้ตรงกับความสนใจของผู้เรียน',
      icon: School,
      color: 'border-google-blue',
      bgColor: 'bg-blue-50/50',
      textColor: 'text-google-blue',
      prompts: [
        {
          label: 'สร้างแผนการสอนระบบสุริยะ ม.1',
          prompt: 'สร้างแผนการสอนวิชาวิทยาศาสตร์เรื่อง "ระบบสุริยะ" สำหรับนักเรียน ม.1 ความยาว 50 นาที โดยมีกิจกรรมที่เน้นการเรียนรู้แบบ Active Learning และแบบประเมินหลังเรียน',
          output: `📚 **แผนการจัดการเรียนรู้: ระบบสุริยะ (ม.1)**\n⏱️ **เวลา:** 50 นาที | **รูปแบบ:** Active Learning\n\n🔹 **ช่วงนำเข้าสู่บทเรียน (10 นาที)**\n- ครูใช้คำถามท้าทาย: "ถ้าน้ำหนักตัวเราบนโลกเท่ากับ 50 กก. นักเรียนคิดว่าจะหนักเท่าไหร่บนดาวพฤหัสบดี?"\n- เปิดวิดีโอ 3D ขนาดสั้นจำลองสเกลของดาวเคราะห์แต่ละดวง\n\n🔹 **กิจกรรมหลัก (30 นาที) - ท่องอวกาศจำลอง**\n- แบ่งกลุ่มนักเรียนกลุ่มละ 4 คน แจกการ์ดข้อมูลดาวเคราะห์คนละดวง\n- แต่ละกลุ่มต้องร่วมกันวาดเส้นเวลาแผนภูมิแสดงระยะห่างและความสอดคล้องตามอัตราส่วน\n- นักเรียนใช้เครื่องมือค้นหาข้อมูลคุณสมบัติพิเศษ เช่น อุณหภูมิ และจำนวนดวงจันทร์\n\n🔹 **การวัดและประเมินผล (10 นาที)**\n- ทำแบบทดสอบสั้นแบบโต้ตอบผ่าน Google Form\n- มอบหมายภารกิจจับคู่ดาวเคราะห์ปริศนาจากคำใบ้`
        },
        {
          label: 'เขียนคำถามท้ายคาบภาษาไทย',
          prompt: 'เขียนแบบฝึกหัดคำถามท้ายคาบวิชาภาษาไทย เรื่อง "คำพ้องรูปคำพ้องเสียง" สำหรับนักเรียน ป.6 จำนวน 5 ข้อ พร้อมเฉลยคำตอบ',
          output: `📝 **แบบฝึกหัดท้ายคาบวิชาภาษาไทย (ป.6)**\nเรื่อง: คำพ้องรูปและคำพ้องเสียง\n\n1. คำว่า "เพลา" ในประโยคใดอ่านออกเสียงต่างจากพวก?\n   ก) พ่อซ่อมเพลารถยนต์ที่หัก\n   ข) พระอาทิตย์ตกดินในเพลาเย็น\n   ค) ล้อรถหมุนรอบเพลาเหล็ก\n   *เฉลย: ข) (อ่านว่า เพ-ลา แปลว่าเวลา ส่วนข้ออื่นอ่านว่า เพลา)*\n\n2. จงเลือกคำในวงเล็บเติมในช่องว่างให้ถูกต้อง: "คุณยายสวมเสื้อสี___เพื่อไปซ่อม___หน้าต่าง" (ซอม / ซ่อม / ส้ม)\n   *เฉลย: สีส้ม, ซ่อม*\n\n3. เขียนแต่งประโยคสั้นๆ โดยใช้คำพ้องเสียง "การ" และ "กาล"\n   *เฉลยแนวคำตอบ: ในช่วงกาลเวลาปัจจุบัน ทุกคนมีภาระการงานที่ต้องทำอย่างรับผิดชอบ*`
        }
      ]
    },
    students: {
      title: 'สำหรับการเรียนรู้ (Students)',
      desc: 'ทำความเข้าใจเชิงลึก รับความช่วยเหลือแบบออนดีมานด์ เตรียมตัวสอบ และรับคำแนะนำด้านการเขียน',
      icon: User,
      color: 'border-google-green',
      bgColor: 'bg-green-50/50',
      textColor: 'text-google-green',
      prompts: [
        {
          label: 'อธิบายสัมพัทธภาพอย่างง่าย',
          prompt: 'อธิบาย "ทฤษฎีสัมพัทธภาพทั่วไป" ของไอน์สไตน์ให้เด็กอายุ 10 ขวบเข้าใจ โดยการยกตัวอย่างเปรียบเทียบในชีวิตประจำวัน',
          output: `🌌 **ทฤษฎีสัมพัทธภาพฉบับเข้าใจง่ายที่สุด!**\n\nลองนึกภาพว่าหนูกำลังเอาผ้าห่มผืนใหญ่วางกางไว้ แล้วโยนลูกโบว์ลิ่งหนักๆ ลงไปตรงกลางผ้าห่ม... \n\nผ้าห่มมันจะยุบตัวลงไปเป็นหลุมใช่ไหมล่ะ? \n\nทีนี้ ถ้าเราโยนลูกแก้วเม็ดเล็กๆ ลงไปบนผ้าห่ม ลูกแก้วก็จะวิ่งกลิ้งวนรอบๆ ลูกโบว์ลิ่งที่อยู่ตรงกลางหลุมนั้น\n\nนั่นแหละคือสิ่งที่ ไอน์สไตน์ ค้นพบ! เขาบอกว่า อวกาศก็เหมือนผ้าห่มผืนใหญ่ ส่วนพวกดวงอาทิตย์หรือโลกก็คือลูกโบว์ลิ่งหนักๆ ที่ทำให้พื้นที่รอบๆ มันยุบลงไป ความโค้งที่เกิดขึ้นนี้แหละคือสิ่งที่ดึงดูดให้โลกเราหมุนรอบดวงอาทิตย์ ซึ่งเราเรียกว่า **"แรงโน้มถ่วง"** นั่นเองครับ!`
        },
        {
          label: 'วางแผนติวฟิสิกส์ใน 1 สัปดาห์',
          prompt: 'ช่วยวางแผนการอ่านหนังสือเตรียมสอบวิชาฟิสิกส์ เรื่อง "กลศาสตร์และแรง" สำหรับสอบปลายภาคใน 7 วัน เพื่อให้อ่านเข้าใจได้ครบทุกหัวข้อ',
          output: `🗓️ **ตารางแผนเตรียมสอบฟิสิกส์ 7 วัน (กลศาสตร์และแรง)**\n\n📅 **วันที 1-2: ปูพื้นฐานทฤษฎีแรงและกฎของนิวตัน**\n- สรุปกฎ 3 ข้อของนิวตัน เขียนสูตร F=ma, แรงกิริยา=แรงปฏิกิริยา ลงบนแฟลชการ์ด\n\n📅 **วันที 3-4: เจาะลึกเรื่องการเคลื่อนที่แนวตรงและแนวโค้ง**\n- ฝึกทำโจทย์คำนวณความเร็ว ความเร่ง และสูตรสุวร (s, u, v, a, t)\n\n📅 **วันที 5: งานและพลังงาน**\n- สรุปความแตกต่างระหว่างพลังงานศักย์ (Ep=mgh) และพลังงานจลน์ (Ek=1/2 mv²)\n\n📅 **วันที 6: ทำแนวข้อสอบย้อนหลัง**\n- จับเวลา 2 ชั่วโมง ทำโจทย์ย้อนหลังของสถาบัน เน้นวิเคราะห์จุดที่ทำผิดพลาด\n\n📅 **วันที 7: สรุปสูตรภาพรวมและพักผ่อน**\n- ทบทวนสมุดสรุปย่อ ห้ามอ่านหนังสือดึกเพื่อรักษาสมาธิสมองให้พร้อม`
        }
      ]
    },
    admins: {
      title: 'สำหรับการทำงาน (Administrators)',
      desc: 'สรุปเอกสารยาวๆ ร่างแบบเสนอของบประมาณ และลดความยุ่งยากในการทบทวนวรรณกรรมวิจัย',
      icon: Briefcase,
      color: 'border-[#A142F4]',
      bgColor: 'bg-purple-50/50',
      textColor: 'text-[#A142F4]',
      prompts: [
        {
          label: 'สรุปรายงานการประชุมสั้นๆ',
          prompt: 'สรุปประเด็นหลัก 3 ข้อ จากบันทึกการจัดซื้ออุปกรณ์ไอทีใหม่ของสถาบันมูลค่า 5 แสนบาท โดยระบุสิ่งที่ต้องปฏิบัติต่อไป',
          output: `📝 **สรุปผลการจัดซื้อระบบเทคโนโลยีและไอที**\n\n📌 **ประเด็นสำคัญจากการประชุม:**\n1. **อนุมัติงบประมาณ:** อนุมัติงบประมาณจำนวน 500,000 บาท เพื่อดำเนินการปรับปรุงโครงสร้างพื้นฐานเครือข่ายสัญญาณ Wi-Fi ในพื้นที่อาคารเรียนส่วนกลาง\n2. **การจัดซื้ออุปกรณ์:** จัดหาเราเตอร์และจุดกระจายสัญญาณเพิ่ม 15 ตัว คาดว่าจะเริ่มติดตั้งสัปดาห์หน้า\n3. **การคุ้มครองข้อมูลการเรียนการสอน:** กำหนดเงื่อนไขความปลอดภัยไซเบอร์ ห้ามเก็บประวัติการท่องเว็บของเยาวชนต่ำกว่า 18 ปีตามนโยบาย PDPA\n\n👉 **แผนการที่ต้องทำต่อ (Action Items):**\n- ฝ่ายไอทีประสานงานผู้จัดจำหน่ายส่งใบเสนอราคาสุดท้ายภายในวันที่ 15 มิ.ย.\n- ฝ่ายบริหารอนุมัติสัญญาและจ้างติดตั้งตามกรอบงบประมาณ`
        },
        {
          label: 'ร่างจดหมายส่งถึงสถาบันอื่น',
          prompt: 'เขียนแบบร่างจดหมายเชิญผู้แทนจากมหาวิทยาลัยพันธมิตรเข้าร่วมงานสัมมนาทางวิชาการ EdTech Symposium ในหัวข้อ Generative AI ในการเรียนการสอน',
          output: `✉️ **ร่างจดหมายขอเรียนเชิญเป็นเกียรติเข้าร่วมงานสัมมนาวิชาการ**\n\n**เรื่อง:** ขอเรียนเชิญเข้าร่วมงานสัมมนาวิชาการ "EdTech Symposium: Generative AI for Future Education"\n**เรียน:** อธิการบดี / คณบดีมหาวิทยาลัยพันธมิตร\n\nเนื่องด้วยสถาบันของเรากำลังเร่งผลักดันนวัตกรรมการศึกษาเพื่อรองรับยุคดิจิทัล จึงใคร่ขอเรียนเชิญสถาบันของท่านส่งตัวแทนเข้าร่วมสัมมนาวิชาการดังกล่าว ซึ่งจะจัดขึ้นในวันที่ 24 กรกฎาคม 2026 ณ หอประชุมใหญ่ เพื่อร่วมแลกเปลี่ยนความรู้ในประเด็นการนำ Gemini AI เข้ามาผสานการทำงานเพื่อลดภาระครูและปกป้องข้อมูลนักเรียนอย่างปลอดภัย\n\nทางคณะผู้จัดงานหวังเป็นอย่างยิ่งว่าจะได้รับการตอบรับจากท่าน ขอแสดงความนับถืออย่างสูง`
        }
      ]
    }
  };

  // Run typing simulation
  const handlePromptClick = (promptItem) => {
    setIsTyping(true);
    setPromptInput(promptItem.prompt);
    setSimulatedOutput('');
    
    let index = 0;
    const text = promptItem.output;
    const interval = setInterval(() => {
      setSimulatedOutput((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 10);
  };

  // Pre-load first prompt on render or tab change
  useEffect(() => {
    const defaultPrompt = roleData[activeTab].prompts[0];
    setPromptInput(defaultPrompt.prompt);
    setSimulatedOutput(defaultPrompt.output);
  }, [activeTab]);

  // Form handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'กรุณากรอกชื่อ-นามสกุล';
    if (!formData.institution.trim()) errors.institution = 'กรุณากรอกชื่อสถาบันการศึกษา';
    if (!formData.email.trim()) {
      errors.email = 'กรุณากรอกอีเมล';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'รูปแบบอีเมลไม่ถูกต้อง';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'กรุณากรอกเบอร์โทรศัพท์';
    } else if (!/^\d{9,10}$/.test(formData.phone.replace(/[- ]/g, ''))) {
      errors.phone = 'เบอร์โทรศัพท์ต้องประกอบด้วยตัวเลข 9-10 หลัก';
    }
    if (!formData.role) errors.role = 'กรุณาเลือกตำแหน่งหรือบทบาทของคุณ';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsTyping(true);
    // Simulate API call
    setTimeout(() => {
      setIsTyping(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-[#9B72CB]/30">
      {/* Navigation Bar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-gemini-sparkle flex items-center justify-center text-white shadow-md shadow-purple-200">
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
              <span className="text-lg font-bold tracking-tight text-google-dark">
                Google <span className="text-gemini-sparkle font-extrabold">AI Pro</span> <span className="font-normal text-google-muted text-sm border-l border-gray-300 pl-2 ml-1">for Education</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-google-muted hover:text-google-blue transition-colors">ประโยชน์การใช้งาน</a>
              <a href="#integrations" className="text-sm font-medium text-google-muted hover:text-google-blue transition-colors">การทำงานร่วมกัน</a>
              <a href="#editions" className="text-sm font-medium text-google-muted hover:text-google-blue transition-colors">แผนบริการ</a>
              <a href="#security" className="text-sm font-medium text-google-muted hover:text-google-blue transition-colors">ความปลอดภัย</a>
              <a href="#contact" className="text-sm font-medium text-google-muted hover:text-google-blue transition-colors">ติดต่อเรา</a>
            </nav>

            <div className="hidden md:block">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium text-white bg-google-blue hover:bg-blue-700 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
              >
                ติดต่อตัวแทนจำหน่าย
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-google-muted hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg py-4 px-6 space-y-4 animate-in fade-in slide-in-from-top-5 duration-200">
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-google-muted hover:text-google-blue"
            >
              ประโยชน์การใช้งาน
            </a>
            <a 
              href="#integrations" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-google-muted hover:text-google-blue"
            >
              การทำงานร่วมกัน
            </a>
            <a 
              href="#editions" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-google-muted hover:text-google-blue"
            >
              แผนบริการ
            </a>
            <a 
              href="#security" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-google-muted hover:text-google-blue"
            >
              ความปลอดภัย
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-google-muted hover:text-google-blue"
            >
              ติดต่อเรา
            </a>
            <div className="pt-2">
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-5 py-3 rounded-full text-base font-medium text-white bg-google-blue hover:bg-blue-700 shadow-sm"
              >
                ติดต่อตัวแทนจำหน่าย
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-blue-300/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/10 w-96 h-96 rounded-full bg-purple-300/20 blur-3xl animate-pulse-slow" style={{ animationDelay: '-3s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 shadow-sm animate-bounce-subtle">
                <Sparkles className="w-4 h-4 text-[#A142F4]" />
                <span className="text-xs font-semibold text-[#A142F4] tracking-wide">
                  Gemini มีการเพิ่มระดับการคุ้มครองข้อมูลแล้ว
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-google-dark leading-tight tracking-tight">
                ปลดล็อกศักยภาพการเรียนรู้ด้วย <br />
                <span className="text-gemini-sparkle">Google AI Pro for Education</span>
              </h1>
              
              <p className="text-lg text-google-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                ยกระดับการศึกษาด้วย Gemini for Google Workspace ผสานพลัง AI เข้ากับเครื่องมือที่คุณคุ้นเคย พร้อมมาตรฐานความปลอดภัยระดับองค์กรที่ปกป้องข้อมูลของสถาบันอย่างสูงสุด
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-white bg-google-blue hover:bg-blue-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:scale-95 group"
                >
                  <span>ติดต่อตัวแทนจำหน่าย</span>
                  <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="#editions" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-google-blue bg-white border-2 border-blue-200 hover:border-google-blue hover:bg-blue-50/30 transition-all duration-200 active:scale-95"
                >
                  ดูข้อมูลแผนบริการ
                </a>
              </div>
            </div>

            {/* Hero Right Visual (Interactive AI Mockup) */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl">
                {/* Mockup Toolbar */}
                <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs text-google-muted font-medium flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#9B72CB]" />
                    Gemini Workspace Simulator
                  </div>
                </div>

                {/* Mockup Body */}
                <div className="p-5 space-y-4">
                  {/* Google Workspace App header mockup */}
                  <div className="flex items-center gap-3 bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                    <div className="w-9 h-9 rounded-lg bg-google-blue flex items-center justify-center text-white">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-google-muted font-semibold">สร้างแผนการสอนอัจฉริยะ</p>
                      <p className="text-2xs text-[#1A73E8]">Google Docs + Gemini</p>
                    </div>
                  </div>

                  {/* Typing Prompts area */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-google-dark block">คำสั่งPromptตัวอย่าง:</label>
                    <div className="p-3 bg-gray-50 rounded-xl text-xs text-google-muted border border-gray-100 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-[#9B72CB] shrink-0 mt-0.5" />
                      <span>{promptInput || 'คลิกเลือกคำถามตัวอย่างจากส่วนผู้สอนหรือผู้เรียนด้านล่าง...'}</span>
                    </div>
                  </div>

                  {/* Simulator Output */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-[#9B72CB] flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Gemini Output:
                      </label>
                      {isTyping && (
                        <span className="text-2xs text-google-blue animate-pulse">กำลังประมวลผล...</span>
                      )}
                    </div>
                    <div className="p-4 bg-[#0F172A] text-gray-100 rounded-xl text-xs font-light h-56 overflow-y-auto whitespace-pre-line border border-slate-800 leading-relaxed custom-scrollbar">
                      {simulatedOutput || 'จำลองผลลัพธ์ของ AI ในหัวข้อต่างๆ...'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Target Audience Tabs Section */}
      <section id="features-tabs" className="py-20 bg-[#F8F9FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-google-dark tracking-tight">
              ออกแบบมาเพื่อทุกบทบาทในสถาบันการศึกษา
            </h2>
            <p className="text-base text-google-muted font-light">
              เลือกบทบาทของสถาบันเพื่อทดลองใช้คำสั่ง Prompt และผลลัพธ์จำลองที่ครอบคลุมงานหลักของคุณ
            </p>
          </div>

          {/* Tab Button Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 p-1.5 bg-gray-200/50 rounded-2xl max-w-3xl mx-auto mb-12">
            {Object.keys(roleData).map((key) => {
              const role = roleData[key];
              const IconComp = role.icon;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full sm:w-1/3 flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-white text-google-dark shadow-md scale-102 border border-white' 
                      : 'text-google-muted hover:text-google-dark hover:bg-white/40'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? role.textColor : ''}`} />
                  <span>{role.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Box */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-10 transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Details of Selected Tab */}
              <div className="md:col-span-5 space-y-6">
                <div className="inline-flex p-3.5 rounded-xl bg-blue-50">
                  {React.createElement(roleData[activeTab].icon, {
                    className: `w-6 h-6 ${roleData[activeTab].textColor}`
                  })}
                </div>
                
                <h3 className="text-2xl font-bold text-google-dark">
                  {roleData[activeTab].title}
                </h3>
                
                <p className="text-sm text-google-muted leading-relaxed font-light">
                  {roleData[activeTab].desc}
                </p>

                <div className="pt-2 border-t border-gray-100">
                  <span className="text-2xs font-semibold uppercase tracking-wider text-google-muted block mb-3">
                    ลองคลิกตัวอย่าง Prompt:
                  </span>
                  <div className="space-y-2">
                    {roleData[activeTab].prompts.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => handlePromptClick(p)}
                        className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition-all duration-200 flex items-center justify-between group active:scale-98 ${
                          promptInput === p.prompt 
                            ? 'bg-blue-50/50 border-google-blue text-google-blue'
                            : 'border-gray-200 hover:border-gray-300 text-google-muted hover:text-google-dark'
                        }`}
                      >
                        <span className="truncate">{p.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Simulation Result Side */}
              <div className="md:col-span-7 bg-[#0F172A] rounded-xl p-5 sm:p-6 text-gray-100 border border-slate-800 flex flex-col justify-between h-[360px] sm:h-[400px]">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-2xs font-light text-slate-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#9B72CB]" />
                    AI Response Simulator
                  </span>
                </div>
                
                <div className="flex-1 py-4 overflow-y-auto whitespace-pre-line text-xs font-light leading-relaxed custom-scrollbar text-slate-200">
                  {simulatedOutput || 'โปรดรอสักครู่ หรือลองเปลี่ยน Prompt ตัวอย่างด้านข้าง...'}
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-2xs text-slate-500">
                  <span>ข้อมูลเป็นส่วนตัว ไม่นำไปใช้ฝึกฝนโมเดล</span>
                  <div className="flex items-center gap-1 text-[#9B72CB]">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Google Secure Workspace</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Workspace Integrations Section */}
      <section id="integrations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-google-dark tracking-tight">
              ผสานรวมกับ Google Workspace อย่างไร้รอยต่อ
            </h2>
            <p className="text-base text-google-muted font-light">
              ทำงานอย่างชาญฉลาดขึ้นในทุกแอปพลิเคชันที่คุณคุ้นเคยด้วยฟีเจอร์ AI ที่สอดรับกันทุกกระบวนการทำงาน
            </p>
          </div>

          {/* Grid of 6 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Google Docs */}
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-100 bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-google-blue group-hover:bg-google-blue group-hover:text-white transition-all duration-300">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-google-dark group-hover:text-google-blue transition-colors">
                  Google Docs
                </h3>
                <p className="text-sm text-google-muted leading-relaxed font-light">
                  ผู้ช่วยเขียนอัจฉริยะ ร่างแผนการสอน อีเมล หรือเอกสารทางการได้อย่างรวดเร็วและตรงประเด็น ช่วยประหยัดเวลาการทำเอกสารที่ซ้ำซ้อน
                </p>
              </div>
              <div className="pt-6 text-xs font-semibold text-google-blue flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>เรียนรู้เพิ่มเติม</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 2: Gmail */}
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-red-100 bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-google-dark group-hover:text-red-500 transition-colors">
                  Gmail
                </h3>
                <p className="text-sm text-google-muted leading-relaxed font-light">
                  สรุปอีเมลยาวๆ และร่างคำตอบอย่างรวดเร็วด้วย Gemini ช่วยให้คุณสื่อสารกับผู้ปกครองและบุคลากรในสถาบันอย่างมีประสิทธิภาพสูงสุด
                </p>
              </div>
              <div className="pt-6 text-xs font-semibold text-red-500 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>เรียนรู้เพิ่มเติม</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 3: Google Meet */}
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-green-100 bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-google-green group-hover:bg-google-green group-hover:text-white transition-all duration-300">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-google-dark group-hover:text-google-green transition-colors">
                  Google Meet
                </h3>
                <p className="text-sm text-google-muted leading-relaxed font-light">
                  ยกระดับการประชุมทางวิดีโอด้วยฟีเจอร์แปลภาษา ลดเสียงรบกวน และปรับภาพพื้นหลังด้วย AI พร้อมการสรุปการประชุมและจดลิสต์สิ่งที่ต้องทำโดยอัตโนมัติ
                </p>
              </div>
              <div className="pt-6 text-xs font-semibold text-google-green flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>เรียนรู้เพิ่มเติม</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 4: Google Slides */}
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-yellow-100 bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
                  <Presentation className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-google-dark group-hover:text-yellow-600 transition-colors">
                  Google Slides
                </h3>
                <p className="text-sm text-google-muted leading-relaxed font-light">
                  สร้างงานนำเสนอให้มีชีวิตชีวาด้วยการสร้างภาพประกอบสื่อการสอนจากข้อความ (Text-to-Image) ช่วยให้บทเรียนน่าดึงดูดและเข้าใจง่ายยิ่งขึ้น
                </p>
              </div>
              <div className="pt-6 text-xs font-semibold text-yellow-600 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>เรียนรู้เพิ่มเติม</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 5: Google Sheets */}
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-teal-100 bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <Table className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-google-dark group-hover:text-teal-600 transition-colors">
                  Google Sheets
                </h3>
                <p className="text-sm text-google-muted leading-relaxed font-light">
                  จัดระเบียบข้อมูลและสร้างตารางสถิตินักเรียนอย่างรวดเร็วด้วยการจัดประเภทข้อมูลอัจฉริยะ ลดความผิดพลาดและข้ามขั้นตอนการใส่สูตรที่ซับซ้อน
                </p>
              </div>
              <div className="pt-6 text-xs font-semibold text-teal-600 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>เรียนรู้เพิ่มเติม</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 6: NotebookLM & Deep Research */}
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-purple-100 bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-google-dark group-hover:text-purple-600 transition-colors">
                  NotebookLM & Deep Research
                </h3>
                <p className="text-sm text-google-muted leading-relaxed font-light">
                  อัปโหลดหลักสูตรการสอน สร้างคู่มือสรุป หรือทำการวิจัยเชิงลึกพร้อมระบุแหล่งอ้างอิงที่มีความน่าเชื่อถือสูงในระดับสากลได้อย่างแม่นยำ
                </p>
              </div>
              <div className="pt-6 text-xs font-semibold text-purple-600 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>เรียนรู้เพิ่มเติม</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Editions / Pricing Plan Comparison Section */}
      <section id="editions" className="py-24 bg-[#F8F9FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-google-dark tracking-tight">
              เลือกแผนบริการที่เหมาะกับสถาบันของคุณ
            </h2>
            <p className="text-base text-google-muted font-light">
              เราออกแบบมาเพื่อให้เหมาะสมทั้งกลุ่มบุคลากรทั่วไป ครูผู้สอน และบุคลากรไอทีที่ต้องการควบคุมระบบวิเคราะห์ความปลอดภัยในระดับสูง
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Gemini Education Standard */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-google-blue uppercase tracking-widest">แผนหลักแนะนำ</span>
                    <h3 className="text-2xl font-bold text-google-dark">Gemini Education</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-google-blue">
                    สำหรับผู้สอน
                  </span>
                </div>
                
                <p className="text-sm text-google-muted mb-6 leading-relaxed font-light">
                  เน้นช่วยประหยัดเวลาการทำงานพื้นฐานของบุคลากรทั่วไปและคุณครู ช่วยจัดการบทเรียน ค้นคว้าข้อมูล และตอบอีเมลอย่างรวดเร็ว
                </p>

                <div className="border-t border-gray-100 pt-6 space-y-4 mb-8">
                  <p className="text-xs font-semibold text-google-dark">สิ่งที่จะได้รับในสิทธิ์การใช้งาน:</p>
                  <ul className="space-y-3.5">
                    {[
                      'เข้าใช้งาน Gemini ใน Gmail, Docs, Slides และ Sheets',
                      'ระบบคุ้มครองข้อมูลองค์กร มาตรฐานความปลอดภัยไม่นำข้อมูลไปฝึกโมเดล',
                      'เขียนคำสั่งด้วยเสียงและแปลงภาษาเบื้องต้น',
                      'ชุดเครื่องมือความช่วยเหลือเทคนิคมาตรฐานจากกูเกิล'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-google-muted font-light">
                        <Check className="w-4 h-4 text-google-blue shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="mb-6 pt-4 border-t border-gray-100">
                  <p className="text-xs text-google-muted">ราคาสำหรับสถาบันการศึกษา</p>
                  <p className="text-2xl font-bold text-google-dark mt-1">ติดต่อรับข้อเสนอราคาพิเศษ</p>
                </div>
                
                <a 
                  href="#contact" 
                  className="block text-center w-full py-3.5 rounded-full text-sm font-semibold text-google-blue bg-blue-50 hover:bg-google-blue hover:text-white transition-all duration-300"
                >
                  เลือกแผนการใช้งานนี้
                </a>
              </div>
            </div>

            {/* Card 2: Gemini Education Premium */}
            <div className="bg-white rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-300 shadow-lg relative overflow-hidden flex flex-col justify-between group">
              {/* Popular Badge decoration */}
              <div className="absolute top-0 right-0 bg-gemini-sparkle text-white text-xs font-bold py-1 px-8 rotate-45 translate-x-7 translate-y-3.5 shadow-sm">
                พรีเมียมสูงสุด
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">ขั้นสูงครอบคลุม</span>
                    <h3 className="text-2xl font-bold text-google-dark">Gemini Education Premium</h3>
                  </div>
                </div>

                <p className="text-sm text-google-muted mb-6 leading-relaxed font-light">
                  เพิ่มฟีเจอร์ AI ขั้นสูงใน Meet, การจัดการข้อมูลเชิงลึก และสิทธิ์การใช้งานที่ครอบคลุมมากกว่า เพื่อการจัดการสถาบันขนาดใหญ่และการวิจัยเชิงลึก
                </p>

                <div className="border-t border-gray-100 pt-6 space-y-4 mb-8">
                  <p className="text-xs font-semibold text-google-dark">สิ่งที่จะได้รับในสิทธิ์การใช้งาน:</p>
                  <ul className="space-y-3.5">
                    {[
                      'ฟีเจอร์ของแผน Gemini Education ทั้งหมด',
                      'Gemini ใน Google Meet (ถอดเสียงรายงานภาษาไทย แปลภาษา และตัดเสียงรบกวนขั้นสูง)',
                      'เข้าถึงระบบวิจัยเชิงลึก Deep Research และสร้าง Gem บอทผู้ช่วยส่วนตัว',
                      'ระบบแอดมินสำหรับ IT Admin รายงานพฤติกรรมข้อมูลและความเสถียรของความปลอดภัยสูงสุด',
                      'โควต้าความจุพื้นที่เก็บข้อมูลและระบบตอบคำถามเร่งด่วน 24 ชม.'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-google-muted font-light">
                        <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="mb-6 pt-4 border-t border-gray-100">
                  <p className="text-xs text-google-muted">ราคาสำหรับสถาบันการศึกษา</p>
                  <p className="text-2xl font-bold text-[#A142F4] mt-1">ติดต่อขอรับราคาพรีเมียม</p>
                </div>

                <a 
                  href="#contact" 
                  className="block text-center w-full py-3.5 rounded-full text-sm font-semibold text-white bg-gemini-sparkle hover:opacity-95 shadow-md active:scale-98 transition-all duration-300"
                >
                  ขอใบเสนอราคาพรีเมียม
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Security & Trust Banner */}
      <section id="security" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-[#0F172A] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
            {/* Glow effects inside card */}
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Security Text Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-purple-300 text-xs font-semibold border border-slate-700">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Built for Education</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  ความปลอดภัยและความเป็นส่วนตัวของคุณคือสิ่งสำคัญที่สุด
                </h2>
                
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  ใช้งาน AI ด้วยความมั่นใจ ข้อมูลของคุณ สถาบันของคุณ และนักเรียนของคุณ จะไม่ถูกนำไปฝึกฝนโมเดล AI สาธารณะ (No training on user data) สอดคล้องกับมาตรฐานความปลอดภัยระดับสากลและกฎหมายคุ้มครองข้อมูลอย่างมีประสิทธิภาพสูงสุด
                </p>
              </div>

              {/* Grid of Security Features */}
              <div className="lg:col-span-5 space-y-4">
                {/* feature 1 */}
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 shrink-0 self-start">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">ข้อมูลเป็นส่วนตัวอย่างสมบูรณ์</h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      ข้อมูลของคุณจะไม่ถูกนำไปใช้ฝึกโมเดล AI และไม่มีเจ้าหน้าที่ภายนอกเข้ามาตรวจสอบส่องไฟล์
                    </p>
                  </div>
                </div>

                {/* feature 2 */}
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 shrink-0 self-start">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">ปลอดภัยสูงสุดสำหรับนักเรียน</h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      ประสบการณ์การใช้งานที่ได้รับการควบคุมความเสี่ยงอย่างเหมาะสมสำหรับผู้ใช้ที่มีอายุต่ำกว่า 18 ปี
                    </p>
                  </div>
                </div>

                {/* feature 3 */}
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
                  <div className="p-3 bg-green-500/10 rounded-xl text-green-400 shrink-0 self-start">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">วิทยาศาสตร์การเรียนรู้ที่น่าเชื่อถือ</h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      ขับเคลื่อนด้วย Gemini 2.5 Pro และ LearnLM โมเดลชั้นนำที่ผ่านการจูนสำหรับหลักสูตรสากลโดยเฉพาะ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Lead Gen Form Section */}
      <section id="contact" className="py-24 bg-[#F8F9FA] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Contact Text Column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-google-dark tracking-tight leading-tight">
                พร้อมที่จะนำ AI มาพลิกโฉมสถาบันของคุณหรือยัง?
              </h2>
              <p className="text-sm text-google-muted leading-relaxed font-light">
                กรอกข้อมูลความสนใจของคุณด้านขวา เพื่อรับคำปรึกษาฟรีเกี่ยวกับแผนบริการและการติดตั้ง Gemini for Google Workspace ในสถาบันการศึกษาของคุณ
              </p>
              
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-google-blue">
                    <School className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-google-dark">Google Workspace Education Team</p>
                    <p className="text-xs text-google-muted">ผู้เชี่ยวชาญบริการ EdTech และ Cloud Solutions</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-google-green">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-google-dark">ได้รับความไว้วางใจระดับโลก</p>
                    <p className="text-xs text-google-muted">ได้รับรองมาตรฐานความปลอดภัยของข้อมูลการสอนสูงสุด</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Gen Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100">
                
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-google-green mx-auto shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-google-dark">ส่งข้อมูลความสนใจเรียบร้อยแล้ว!</h3>
                    <p className="text-sm text-google-muted max-w-md mx-auto font-light leading-relaxed">
                      ขอขอบพระคุณสำหรับความสนใจใน **Google AI Pro for Education** เจ้าหน้าที่ดูแลแผน EdTech ของเราจะติดต่อกลับสถาบันของคุณเพื่อนำเสนอข้อเสนอพิเศษและให้คำปรึกษาอย่างละเอียดภายใน 24 ชั่วโมง
                    </p>
                    <div className="pt-6">
                      <button 
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({ fullName: '', institution: '', email: '', phone: '', role: '' });
                        }}
                        className="text-xs text-google-blue font-semibold hover:underline"
                      >
                        ส่งแบบฟอร์มอีกครั้ง
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="border-b border-gray-100 pb-4 mb-2">
                      <h3 className="text-lg font-bold text-google-dark">ขอรับคำปรึกษาฟรีและขอใบเสนอราคา</h3>
                      <p className="text-xs text-google-muted mt-1 font-light">ข้อมูลของคุณจะได้รับการคุ้มครองสิทธิ์ความเป็นส่วนตัวสูงสุด</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1">
                        <label htmlFor="fullName" className="text-xs font-semibold text-google-dark block">ชื่อ-นามสกุล <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <input 
                            type="text" 
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="ตัวอย่าง: สมชาย รักดี" 
                            className={`w-full text-xs p-3 pl-10 rounded-xl bg-gray-50 border focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                              formErrors.fullName 
                                ? 'border-red-300 focus:ring-red-100 focus:border-red-400' 
                                : 'border-gray-200 focus:ring-blue-100 focus:border-google-blue'
                            }`}
                          />
                          <User className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-gray-400" />
                        </div>
                        {formErrors.fullName && <p className="text-2xs text-red-500">{formErrors.fullName}</p>}
                      </div>

                      {/* Institution input */}
                      <div className="space-y-1">
                        <label htmlFor="institution" className="text-xs font-semibold text-google-dark block">สถาบันการศึกษา <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <input 
                            type="text" 
                            id="institution"
                            name="institution"
                            value={formData.institution}
                            onChange={handleInputChange}
                            placeholder="ตัวอย่าง: โรงเรียนเตรียมอุดมศึกษา" 
                            className={`w-full text-xs p-3 pl-10 rounded-xl bg-gray-50 border focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                              formErrors.institution 
                                ? 'border-red-300 focus:ring-red-100 focus:border-red-400' 
                                : 'border-gray-200 focus:ring-blue-100 focus:border-google-blue'
                            }`}
                          />
                          <School className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-gray-400" />
                        </div>
                        {formErrors.institution && <p className="text-2xs text-red-500">{formErrors.institution}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email input */}
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-xs font-semibold text-google-dark block">อีเมลสถาบัน <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <input 
                            type="email" 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="ตัวอย่าง: teacher@school.ac.th" 
                            className={`w-full text-xs p-3 pl-10 rounded-xl bg-gray-50 border focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                              formErrors.email 
                                ? 'border-red-300 focus:ring-red-100 focus:border-red-400' 
                                : 'border-gray-200 focus:ring-blue-100 focus:border-google-blue'
                            }`}
                          />
                          <Mail className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-gray-400" />
                        </div>
                        {formErrors.email && <p className="text-2xs text-red-500">{formErrors.email}</p>}
                      </div>

                      {/* Phone input */}
                      <div className="space-y-1">
                        <label htmlFor="phone" className="text-xs font-semibold text-google-dark block">เบอร์โทรศัพท์ติดต่อ <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <input 
                            type="tel" 
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="ตัวอย่าง: 0891234567" 
                            className={`w-full text-xs p-3 pl-10 rounded-xl bg-gray-50 border focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                              formErrors.phone 
                                ? 'border-red-300 focus:ring-red-100 focus:border-red-400' 
                                : 'border-gray-200 focus:ring-blue-100 focus:border-google-blue'
                            }`}
                          />
                          <Phone className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-gray-400" />
                        </div>
                        {formErrors.phone && <p className="text-2xs text-red-500">{formErrors.phone}</p>}
                      </div>
                    </div>

                    {/* Role dropdown */}
                    <div className="space-y-1">
                      <label htmlFor="role" className="text-xs font-semibold text-google-dark block">ตำแหน่ง / บทบาทในสถาบัน <span className="text-red-500">*</span></label>
                      <select 
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className={`w-full text-xs p-3 rounded-xl bg-gray-50 border focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          formErrors.role 
                            ? 'border-red-300 focus:ring-red-100 focus:border-red-400' 
                            : 'border-gray-200 focus:ring-blue-100 focus:border-google-blue'
                        }`}
                      >
                        <option value="">-- โปรดเลือกตำแหน่งของคุณ --</option>
                        <option value="director">ผู้อำนวยการโรงเรียน / ผู้บริหารระดับสูง</option>
                        <option value="it_admin">ฝ่ายเทคโนโลยีสารสนเทศ (IT Admin / CIO)</option>
                        <option value="educator">ครูผู้สอน / อาจารย์มหาวิทยาลัย</option>
                        <option value="officer">บุคลากรฝ่ายทะเบียน / เจ้าหน้าที่ฝ่ายสนับสนุน</option>
                        <option value="other">อื่นๆ</option>
                      </select>
                      {formErrors.role && <p className="text-2xs text-red-500">{formErrors.role}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button 
                        type="submit"
                        disabled={isTyping}
                        className="w-full py-4 px-6 rounded-full text-xs font-bold text-white bg-gemini-sparkle hover:opacity-95 shadow-md active:scale-99 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        <span>{isTyping ? 'กำลังส่งข้อมูล...' : 'ขอรับคำปรึกษาฟรี'}</span>
                        {!isTyping && <Sparkles className="w-4 h-4" />}
                      </button>
                    </div>
                  </form>
                )}
                
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left side info */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-gemini-sparkle flex items-center justify-center text-white">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-semibold text-white tracking-tight">
                Google <span className="text-purple-400 font-extrabold">AI Pro</span> for Education
              </span>
            </div>

            {/* Middle links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <a href="#features" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว (Privacy Policy)</a>
              <a href="#security" className="hover:text-white transition-colors">ข้อกำหนดการใช้งาน (Terms of Service)</a>
              <a href="#contact" className="hover:text-white transition-colors">ศูนย์ความปลอดภัยสากล</a>
            </div>

            {/* Right side copyright */}
            <p className="text-2xs text-slate-500 text-center md:text-right">
              &copy; 2026 Google for Education. All rights reserved. <br />
              Gemini and Google Workspace are trademarks of Google LLC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
