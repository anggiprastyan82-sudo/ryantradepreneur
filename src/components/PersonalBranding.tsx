import React, { useState, useEffect } from 'react';
import { Quote, Activity } from 'lucide-react';

export const PersonalBranding: React.FC = () => {
  const [linePoints, setLinePoints] = useState<number[]>([
    120, 140, 110, 160, 150, 190, 175, 220, 210, 250, 240, 290, 280, 320
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLinePoints((prev) =>
        prev.map((val) => {
          const delta = (Math.random() - 0.48) * 8;
          return Math.max(90, Math.min(340, val + delta));
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const pathD = linePoints
    .map((val, idx) => {
      const x = (idx / (linePoints.length - 1)) * 800;
      return `${idx === 0 ? 'M' : 'L'} ${x} ${400 - val}`;
    })
    .join(' ');

  return (
    <section className="py-24 relative bg-[#0a0a0c] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="bg-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Quote Card */}
        <div className="glass-card p-8 sm:p-14 border border-[#38bdf8]/40 text-center relative overflow-hidden shadow-2xl">
          
          {/* Subtle Abstract Wave Line Visual */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg viewBox="0 0 800 400" preserveAspectRatio="none" className="w-full h-full">
              <path
                d={pathD}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
                className="transition-all duration-1000 ease-in-out"
              />
              <path
                d={`${pathD} L 800 400 L 0 400 Z`}
                fill="url(#goldQuoteGrad)"
                opacity="0.3"
                className="transition-all duration-1000 ease-in-out"
              />
              <defs>
                <linearGradient id="goldQuoteGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 space-y-6">
            
            {/* Quote Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/5 gold-text border border-white/10">
              <Quote className="w-7 h-7" />
            </div>

            {/* Quote Text */}
            <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-snug sm:leading-tight">
              "Analisa yang baik dimulai dari pemahaman terhadap pasar."
            </blockquote>

            {/* Author Credit */}
            <div className="pt-2 flex flex-col items-center justify-center space-y-1">
              <span className="text-lg font-bold gold-text font-heading uppercase tracking-widest">
                Rizki Apriansyah
              </span>
              <p className="text-xs font-semibold text-[#e4e4e7]/60 tracking-widest uppercase">
                Sales Educator Trading — PT Valbury
              </p>
            </div>

            {/* Subtle Live Trading Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/5 border border-white/10 text-[11px] text-[#22c55e] font-mono mt-4">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>PASAR TERUS BERGERAK • STRATEGI MENUNTUN KEPUTUSAN</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
