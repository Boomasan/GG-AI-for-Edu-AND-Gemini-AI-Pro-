
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark border-t border-white/5 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding & Logo */}
        <div className="flex items-center">
          <span className="text-lg font-extrabold text-white tracking-wide font-heading">
            Supa <span className="text-accent">Solutions</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-semibold font-sans">
          <a href="#philosophy" className="hover:text-white hover:underline underline-offset-4 transition-colors">แนวคิดองค์กร</a>
          <a href="#services" className="hover:text-white hover:underline underline-offset-4 transition-colors">ความเชี่ยวชาญ</a>
          <a href="#impact" className="hover:text-white hover:underline underline-offset-4 transition-colors">บริการของเรา</a>
          <a href="#partner" className="hover:text-white hover:underline underline-offset-4 transition-colors">Partner</a>
          <a href="#contact" className="hover:text-white hover:underline underline-offset-4 transition-colors">ติดต่อเรา</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center md:text-right font-sans text-slate-500">
          <p>© {currentYear} บริษัท สุภา โซลูชั่นส์ จำกัด สงวนลิขสิทธิ์ตามกฎหมาย</p>
        </div>
      </div>
    </footer>
  );
}
