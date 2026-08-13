import React from 'react';
import { TrendingUp, ShieldAlert, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0c] border-t border-white/10 pt-16 pb-12 text-[#e4e4e7]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#38bdf8] p-0.5">
                <div className="w-full h-full bg-[#0a0a0c] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 gold-text" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-white tracking-wide uppercase">
                  Rizki Apriansyah
                </h3>
                <p className="text-[10px] uppercase tracking-widest gold-text font-semibold">
                  Sales Educator Trading — PT Valbury
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold text-white italic font-heading">
              "Memahami pasar. Menyusun strategi. Mengelola risiko."
            </p>

            <p className="text-xs text-[#e4e4e7]/60 leading-relaxed max-w-lg">
              Website portofolio resmi edukasi dan analisa pasar forex oleh Rizki Apriansyah, profesional edukator perdagangan berjangka di PT Valbury Futures.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest gold-text mb-3">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider font-medium">
              <li>
                <a href="#hero" className="hover:text-[#38bdf8] transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-[#38bdf8] transition-colors">Mengenal Rizki</a>
              </li>
              <li>
                <a href="#keahlian" className="hover:text-[#38bdf8] transition-colors">Keahlian Utama</a>
              </li>
              <li>
                <a href="#pendekatan" className="hover:text-[#38bdf8] transition-colors">Pendekatan Trading</a>
              </li>
              <li>
                <a href="#pengalaman" className="hover:text-[#38bdf8] transition-colors">Pengalaman Profesional</a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-[#38bdf8] transition-colors">Kalkulator Risiko</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#38bdf8] transition-colors">Hubungi Saya</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Back to Top Button */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-[#38bdf8] text-xs font-bold uppercase tracking-widest text-[#e4e4e7] hover:text-white transition-all"
            >
              <span>Atas</span>
              <ArrowUp className="w-4 h-4 gold-text" />
            </button>

            <div className="text-[11px] text-[#e4e4e7]/50 mt-6 md:mt-0 md:text-right uppercase tracking-wider">
              <p>PT Valbury Futures Indonesia</p>
              <p>Penyedia Perdagangan Berjangka Terdaftar BAPPEBTI</p>
            </div>
          </div>

        </div>

        {/* Disclaimer Section */}
        <div className="pt-8 pb-6 border-b border-white/10">
          <div className="p-4 bg-white/5 border border-white/10 text-xs leading-relaxed space-y-2">
            <div className="flex items-center gap-2 font-bold gold-text text-xs uppercase tracking-widest">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>DISCLAIMER RISIKO TRADING FOREX:</span>
            </div>
            <p className="text-[#e4e4e7]/60 text-[11px] leading-normal italic">
              "Trading forex memiliki risiko yang tinggi dan tidak cocok untuk semua orang. Informasi yang tersedia di website ini ditujukan untuk tujuan edukasi dan informasi, bukan merupakan ajakan atau jaminan keuntungan dalam aktivitas trading. Kinerja masa lalu tidak menjamin hasil di masa mendatang."
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#e4e4e7]/40 gap-2 uppercase tracking-widest">
          <p>© 2026 Rizki Apriansyah. Seluruh hak dilindungi.</p>
          <p>Sales Educator Trading — PT Valbury</p>
        </div>

      </div>
    </footer>
  );
};
