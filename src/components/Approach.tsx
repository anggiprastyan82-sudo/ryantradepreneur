import React from 'react';
import { Search, Compass, CheckCircle2, ShieldAlert, Layers } from 'lucide-react';

export const Approach: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'ANALISA',
      subtitle: 'Fondasi Pemahaman Pasar',
      desc: 'Memahami kondisi pasar melalui analisa teknikal dan fundamental.',
      details: [
        'Identifikasi tren dan market structure',
        'Evaluasi rilis data ekonomi utama (NFP, Inflasi, FOMC)',
        'Pemetaan zona support & resistance potensial',
      ],
      icon: Search,
    },
    {
      number: '02',
      title: 'PERENCANAAN',
      subtitle: 'Formulasi Skenario & Risk Management',
      desc: 'Menyusun skenario trading berdasarkan kondisi dan peluang yang tersedia.',
      details: [
        'Menentukan titik entry, Stop Loss, & Take Profit rasional',
        'Kalkulasi persentase risiko modal per transaksi',
        'Penyusunan Plan A & Plan B jika skenario berubah',
      ],
      icon: Compass,
    },
    {
      number: '03',
      title: 'EKSEKUSI',
      subtitle: 'Disiplin & Manajemen Emosi',
      desc: 'Menjalankan strategi dengan disiplin serta mempertimbangkan risiko.',
      details: [
        'Eksekusi transaksi tanpa emosi berlebihan (FOMO / Greed)',
        'Monitoring kondisi pasar aktif & manajemen posisi',
        'Pencatatan jurnal evaluasi trading berkala',
      ],
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="pendekatan" className="py-20 md:py-28 relative bg-[#0a0a0c] border-y border-white/10">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 gold-text text-[10px] font-bold tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Filosofi & Metodologi</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Bukan Sekadar Menebak Arah Pasar.
          </h2>
          <div className="w-16 h-0.5 gold-bg mx-auto mt-4 mb-4" />

          <p className="text-[#e4e4e7]/70 text-base sm:text-lg leading-relaxed italic">
            "Trading bukan tentang selalu benar dalam memprediksi pergerakan harga. Yang lebih penting adalah memahami kondisi pasar, menyusun skenario, mengelola risiko, dan menjalankan strategi dengan disiplin."
          </p>
        </div>

        {/* 3 Visual Steps Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative">
          
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.number}
                className="glass-card p-6 sm:p-8 border border-white/10 hover:border-[#38bdf8]/40 transition-all duration-300 flex flex-col justify-between relative group shadow-2xl"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold font-heading gold-text">
                      {step.number}
                    </span>
                    <div className="p-3 bg-white/5 border border-white/10 gold-text">
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white font-heading uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold gold-text uppercase tracking-widest mt-1">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Main Description */}
                  <p className="text-[#e4e4e7]/80 text-sm leading-relaxed mb-6 font-medium italic">
                    "{step.desc}"
                  </p>
                </div>

                {/* Sub Details List */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  {step.details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#e4e4e7]">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 gold-bg" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}

        </div>

        {/* Risk Management Note */}
        <div className="mt-12 glass-card p-5 sm:p-6 border border-[#38bdf8]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-6 h-6 sky-text shrink-0" />
            <p className="text-xs sm:text-sm text-[#e4e4e7]">
              <strong className="sky-text uppercase tracking-wider mr-1">Prinsip Utama:</strong> Selalu prioritaskan perlindungan modal sebelum memikirkan potensi keuntungan.
            </p>
          </div>
          <a
            href="#kalkulator"
            className="text-xs font-bold uppercase tracking-widest sky-text hover:brightness-125 whitespace-nowrap border-b border-[#38bdf8] pb-0.5"
          >
            Kalkulator Risiko Trading →
          </a>
        </div>

      </div>
    </section>
  );
};
