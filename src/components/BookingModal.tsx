import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building } from 'lucide-react';
import { ContactFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    topic: 'Edukasi Trading Forex Dasar',
    message: '',
    preferredTime: 'Pagi (09:00 - 12:00 WIB)',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const text = `Halo Rizki, saya ingin mengajukan permohonan diskusi trading:
- Nama: ${formData.name}
- No WhatsApp: ${formData.phone}
- Email: ${formData.email}
- Topik Diskusi: ${formData.topic}
- Preferensi Waktu: ${formData.preferredTime}
${formData.message ? `- Catatan: ${formData.message}` : ''}`;
    const waUrl = `https://wa.me/6283165237600?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      topic: 'Edukasi Trading Forex Dasar',
      message: '',
      preferredTime: 'Pagi (09:00 - 12:00 WIB)',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl glass-card p-6 sm:p-8 border border-[#38bdf8]/40 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#e4e4e7]/60 hover:text-white bg-white/5 border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 bg-white/5 text-[#22c55e] border border-[#22c55e]/30 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-heading uppercase tracking-wide">
                Pesan / Permohonan Diskusi Terkirim!
              </h3>
              <p className="text-sm text-[#e4e4e7]/80 mt-2 italic">
                Terima kasih, <strong>{formData.name}</strong>. Rizki Apriansyah (Sales Educator Trading PT Valbury) akan segera menghubungi Anda melalui WhatsApp/Email.
              </p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 text-xs text-[#e4e4e7] text-left space-y-1">
              <p><strong>Topik:</strong> {formData.topic}</p>
              <p><strong>Waktu Preferensi:</strong> {formData.preferredTime}</p>
              <p><strong>Kontak:</strong> {formData.phone} ({formData.email})</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/6283165237600?text=${encodeURIComponent(
                  `Halo Rizki, saya ${formData.name} ingin berdiskusi mengenai ${formData.topic}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 sky-bg text-black font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Buka WhatsApp Sekarang</span>
              </a>

              <button
                onClick={handleReset}
                className="px-6 py-3 bg-white/10 border border-white/20 text-white font-bold uppercase text-xs tracking-widest hover:bg-white/20 transition-all"
              >
                Tutup
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold sky-text uppercase tracking-widest bg-white/5 px-3 py-1 border border-[#38bdf8]/30 mb-2">
                <Building className="w-3.5 h-3.5" />
                <span>Konsultasi Sesi Valbury</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-heading uppercase tracking-wide">
                Jadwalkan Diskusi Trading
              </h3>
              <p className="text-xs text-[#e4e4e7]/70 mt-1 italic">
                Isi formulir singkat di bawah ini untuk berdiskusi mengenai analisa pasar forex, strategi, atau edukasi trading bersama Rizki Apriansyah.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold sky-text uppercase tracking-widest mb-1">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 text-white text-sm focus:border-[#38bdf8] focus:outline-none"
                  placeholder="Contoh: Budi Pratama"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold sky-text uppercase tracking-widest mb-1">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 text-white text-sm focus:border-[#38bdf8] focus:outline-none"
                    placeholder="081234567890"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold sky-text uppercase tracking-widest mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 text-white text-sm focus:border-[#38bdf8] focus:outline-none"
                    placeholder="budi@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold sky-text uppercase tracking-widest mb-1">
                  Topik Utama Diskusi
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#1a1c23] border border-white/10 text-white text-sm focus:border-[#38bdf8] focus:outline-none"
                >
                  <option value="Edukasi Trading Forex Dasar">Edukasi Trading Forex Dasar</option>
                  <option value="Pendalaman Analisa Teknikal">Pendalaman Analisa Teknikal</option>
                  <option value="Penerapan Analisa Fundamental (Macro)">Penerapan Analisa Fundamental (Macro)</option>
                  <option value="Penyusunan Manajemen Risiko & Money Management">Penyusunan Manajemen Risiko & Money Management</option>
                  <option value="Informasi Layanan PT Valbury">Informasi Layanan PT Valbury</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold sky-text uppercase tracking-widest mb-1">
                  Preferensi Waktu Sesi
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#1a1c23] border border-white/10 text-white text-sm focus:border-[#38bdf8] focus:outline-none"
                >
                  <option value="Pagi (09:00 - 12:00 WIB)">Pagi (09:00 - 12:00 WIB)</option>
                  <option value="Siang (13:00 - 15:00 WIB)">Siang (13:00 - 15:00 WIB)</option>
                  <option value="Sore (16:00 - 18:00 WIB)">Sore (16:00 - 18:00 WIB)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold sky-text uppercase tracking-widest mb-1">
                  Pesan / Catatan Tambahan (Opsional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm focus:border-[#38bdf8] focus:outline-none"
                  placeholder="Tuliskan pertanyaan atau hal spesifik yang ingin dibahas..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 gold-bg text-black font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Permohonan Konsultasi</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
