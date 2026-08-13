import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Send, Award, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';
import bannerValbury from '../assets/images/banner_valbury.png';
import bannerValbury2 from '../assets/images/banner_valbury_2.png';

interface BannerSliderProps {
  onOpenConsultation: () => void;
}

interface BannerSlide {
  id: number;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
}

export const BannerSlider: React.FC<BannerSliderProps> = ({ onOpenConsultation }) => {
  const slides: BannerSlide[] = [
    {
      id: 1,
      image: bannerValbury2,
      badge: 'PT Valbury Futures Indonesia',
      title: 'Solusi Edukasi & Bimbingan Trading Terpercaya',
      subtitle: 'Dapatkan pendampingan profesional, analisa teknikal harian, serta fasilitas edukasi terlengkap bersama Sales Educator PT Valbury.',
      ctaText: 'Jadwalkan Konsultasi',
    },
    {
      id: 2,
      image: bannerValbury,
      badge: 'Program Edukasi Valbury',
      title: 'Akses Platform Perdagangan Berjangka Berlisensi',
      subtitle: 'Tingkatkan pemahaman analisa teknikal, fundamental, serta pengelolaan risiko untuk trading yang konsisten.',
      ctaText: 'Konsultasi Sekarang',
    },
    {
      id: 3,
      image: bannerValbury,
      badge: 'Manajemen Risiko Trading',
      title: 'Strategi Terstruktur & Pengelolaan Modal Aman',
      subtitle: 'Pelajari penyusunan Money Management yang rasional untuk menjaga ketahanan dana dalam setiap transaksi.',
      ctaText: 'Konsultasi Strategi',
    },
    {
      id: 4,
      image: bannerValbury2,
      badge: 'Analisa Pasar Harian',
      title: 'Riset Market Komprehensif & Berita Ekonomi',
      subtitle: 'Dapatkan wawasan perkembangan pasar forex & komoditas terkini untuk dasar keputusan trading yang obyektif.',
      ctaText: 'Hubungi Rizki',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="py-12 bg-[#0a0a0c] relative overflow-hidden border-y border-white/10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#38bdf8]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Label Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 sky-text text-[10px] font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Banner Informasi & Edukasi</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 bg-white/5 border border-white/10 text-white hover:border-[#38bdf8] hover:text-[#38bdf8] transition-all"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold text-[#e4e4e7]/60 px-1">
              0{currentIndex + 1} / 0{slides.length}
            </span>
            <button
              onClick={nextSlide}
              className="p-2 bg-white/5 border border-white/10 text-white hover:border-[#38bdf8] hover:text-[#38bdf8] transition-all"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative glass-card border border-[#38bdf8]/30 overflow-hidden shadow-2xl group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Slide Aspect Box */}
          <div className="relative w-full min-h-[360px] sm:min-h-[440px] md:min-h-[480px] flex items-center">
            
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="w-full h-full object-cover object-center transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/85 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]/40 z-10" />
            </div>

            {/* Slide Text Content */}
            <div className="relative z-20 max-w-2xl p-6 sm:p-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#38bdf8]/15 border border-[#38bdf8]/40 sky-text text-[10px] font-bold uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" />
                <span>{slides[currentIndex].badge}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
                {slides[currentIndex].title}
              </h2>

              <p className="text-sm sm:text-base text-[#e4e4e7]/80 italic leading-relaxed">
                {slides[currentIndex].subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/6283165237600?text=Halo%20Rizki,%20saya%20ingin%20berdiskusi%20mengenai%20edukasi%20trading%20forex%20Valbury."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 sky-bg text-black font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all flex items-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>{slides[currentIndex].ctaText}</span>
                </a>

                <div className="flex items-center gap-2 text-xs text-[#e4e4e7]/70 bg-black/40 px-3 py-2 border border-white/10">
                  <ShieldCheck className="w-4 h-4 sky-text shrink-0" />
                  <span>Resmi & Terdaftar BAPPEBTI</span>
                </div>
              </div>
            </div>

            {/* Navigation Overlay Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/60 border border-white/20 text-white hover:border-[#38bdf8] hover:text-[#38bdf8] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/60 border border-white/20 text-white hover:border-[#38bdf8] hover:text-[#38bdf8] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* Bottom Progress / Indicator Bar */}
          <div className="absolute bottom-4 right-6 z-30 flex items-center gap-2">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 sky-bg'
                    : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
