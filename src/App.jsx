import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Impact from './components/Impact';
import Partner from './components/Partner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'philosophy', 'services', 'impact', 'partner', 'contact'];
      const scrollPosition = window.scrollY + 250; // offset to trigger slightly before reaching section top

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Execute scroll listener once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <Services />
        <Impact />
        <Partner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
