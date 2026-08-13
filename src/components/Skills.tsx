import React, { useState } from 'react';
import { CandlestickChart, Globe, Target, GraduationCap, ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import { GalleryModal } from './GalleryModal';

export const Skills: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const skillsList = [
    {
      id: 'teknikal',
      num: '01',
      title: 'Analisa Teknikal',
      description: 'Menganalisa pergerakan harga, tren, market structure, support & resistance, serta berbagai indikator teknikal untuk membantu membaca peluang pasar.',
      icon: CandlestickChart,
      badge: 'Price Action & Indicators',
      tags: ['Market Structure', 'Support & Resistance', 'Candlestick Pattern', 'Trend Analysis'],
      hasGallery: true,
    },
    {
      id: 'fundamental',
      num: '02',
      title: 'Analisa Fundamental',
      description: 'Menganalisa faktor ekonomi, kebijakan bank sentral, berita ekonomi, sentimen pasar, dan faktor makro yang dapat memengaruhi pergerakan forex.',
      icon: Globe,
      badge: 'Macro & Economic Policy',
      tags: ['Bank Sentral (Fed/ECB/BOJ)', 'Suku Bunga & Inflasi', 'Economic Calendar (NFP/CPI)', 'Sentimen Global'],
      hasGallery: false,
    },
    {
      id: 'strategi',
      num: '03',
      title: 'Strategi Trading',
      description: 'Membantu menyusun pendekatan trading yang lebih terstruktur berdasarkan kondisi pasar, peluang, serta pengelolaan risiko.',
      icon: Target,
      badge: 'Risk & Portfolio Management',
      tags: ['Position Sizing', 'Risk-to-Reward Ratio', 'Skenario Trading', 'Rule-Based Trading'],
      hasGallery: false,
    },
    {
      id: 'edukasi',
      num: '04',
      title: 'Edukasi & Pendampingan',
      description: 'Memberikan edukasi dan pendampingan kepada klien agar lebih memahami cara membaca pasar dan mengambil keputusan trading secara disiplin.',
      icon: GraduationCap,
      badge: 'Interactive Coaching',
      tags: ['Mentoring One-on-One', 'Webinar Trading', 'Disiplin Psikologi', 'Evaluasi Jurnal'],
      hasGallery: false,
    },
  ];

  return (
    <>
      <section id="keahlian" className="py-20 md:py-28 relative bg-[#0a0a0c]">
        
        {/* Background Radial Glow */}
        <div className="bg-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-widest gold-text mb-2">
              Kompetensi & Kapabilitas
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              Keahlian Utama
            </h2>
            <div className="w-16 h-0.5 gold-bg mx-auto mt-4 mb-4" />
            <p className="text-[#e4e4e7]/70 text-sm sm:text-base italic">
              Penguasaan komprehensif dalam instrumen perdagangan forex untuk mendukung setiap langkah pengambilan keputusan trader.
            </p>
          </div>

          {/* 4 Premium Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsList.map((skill) => {
              const IconComp = skill.icon;
              return (
                <div
                  key={skill.id}
                  onClick={() => {
                    if (skill.hasGallery) {
                      setIsGalleryOpen(true);
                    }
                  }}
                  className={`glass-card p-6 sm:p-8 border border-white/10 transition-all duration-300 group flex flex-col justify-between ${
                    skill.hasGallery
                      ? 'cursor-pointer hover:border-[#38bdf8] hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transform hover:-translate-y-1'
                      : 'hover:border-[#38bdf8]/40'
                  }`}
                >
                  <div>
                    {/* Top Bar: Icon + Number & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center gold-text group-hover:scale-105 transition-transform duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        {skill.hasGallery && (
                          <span className="text-[10px] font-bold tracking-widest text-[#38bdf8] uppercase border border-[#38bdf8]/30 px-2.5 py-1 bg-[#38bdf8]/10 flex items-center gap-1.5 animate-pulse">
                            <ImageIcon className="w-3 h-3" />
                            <span>Galeri Portfolio</span>
                          </span>
                        )}
                        <span className="text-[10px] font-bold tracking-widest text-[#e4e4e7]/60 uppercase border border-white/10 px-2.5 py-1 bg-white/5">
                          {skill.badge}
                        </span>
                        <span className="text-xs font-bold gold-text uppercase tracking-widest pl-2">
                          {skill.num}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 font-heading uppercase tracking-wide flex items-center justify-between">
                      <span>{skill.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#e4e4e7]/40 group-hover:gold-text transition-colors" />
                    </h3>

                    {/* Description */}
                    <p className="text-[#e4e4e7]/80 text-sm leading-relaxed mb-6 italic">
                      "{skill.description}"
                    </p>
                  </div>

                  {/* Sub-tags */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between mb-2.5">
                      <p className="text-[10px] uppercase tracking-widest gold-text font-bold">
                        Cakupan Pembahasan:
                      </p>
                      {skill.hasGallery && (
                        <p className="text-[11px] font-semibold text-[#38bdf8] group-hover:underline flex items-center gap-1">
                          <span>Klik untuk lihat 4 foto contoh</span>
                          <span>→</span>
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-2.5 py-1 bg-white/5 text-[#e4e4e7] border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Lightbox / Gallery Modal */}
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </>
  );
};
