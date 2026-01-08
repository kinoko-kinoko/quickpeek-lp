import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-1.5 rounded-xl border border-white/10 backdrop-blur-sm">
            <img src="/app-icon.png" alt="QuickPeek Logo" className="w-8 h-8 rounded-lg" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">QuickPeek</span>
        </div>

        {/* CTA */}
        <a
          href="https://apps.apple.com/us/app/quickpeek-image-overlay-tool/id6756771088?mt=12"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2
            ${scrolled
              ? 'bg-white text-slate-900 shadow-lg hover:bg-slate-200'
              : 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20'}
          `}
        >
          <span>Download</span>
        </a>

      </div>
    </nav>
  );
}
