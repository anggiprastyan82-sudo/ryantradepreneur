import React, { useEffect, useRef, useState } from 'react';
import { X, ExternalLink, Play, Sparkles } from 'lucide-react';

interface TikTokModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TikTokModal: React.FC<TikTokModalProps> = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // ESC key listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // TikTok Official Embed Script initialization
    const scriptId = 'tiktok-embed-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      script.onload = () => {
        if ((window as any).tiktokEmbed?.load) {
          try {
            (window as any).tiktokEmbed.load();
          } catch (err) {
            console.warn('TikTok embed load error:', err);
          }
        }
      };
      document.body.appendChild(script);
    } else {
      if ((window as any).tiktokEmbed?.load) {
        try {
          (window as any).tiktokEmbed.load();
        } catch (err) {
          console.warn('TikTok embed load error:', err);
        }
      }
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-sm sm:max-w-md bg-[#0f1117] border border-[#38bdf8]/40 shadow-2xl overflow-hidden rounded-2xl flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-black/60">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff0050] animate-pulse" />
            <Sparkles className="w-4 h-4 sky-text" />
            <span>Keahlian & Edukasi TikTok</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/15 rounded-full transition-all border border-white/10 cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with TikTok Embed */}
        <div
          ref={containerRef}
          className="p-4 overflow-y-auto flex-1 flex flex-col items-center justify-start min-h-[420px] bg-black/40 space-y-4"
        >
          {/* TikTok Official Blockquote Embed */}
          <div className="w-full flex justify-center">
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@ryanvalbury/video/7671943129032887573"
              data-video-id="7671943129032887573"
              style={{ maxWidth: '605px', minWidth: '280px', width: '100%', margin: '0 auto' }}
            >
              <section className="p-6 text-center text-slate-300 text-sm space-y-3 bg-white/5 border border-white/10 rounded-xl">
                <div className="animate-spin w-8 h-8 border-2 border-[#38bdf8] border-t-transparent rounded-full mx-auto my-2" />
                <p className="text-xs text-slate-300 font-semibold">Memuat Video TikTok Rizki Apriansyah...</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://vt.tiktok.com/ZSV1UrqY8/"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff0050] text-white text-xs font-bold rounded-lg hover:opacity-90 transition-all mt-2"
                >
                  <span>Tonton di TikTok</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </section>
            </blockquote>
          </div>

          {/* Fallback & Direct Action Button */}
          <div className="w-full text-center pt-3 border-t border-white/10 flex flex-col items-center gap-2">
            <a
              href="https://vt.tiktok.com/ZSV1UrqY8/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 gold-bg text-black font-extrabold uppercase text-xs tracking-wider rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <Play className="w-4 h-4 fill-black" />
              <span>Tonton di TikTok</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <p className="text-[11px] text-slate-400 italic">
              @ryanvalbury • Sales Educator Trading PT Valbury Futures Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
