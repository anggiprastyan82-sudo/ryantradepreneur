import React from 'react';
import { BarChart, Compass, GraduationCap, HeartHandshake } from 'lucide-react';

export const ClientValue: React.FC = () => {
  const values = [
    {
      num: '01',
      title: 'Analisa Pasar',
      description: 'Insight berdasarkan pendekatan teknikal dan fundamental.',
      details: 'Menyajikan pandangan obyektif mengenai dinamika harga, volatilitas, dan potensi tren pasar tanpa bias opini.',
      icon: BarChart,
    },
    {
      num: '02',
      title: 'Pendekatan Terstruktur',
      description: 'Membantu klien memahami proses analisa dan perencanaan trading.',
      details: 'Membimbing pembentukan kerangka kerja analitis agar setiap transaksi didasari alasan rasional dan terukur.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Edukasi Berkelanjutan',
      description: 'Berbagi pengetahuan agar klien dapat memahami pasar dengan lebih baik.',
      details: 'Konsistensi dalam pembaruan wawasan pasar, pembahasan isu makroekonomi, dan pengembangan literasi trading.',
      icon: GraduationCap,
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#0a0a0c]">
      
      {/* Background Radial Glow */}
      <div className="bg-glow top-0 right-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 gold-text text-[10px] font-bold tracking-widest uppercase mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Nilai Tambah & Komitmen Edukator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Membantu Klien Memahami Pasar
          </h2>
          <div className="w-16 h-0.5 gold-bg mx-auto mt-4 mb-4" />
          <p className="text-[#e4e4e7]/70 text-sm sm:text-base italic">
            Mendorong independensi dan kedisiplinan setiap klien melalui pendekatan edukasi profesional.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 sm:p-8 border border-white/10 hover:border-[#38bdf8]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center gold-text group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold gold-text uppercase tracking-widest">{item.num}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 font-heading uppercase tracking-wide">
                    {item.title}
                  </h3>

                  <p className="gold-text font-semibold text-sm mb-3 leading-snug italic">
                    "{item.description}"
                  </p>

                  <p className="text-[#e4e4e7]/70 text-xs sm:text-sm leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#e4e4e7]/50">
                  <span className="uppercase tracking-widest text-[10px]">Standar Valbury</span>
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
