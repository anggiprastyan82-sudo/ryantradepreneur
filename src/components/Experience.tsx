import React, { useState } from 'react';
import { Briefcase, Award, GraduationCap, CheckCircle, Calendar, Building, ShieldCheck } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'valbury' | 'cert' | 'achievement'>('all');

  const valburyExperience = {
    company: 'PT Valbury Futures',
    role: 'Sales Educator Trading',
    period: '2022 — Sekarang',
    location: 'Indonesia',
    description: 'Berfokus pada edukasi trading, analisa pasar forex, serta membantu klien memahami berbagai aspek dalam aktivitas trading.',
    responsibilities: [
      'Menyelenggarakan sesi edukasi trading rutin untuk klien individu dan grup',
      'Menyusun analisa harian teknikal & fundamental untuk pasangan mata uang utama (EUR/USD, GBP/USD, USD/JPY, Gold/XAUUSD)',
      'Mendampingi klien dalam memahami manajemen risiko, kalkulasi ukuran posisi, dan penyusunan strategi trading',
      'Memberikan pemahaman mendalam terkait regulasi perdagangan berjangka dan prinsip trading yang aman',
    ],
  };

  const certifications = [
    {
      title: 'Sertifikasi Profesi Pasar Berjangka',
      issuer: 'Badan Pengawas Perdagangan Berjangka Komoditi (BAPPEBTI)',
      year: 'Terverifikasi Resmi',
      desc: 'Lisensi resmi profesional dalam industri perdagangan berjangka komoditi di Indonesia.',
    },
    {
      title: 'Technical & Fundamental Forex Educator Certification',
      issuer: 'Valbury Financial Academy',
      year: 'Program Profesional',
      desc: 'Spesialisasi pengajaran analisa chart price action, indikator teknikal, dan evaluasi data makroekonomi.',
    },
  ];

  const pastExperiences = [
    {
      company: 'Lembaga Edukasi & Konsultasi Keuangan',
      role: 'Financial Market Analyst & Facilitator',
      period: 'Pengalaman Sebelumnya',
      desc: 'Memberikan bimbingan literasi keuangan, pengenalan instrumen investasi, dan analisa instrumen derivatif bagi pemula.',
    },
  ];

  const achievements = [
    {
      title: 'Edukator Trading Terpercaya PT Valbury',
      desc: 'Secara konsisten membimbing ratusan sesi diskusi edukatif mengenai analisa pasar forex terstruktur.',
    },
    {
      title: 'Pengembang Modul "Risk-First Trading Methodology"',
      desc: 'Menyusun kurikulum edukasi yang mengutamakan proteksi modal dan kedisiplinan psikologi trading.',
    },
  ];

  return (
    <section id="pengalaman" className="py-20 md:py-28 relative bg-[#0a0a0c] border-y border-white/10">
      
      {/* Background Radial Glow */}
      <div className="bg-glow bottom-0 left-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 gold-text text-[10px] font-bold tracking-widest uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Rekam Jejak Karir</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Pengalaman Profesional
          </h2>
          <div className="w-16 h-0.5 gold-bg mx-auto mt-4 mb-4" />
          <p className="text-[#e4e4e7]/70 text-sm sm:text-base italic">
            Pengalaman dan dedikasi dalam memberikan edukasi perdagangan berjangka berstandar tinggi.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
              activeTab === 'all'
                ? 'gold-bg text-black'
                : 'bg-white/5 text-[#e4e4e7] border border-white/10 hover:border-[#38bdf8]'
            }`}
          >
            Semua Rekam Jejak
          </button>
          <button
            onClick={() => setActiveTab('valbury')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
              activeTab === 'valbury'
                ? 'gold-bg text-black'
                : 'bg-white/5 text-[#e4e4e7] border border-white/10 hover:border-[#38bdf8]'
            }`}
          >
            PT Valbury
          </button>
          <button
            onClick={() => setActiveTab('cert')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
              activeTab === 'cert'
                ? 'gold-bg text-black'
                : 'bg-white/5 text-[#e4e4e7] border border-white/10 hover:border-[#38bdf8]'
            }`}
          >
            Sertifikasi & Lisensi
          </button>
          <button
            onClick={() => setActiveTab('achievement')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
              activeTab === 'achievement'
                ? 'gold-bg text-black'
                : 'bg-white/5 text-[#e4e4e7] border border-white/10 hover:border-[#38bdf8]'
            }`}
          >
            Pencapaian
          </button>
        </div>

        {/* Main Timeline Card - PT Valbury */}
        {(activeTab === 'all' || activeTab === 'valbury') && (
          <div className="mb-10">
            <div className="glass-card p-6 sm:p-10 border border-[#38bdf8]/40 relative overflow-hidden shadow-2xl">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 border border-[#38bdf8]/40 flex items-center justify-center gold-text shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-block text-[10px] font-bold text-[#22c55e] uppercase tracking-widest border border-[#22c55e]/30 px-2 py-0.5 bg-[#22c55e]/10 mb-1">
                      Posisi Saat Ini
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading uppercase tracking-wide">
                      {valburyExperience.company}
                    </h3>
                    <p className="text-base font-bold gold-text uppercase tracking-widest">
                      {valburyExperience.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-[#e4e4e7] bg-white/5 px-4 py-2 border border-white/10 self-start md:self-auto uppercase tracking-widest">
                  <Calendar className="w-4 h-4 gold-text" />
                  <span>{valburyExperience.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#e4e4e7] text-base leading-relaxed mb-6 font-medium italic">
                "{valburyExperience.description}"
              </p>

              {/* Responsibilities list */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold gold-text uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#22c55e]" />
                  Tanggung Jawab Utama & Peran Edukasi:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {valburyExperience.responsibilities.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 text-xs text-[#e4e4e7]">
                      <CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Extra Sections: Certifications & Achievements */}
        {(activeTab === 'all' || activeTab === 'cert' || activeTab === 'achievement') && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Certifications Block */}
            <div className="glass-card p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/5 border border-white/10 gold-text">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading uppercase tracking-wide">
                    Sertifikasi & Lisensi
                  </h3>
                  <p className="text-xs text-[#e4e4e7]/60">Kualifikasi resmi & pengembangan profesional</p>
                </div>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-4 bg-white/5 border border-white/10">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-white text-sm">{cert.title}</h4>
                      <span className="text-[10px] font-bold sky-text border border-[#38bdf8]/30 px-2 py-0.5 uppercase tracking-widest">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#e4e4e7]/80 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-[#e4e4e7]/60 leading-relaxed">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Past Background */}
            <div className="glass-card p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/5 border border-white/10 gold-text">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading uppercase tracking-wide">
                    Pencapaian & Pengalaman
                  </h3>
                  <p className="text-xs text-[#e4e4e7]/60">Dedikasi dalam mengedukasi masyarakat</p>
                </div>
              </div>

              <div className="space-y-4">
                {achievements.map((ach, idx) => (
                  <div key={idx} className="p-4 bg-white/5 border border-white/10">
                    <h4 className="font-bold text-white text-sm mb-1">{ach.title}</h4>
                    <p className="text-xs text-[#e4e4e7]/70 leading-relaxed">{ach.desc}</p>
                  </div>
                ))}

                {pastExperiences.map((past, idx) => (
                  <div key={idx} className="p-4 bg-white/5 border border-white/10">
                    <span className="text-[10px] font-bold gold-text uppercase tracking-widest">{past.period}</span>
                    <h4 className="font-bold text-[#e4e4e7] text-sm mt-0.5">{past.role}</h4>
                    <p className="text-xs text-[#e4e4e7]/60 mt-1">{past.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
