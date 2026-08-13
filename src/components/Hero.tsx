import React, { useState } from 'react';
import { Shield, ArrowRight, Award, MessageCircle, BarChart3, CheckCircle2 } from 'lucide-react';
import { CandlestickBg } from './CandlestickBg';
import { TikTokModal } from './TikTokModal';

import rizkiPortrait from '../assets/images/rizki_profile_photo.jpg';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [isTikTokModalOpen, setIsTikTokModalOpen] = useState(false);

  return (
    <>
      <section id="hero" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-[#0a0a0c]">
        {/* Background Radial Glow */}
        <div className="bg-glow -top-20 -left-20"></div>
        <div className="bg-glow bottom-0 right-0"></div>

        {/* Subtle Candlestick Background */}
        <CandlestickBg opacity={0.15} />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              
              {/* Institution Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 text-[#e4e4e7] text-xs font-semibold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span>PT Valbury • Sales Educator Trading</span>
              </div>

              {/* Headline Besar dengan Akses Garis Emas */}
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 w-1 h-full gold-bg"></div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-white font-heading tracking-tight">
                  Pahami Pasar.<br />
                  Ambil Keputusan<br />
                  <span className="gold-text">Terarah.</span>
                </h1>
              </div>

              {/* Deskripsi */}
              <p className="text-base sm:text-lg text-[#e4e4e7]/80 max-w-xl leading-relaxed italic">
                "Membantu trader memahami pasar forex melalui analisa teknikal, fundamental, dan pendekatan trading yang lebih terstruktur."
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                <button
                  type="button"
                  onClick={() => setIsTikTokModalOpen(true)}
                  className="px-8 py-3.5 gold-bg text-black font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Lihat Keahlian Saya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/6283165237600?text=Halo%20Rizki,%20saya%20ingin%20berdiskusi%20mengenai%20edukasi%20trading%20forex%20Valbury."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 border gold-border gold-text font-bold uppercase text-xs tracking-widest hover:bg-white/5 transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hubungi Saya</span>
                </a>
              </div>

            {/* Key Value Points Cards Grid */}
            <div className="grid grid-cols-2 gap-3.5 w-full pt-4">
              <div className="glass-card p-4 hover:border-[#38bdf8]/40 transition-all">
                <div className="flex justify-between items-start mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest sky-text">01 Analisa Teknikal</span>
                  <span className="trading-green text-xs">📈</span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#e4e4e7]/70">
                  Menganalisa pergerakan harga, tren, market structure, dan indikator teknikal utama.
                </p>
              </div>

              <div className="glass-card p-4 hover:border-[#38bdf8]/40 transition-all">
                <div className="flex justify-between items-start mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest sky-text">02 Analisa Fundamental</span>
                  <span className="trading-green text-xs">🌍</span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#e4e4e7]/70">
                  Faktor ekonomi, kebijakan bank sentral, dan sentimen makro yang memengaruhi forex.
                </p>
              </div>

              <div className="glass-card p-4 hover:border-[#38bdf8]/40 transition-all">
                <div className="flex justify-between items-start mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest sky-text">03 Strategi Trading</span>
                  <span className="trading-green text-xs">⚙️</span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#e4e4e7]/70">
                  Penyusunan rencana berdasarkan kondisi pasar dan pengelolaan risiko yang ketat.
                </p>
              </div>

              <div className="glass-card p-4 hover:border-[#38bdf8]/40 transition-all">
                <div className="flex justify-between items-start mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest sky-text">04 Edukasi Klien</span>
                  <span className="trading-green text-xs">🎓</span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#e4e4e7]/70">
                  Pendampingan agar klien memahami cara membaca pasar secara disiplin dan mandiri.
                </p>
              </div>
            </div>

            {/* Institutional Trust Note */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#e4e4e7]/60">
              <Shield className="w-4 h-4 text-[#22c55e]" />
              <span>Pendekatan edukatif resmi & disiplin risiko bersama PT Valbury</span>
            </div>

          </div>

          {/* Right Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Backing Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8]/30 via-[#22c55e]/20 to-[#38bdf8]/30 rounded blur-xl opacity-50" />
              
              {/* Main Photo Frame */}
              <div className="relative border border-white/10 bg-[#1a1c23] overflow-hidden group shadow-2xl">
                <img
                  src={rizkiPortrait}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/images/rizki_profile_photo.jpg')) {
                      target.src = '/images/rizki_profile_photo.jpg';
                    }
                  }}
                  alt="Rizki Apriansyah - Sales Educator Trading PT Valbury"
                  className="w-full h-auto object-cover object-center max-h-[560px] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient Overlay at bottom for seamless blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />

                {/* Floating Badge 1: Role */}
                <div className="absolute top-4 left-4 glass-card p-3 max-w-[220px] border-l-2 border-l-[#38bdf8]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-[#38bdf8]/20 sky-text border border-[#38bdf8]/30">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#e4e4e7]/60">Posisi Resmi</p>
                      <p className="text-xs font-bold text-white">Sales Educator Trading</p>
                      <p className="text-[10px] sky-text font-semibold">PT Valbury</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2: Trading Specialty */}
                <div className="absolute bottom-6 left-6 right-6 glass-card p-4 border border-[#22c55e]/30">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/30">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#22c55e] uppercase tracking-widest">Personal Profile</p>
                      <p className="text-xs font-light italic text-[#e4e4e7]">
                        "Analisa yang baik dimulai dari pemahaman terhadap pasar."
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    {/* TikTok Video Embed Modal */}
    <TikTokModal
      isOpen={isTikTokModalOpen}
      onClose={() => setIsTikTokModalOpen(false)}
    />
  </>
  );
};
