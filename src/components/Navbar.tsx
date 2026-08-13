import React, { useState, useEffect } from 'react';
import { TrendingUp, Menu, X, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Keahlian', href: '#keahlian' },
    { name: 'Pendekatan', href: '#pendekatan' },
    { name: 'Pengalaman', href: '#pengalaman' },
    { name: 'Kalkulator', href: '#kalkulator' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Name Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded bg-[#38bdf8] p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0a0a0c] rounded-[3px] flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-[#38bdf8]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tighter uppercase text-white font-heading">
              Rizki Apriansyah
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] sky-text font-semibold">
              Sales Educator Trading — PT Valbury
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-widest font-semibold opacity-80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-[#38bdf8] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/6283165237600?text=Halo%20Rizki,%20saya%20ingin%20berdiskusi%20mengenai%20edukasi%20trading%20forex%20Valbury."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 gold-bg text-black font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all shadow-lg"
          >
            <span>Hubungi Rizki</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white bg-[#1a1c23] border border-white/10 rounded focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-[#38bdf8]/30 px-4 pt-4 pb-6 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs uppercase tracking-widest font-semibold text-slate-200 hover:text-[#38bdf8] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="https://wa.me/6283165237600?text=Halo%20Rizki,%20saya%20ingin%20berdiskusi%20mengenai%20edukasi%20trading%20forex%20Valbury."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 gold-bg text-black font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all text-center"
              >
                <span>Hubungi Rizki</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
