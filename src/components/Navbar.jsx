import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'แนวคิดองค์กร', href: '#philosophy' },
    { label: 'ความเชี่ยวชาญ', href: '#services' },
    { label: 'บริการของเรา', href: '#impact' },
    { label: 'Partner', href: '#partner' },
    { label: 'ติดต่อเรา', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-4 md:px-8">
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ${
          isScrolled
            ? 'max-w-5xl bg-primary-dark/85 backdrop-blur-md shadow-2xl border border-white/10 rounded-2xl py-3 px-6 md:px-8'
            : 'max-w-7xl bg-transparent py-4 px-2'
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center group">
          <span className="text-xl font-extrabold text-white tracking-wide font-heading">
            Supa <span className="text-accent group-hover:text-accent-hover transition-colors">Solutions</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium text-sm tracking-wide transition-all duration-200 hover:text-accent relative py-1 ${
                  isActive ? 'text-accent font-semibold' : 'text-slate-300'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full shadow-[0_0_8px_rgba(158,205,246,0.3)]"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="tel:0988222895"
            className="btn-interactive inline-flex items-center space-x-2 bg-gradient-to-r from-secondary to-accent hover:from-secondary-hover hover:to-accent-hover text-white px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide shadow-lg shadow-secondary/15 transition-all"
          >
            <Phone className="h-4 w-4 animate-pulse" />
            <span>098 822 2895</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-200 hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-primary-dark/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl py-6 px-6 flex flex-col space-y-4 animate-fade-in-up">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-semibold py-2 transition-all rounded-lg px-3 ${
                  isActive
                    ? 'text-accent bg-white/5 border-l-4 border-accent'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="tel:0988222895"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center bg-gradient-to-r from-secondary to-accent text-white py-3.5 rounded-xl text-base font-semibold shadow-lg shadow-secondary/20 flex items-center justify-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>098 822 2895</span>
          </a>
        </div>
      )}
    </header>
  );
}
