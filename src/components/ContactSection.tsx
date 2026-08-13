import React, { useState } from 'react';
import { MessageSquare, Phone, Instagram, Linkedin, Copy, Check, Send, ExternalLink, Mail, MapPin } from 'lucide-react';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const contactLinks = [
    {
      name: 'WhatsApp',
      handle: '+62 831-6523-7600',
      url: 'https://wa.me/6283165237600?text=Halo%20Rizki,%20saya%20ingin%20berdiskusi%20mengenai%20edukasi%20trading%20forex%20Valbury.',
      icon: Phone,
    },
    {
      name: 'Instagram',
      handle: '@rizki.valbury',
      url: 'https://instagram.com/rizki.valbury',
      icon: Instagram,
    },
    {
      name: 'LinkedIn',
      handle: 'Rizki Apriansyah',
      url: 'https://linkedin.com/in/rizki-apriansyah',
      icon: Linkedin,
    },
  ];

  const handleCopy = (text: string, name: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(name);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <section id="kontak" className="py-20 md:py-28 relative bg-[#0a0a0c]">
      
      {/* Background Radial Glow */}
      <div className="bg-glow top-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 gold-text text-[10px] font-bold tracking-widest uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Koneksi & Diskusi</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Mari Berdiskusi Tentang Pasar
          </h2>
          <div className="w-16 h-0.5 gold-bg mx-auto mt-4 mb-4" />

          <p className="text-[#e4e4e7]/70 text-base sm:text-lg italic leading-relaxed">
            Memiliki pertanyaan mengenai trading forex, analisa pasar, atau ingin berdiskusi lebih lanjut? Silakan hubungi Rizki.
          </p>
        </div>

        {/* Action Hero Box */}
        <div className="glass-card p-8 sm:p-12 border border-[#38bdf8]/40 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="text-[10px] font-bold gold-text uppercase tracking-widest bg-white/5 px-3 py-1 border border-[#38bdf8]/30">
                Layanan Diskusi Pribadi
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading uppercase tracking-wide">
                Siap Melangkah Dengan Strategi Trading Terstruktur?
              </h3>
              <p className="text-[#e4e4e7]/80 text-sm sm:text-base leading-relaxed italic">
                Jadwalkan sesi edukasi satu lawan satu atau dapatkan panduan analisa teknikal dan fundamental terbaru bersama Sales Educator PT Valbury.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-[#e4e4e7]/60 pt-2">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 gold-text" />
                  rizki.apriansyah@valbury.co.id
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 gold-text" />
                  PT Valbury Futures Indonesia
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <a
                href="https://wa.me/6283165237600?text=Halo%20Rizki,%20saya%20ingin%20berdiskusi%20mengenai%20edukasi%20trading%20forex%20Valbury."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 gold-bg text-black font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Hubungi Rizki via WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

        {/* Social & Messaging Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactLinks.map((item) => {
            const IconComp = item.icon;
            const isCopied = copiedLink === item.name;

            return (
              <div
                key={item.name}
                className="glass-card p-6 border border-white/10 hover:border-[#38bdf8]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/5 border border-white/10 gold-text">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <button
                      onClick={() => handleCopy(item.url, item.name)}
                      className="text-[10px] text-[#e4e4e7]/60 hover:text-white uppercase tracking-widest flex items-center gap-1 px-2.5 py-1 bg-white/5 border border-white/10 transition-colors"
                      title="Salin Link Kontak"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                          <span className="text-[#22c55e] font-bold">Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin Link</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h4 className="text-xl font-bold text-white font-heading uppercase tracking-wide mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs font-mono text-[#e4e4e7]/60 mb-6">
                    {item.handle}
                  </p>
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-[#38bdf8] gold-text font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all"
                >
                  <span>Buka {item.name}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
