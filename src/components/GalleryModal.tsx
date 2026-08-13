import React, { useEffect, useState, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles } from 'lucide-react';

import analisa1 from '../assets/images/analisa_1.jpg';
import analisa2 from '../assets/images/analisa_2.jpg';
import analisa3 from '../assets/images/analisa_3.jpg';
import analisa4 from '../assets/images/analisa_4.jpg';

export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category?: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: analisa1,
    title: 'Trading Opportunity — XAU/USD | Analisa Teknikal',
    category: 'Analisa Teknikal',
  },
  {
    id: 2,
    src: analisa2,
    title: 'Trading Results — XAU/USD Performance',
    category: 'Hasil Trading',
  },
  {
    id: 3,
    src: analisa3,
    title: 'Trading Opportunity — XAU/USD | Entry, TP & SL',
    category: 'Sinyal & Eksekusi',
  },
  {
    id: 4,
    src: analisa4,
    title: 'Trading Results — XAU/USD Performance',
    category: 'Hasil Trading',
  },
];

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      // Preload all gallery images so switching is instant and smooth
      galleryData.forEach((item) => {
        const img = new Image();
        img.src = item.src;
      });
    }
  }, [isOpen, initialIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (diffX > 50) {
      handleNext();
    } else if (diffX < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  if (!isOpen) return null;

  const currentItem = galleryData[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-5xl h-[92vh] max-h-[900px] bg-[#0c0d12] border border-[#38bdf8]/30 shadow-2xl rounded-2xl overflow-hidden flex flex-col justify-between">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-black/60 shrink-0">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4 gold-text" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Galeri Analisa Teknikal XAU/USD
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-full">
              {currentIndex + 1} / {galleryData.length}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/15 rounded-full transition-all border border-white/10 cursor-pointer"
              aria-label="Tutup Galeri"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image Stage */}
        <div
          className="relative flex-1 bg-black/60 flex items-center justify-center p-2 sm:p-6 overflow-hidden select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-white bg-black/60 hover:bg-[#38bdf8] hover:text-black border border-white/20 rounded-full transition-all shadow-xl cursor-pointer"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Main Image Display with fit contain */}
          <div className="w-full h-full flex items-center justify-center relative">
            <img
              key={currentItem.id}
              src={currentItem.src}
              alt={currentItem.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300 transform scale-100"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-white bg-black/60 hover:bg-[#38bdf8] hover:text-black border border-white/20 rounded-full transition-all shadow-xl cursor-pointer"
            aria-label="Foto Selanjutnya"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Caption & Thumbnails Footer */}
        <div className="bg-[#08090d] border-t border-white/10 p-3 sm:p-4 shrink-0 flex flex-col items-center gap-3">
          {/* Caption */}
          <div className="text-center px-2 max-w-2xl">
            <h4 className="text-sm sm:text-base font-bold text-white tracking-wide font-heading flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 gold-text shrink-0" />
              <span>{currentItem.title}</span>
            </h4>
          </div>

          {/* Thumbnails Row */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto max-w-full py-1 px-2">
            {galleryData.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-14 h-10 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 shrink-0 cursor-pointer ${
                    isActive
                      ? 'border-[#38bdf8] scale-105 ring-2 ring-[#38bdf8]/40 shadow-lg'
                      : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/40'
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-[#38bdf8]/10 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

