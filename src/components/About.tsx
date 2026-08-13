import React from 'react';
import { BookOpen, LineChart, PieChart, ShieldCheck, Users, Building2, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      title: 'Edukasi Trading Forex',
      desc: 'Membangun pemahaman mendalam tentang mekanisme dan dinamika pasar forex secara aman & obyektif.',
      icon: BookOpen,
      num: '01',
    },
    {
      title: 'Analisa Teknikal',
      desc: 'Membaca market structure, candlestick patterns, support/resistance, dan indikator dengan presisi.',
      icon: LineChart,
      num: '02',
    },
    {
      title: 'Analisa Fundamental',
      desc: 'Memahami dampak data makroekonomi, inflasi, dan kebijakan bank sentral global pada pasangan mata uang.',
      icon: PieChart,
      num: '03',
    },
    {
      title: 'Strategi Trading',
      desc: 'Menyusun rencana trading dengan rasio risk-to-reward yang rasional dan manajemen modal terdisiplin.',
      icon: ShieldCheck,
      num: '04',
    },
    {
      title: 'Pendampingan Klien',
      desc: 'Memberikan bimbingan kontinu agar klien terus berkembang dalam mengambil keputusan independen.',
      icon: Users,
      num: '05',
    },
  ];

  return (
    <section id="tentang" className="py-20 md:py-28 relative bg-[#0a0a0c] border-y border-white/10">
      
      {/* Background Radial Glow */}
      <div className="bg-glow top-1/2 left-0 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Badge */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 gold-text text-[10px] font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profil Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Mengenal Rizki Apriansyah
          </h2>
          <div className="w-16 h-0.5 gold-bg mt-4" />
        </div>

        {/* Main Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bio Text Column */}
          <div className="lg:col-span-6 glass-card p-8 sm:p-10 border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-[#38bdf8] pointer-events-none">
              <Building2 className="w-48 h-48" />
            </div>

            <div className="relative z-10 space-y-6 text-[#e4e4e7] text-base leading-relaxed">
              <div className="inline-block sky-text text-xs font-bold uppercase tracking-widest bg-[#38bdf8]/10 px-3 py-1 border border-[#38bdf8]/20">
                PT Valbury Sales Educator
              </div>

              <p className="font-semibold text-white text-lg sm:text-xl leading-snug">
                Rizki Apriansyah merupakan Sales Educator Trading di PT Valbury yang berfokus pada edukasi dan analisa pasar forex.
              </p>

              <p className="text-[#e4e4e7]/80 text-sm sm:text-base leading-relaxed">
                Dengan pendekatan yang menggabungkan analisa teknikal dan fundamental, Rizki membantu klien memahami pergerakan pasar, menyusun strategi, serta mengambil keputusan trading dengan lebih terstruktur.
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 border border-[#38bdf8]/30 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 sky-text" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base uppercase tracking-wide">PT Valbury Futures</h4>
                  <p className="text-xs text-[#e4e4e7]/60">Penyedia Layanan Perdagangan Berjangka Terkemuka di Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="mb-2">
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2 uppercase tracking-wide">
                <span className="w-2 h-2 gold-bg" />
                Fokus Utama Edukasi & Pendampingan
              </h3>
              <p className="text-xs text-[#e4e4e7]/60 mt-1">
                Pilar materi utama yang diberikan dalam sesi edukasi bersama Rizki Apriansyah
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-5 border border-white/10 hover:border-[#38bdf8]/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 bg-white/5 text-[#38bdf8] border border-white/10 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold gold-text uppercase tracking-widest">{item.num}</span>
                    </div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#e4e4e7]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
