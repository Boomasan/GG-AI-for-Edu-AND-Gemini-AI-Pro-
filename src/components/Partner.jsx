
export default function Partner() {
  return (
    <section id="partner" className="py-20 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/2 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6 relative z-10">
        
        {/* Header styling */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center space-x-2 bg-secondary/5 border border-secondary/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-secondary uppercase font-sans">
            พันธมิตรผู้ร่วมเดินทาง
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Partner
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mt-3"></div>
        </div>

        {/* Partner items display with 12-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 max-w-5xl mx-auto">
          {/* Left Photo */}
          <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 md:col-span-5 h-64 md:h-80 md:mr-[50px]">
            <img 
              src="/images/partner-team-1.jpg" 
              alt="The S-Curve Team Google Session" 
              className="w-full h-full object-cover object-[70%_25%] hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Center Logo Box (No frame, no border) */}
          <div className="flex justify-center items-center md:col-span-2">
            <img 
              src="https://storage.googleapis.com/scurvestorageweb/logo/TheSCurveLogo_New.png" 
              alt="The S-Curve" 
              className="max-h-16 md:max-h-24 w-auto object-contain mx-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Photo */}
          <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 md:col-span-5 h-64 md:h-80 md:ml-[50px]">
            <img 
              src="/images/partner-team-2.jpg" 
              alt="The S-Curve Chromebook Session" 
              className="w-full h-full object-cover object-[25%_25%] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
