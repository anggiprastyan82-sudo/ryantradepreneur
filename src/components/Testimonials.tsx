import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  rating: number;
  quote: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: '01',
    name: 'Andi Pratama',
    role: 'Trader Forex',
    initials: 'AP',
    avatarBg: 'from-[#38bdf8]/20 to-[#0284c7]/40 text-[#38bdf8]',
    rating: 5,
    quote:
      'Sebelum mendapatkan pendampingan, saya sering entry hanya berdasarkan feeling. Setelah belajar bersama, saya jadi lebih memahami struktur market, menentukan area entry dengan lebih jelas, dan selalu mempertimbangkan risiko sebelum mengambil keputusan.',
  },
  {
    id: '02',
    name: 'Fajar Ramadhan',
    role: 'Trader XAU/USD',
    initials: 'FR',
    avatarBg: 'from-[#eab308]/20 to-[#ca8a04]/40 text-[#eab308]',
    rating: 5,
    quote:
      'Yang paling saya rasakan adalah perubahan cara saya melihat market. Dulu mudah panik ketika harga bergerak berlawanan, sekarang saya lebih tenang karena sudah punya trading plan dan tahu kapan harus masuk maupun keluar.',
  },
  {
    id: '03',
    name: 'Rizky Maulana',
    role: 'Trader Forex',
    initials: 'RM',
    avatarBg: 'from-[#38bdf8]/20 to-[#0284c7]/40 text-[#38bdf8]',
    rating: 5,
    quote:
      'Pendampingannya bukan cuma soal mencari signal. Saya diajarkan memahami alasan di balik sebuah setup. Sekarang setiap entry yang saya ambil punya dasar analisa dan risk management yang lebih jelas.',
  },
  {
    id: '04',
    name: 'Dimas Saputra',
    role: 'Trader',
    initials: 'DS',
    avatarBg: 'from-[#eab308]/20 to-[#ca8a04]/40 text-[#eab308]',
    rating: 5,
    quote:
      'Saya sebelumnya terlalu fokus mengejar profit cepat. Setelah mendapatkan arahan, saya mulai memahami pentingnya proses, disiplin, position sizing, dan konsistensi. Cara saya menjalankan trading sekarang jauh lebih terstruktur.',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimoni" className="py-20 md:py-28 relative bg-[#08080a] overflow-hidden">
      {/* Background Glow */}
      <div className="bg-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] text-xs font-bold tracking-widest uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>TESTIMONI KLIEN</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Dipercaya Untuk Bertumbuh Lebih Terarah.
          </h2>
          
          <div className="w-16 h-0.5 gold-bg mx-auto mt-4 mb-4" />
          
          <p className="text-[#e4e4e7]/75 text-sm sm:text-base italic leading-relaxed">
            Bukan sekadar memberikan analisa, tetapi membantu membangun cara berpikir, disiplin, dan strategi trading yang lebih terstruktur.
          </p>
        </div>

        {/* Testimonials Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 border border-white/10 hover:border-[#38bdf8]/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.12)] transition-all duration-300 rounded-2xl flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                {/* Header Card: Avatar, Info, & Index */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    {/* Avatar Circle with Initials */}
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${item.avatarBg} border border-white/15 flex items-center justify-center font-bold text-sm tracking-wider shadow-md shrink-0`}>
                      {item.initials}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-heading group-hover:text-[#38bdf8] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#e4e4e7]/60 font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    {item.id}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#eab308] text-[#eab308]" />
                  ))}
                </div>

                {/* Quote Text */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-white/5 absolute -top-2 -left-2 rotate-180 pointer-events-none" />
                  <p className="text-[#e4e4e7]/85 text-xs sm:text-sm leading-relaxed italic relative z-10 pl-1">
                    «"{item.quote}"»
                  </p>
                </div>
              </div>

              {/* Bottom Decorative Tag */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                <span className="flex items-center gap-1.5 text-[#38bdf8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                  <span>Verified Mentorship</span>
                </span>
                <span className="text-slate-500 font-mono">Valbury Client</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
