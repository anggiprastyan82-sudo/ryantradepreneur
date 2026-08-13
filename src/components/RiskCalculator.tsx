import React, { useState } from 'react';
import { Calculator, Info } from 'lucide-react';

export const RiskCalculator: React.FC = () => {
  const [accountBalance, setAccountBalance] = useState<number>(1000);
  const [riskPercent, setRiskPercent] = useState<number>(1);
  const [stopLossPips, setStopLossPips] = useState<number>(30);
  const [pairType, setPairType] = useState<'standard' | 'jpy' | 'gold'>('standard');

  const riskAmountUSD = accountBalance * (riskPercent / 100);

  let pipValuePerLot = 10;
  if (pairType === 'jpy') pipValuePerLot = 9.1;
  if (pairType === 'gold') pipValuePerLot = 10;

  const calculatedLotSize = stopLossPips > 0 ? (riskAmountUSD / (stopLossPips * pipValuePerLot)) : 0;
  const formattedLot = calculatedLotSize.toFixed(2);

  return (
    <section id="kalkulator" className="py-20 md:py-28 relative bg-[#0a0a0c] border-y border-white/10">
      
      {/* Background Radial Glow */}
      <div className="bg-glow top-0 left-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 gold-text text-[10px] font-bold tracking-widest uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Alat Edukasi Trading</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Kalkulator Manajemen Risiko Trading
          </h2>
          <div className="w-16 h-0.5 gold-bg mx-auto mt-4 mb-4" />
          <p className="text-[#e4e4e7]/70 text-sm sm:text-base italic">
            Gunakan kalkulator ini untuk menyimulasikan ukuran lot ideal berdasarkan batas risiko modal Anda per transaksi.
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="max-w-4xl mx-auto glass-card p-6 sm:p-10 border border-[#38bdf8]/30 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="space-y-5">
              
              {/* Account Balance */}
              <div>
                <label className="block text-xs font-bold sky-text uppercase tracking-widest mb-2">
                  Saldo Akun (USD):
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 sky-text font-bold text-sm">$</span>
                  <input
                    type="number"
                    value={accountBalance}
                    onChange={(e) => setAccountBalance(Math.max(10, Number(e.target.value)))}
                    className="w-full pl-8 pr-4 py-3 bg-white/5 border border-white/10 text-white font-bold text-base focus:border-[#38bdf8] focus:outline-none"
                    placeholder="1000"
                  />
                </div>
              </div>

              {/* Risk Percentage */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold sky-text uppercase tracking-widest">
                    Batas Risiko Modal (%):
                  </label>
                  <span className="text-xs font-bold sky-text border border-[#38bdf8]/30 px-2 py-0.5 bg-white/5">
                    {riskPercent}% (${riskAmountUSD.toFixed(2)})
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.5"
                  value={riskPercent}
                  onChange={(e) => setRiskPercent(Number(e.target.value))}
                  className="w-full accent-[#38bdf8] cursor-pointer h-2 bg-white/10"
                />
                <div className="flex justify-between text-[10px] text-[#e4e4e7]/50 mt-1 uppercase tracking-wider">
                  <span>0.5% (Konservatif)</span>
                  <span>1.0% (Standar)</span>
                  <span>2.0% (Moderat)</span>
                  <span>5.0% (Maksimal)</span>
                </div>
              </div>

              {/* Pair Type Selection */}
              <div>
                <label className="block text-xs font-bold sky-text uppercase tracking-widest mb-2">
                  Instrumen Forex:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setPairType('standard')}
                    className={`py-2 px-3 text-xs font-bold uppercase tracking-widest transition-all ${
                      pairType === 'standard'
                        ? 'gold-bg text-black'
                        : 'bg-white/5 text-[#e4e4e7] border border-white/10 hover:border-[#38bdf8]'
                    }`}
                  >
                    EUR/USD & Major
                  </button>
                  <button
                    onClick={() => setPairType('jpy')}
                    className={`py-2 px-3 text-xs font-bold uppercase tracking-widest transition-all ${
                      pairType === 'jpy'
                        ? 'gold-bg text-black'
                        : 'bg-white/5 text-[#e4e4e7] border border-white/10 hover:border-[#38bdf8]'
                    }`}
                  >
                    USD/JPY & Cross
                  </button>
                  <button
                    onClick={() => setPairType('gold')}
                    className={`py-2 px-3 text-xs font-bold uppercase tracking-widest transition-all ${
                      pairType === 'gold'
                        ? 'gold-bg text-black'
                        : 'bg-white/5 text-[#e4e4e7] border border-white/10 hover:border-[#38bdf8]'
                    }`}
                  >
                    XAUUSD (Emas)
                  </button>
                </div>
              </div>

              {/* Stop Loss Pips */}
              <div>
                <label className="block text-xs font-bold sky-text uppercase tracking-widest mb-2">
                  Jarak Stop Loss (Pips):
                </label>
                <input
                  type="number"
                  value={stopLossPips}
                  onChange={(e) => setStopLossPips(Math.max(1, Number(e.target.value)))}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-bold text-base focus:border-[#38bdf8] focus:outline-none"
                  placeholder="30"
                />
              </div>

            </div>

            {/* Results Output Box */}
            <div className="glass-card p-6 border border-[#38bdf8]/40 text-center flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-[10px] font-bold sky-text uppercase tracking-widest border border-[#38bdf8]/30 px-3 py-1 bg-white/5">
                  Rekomendasi Ukuran Posisi
                </span>
                
                <div className="my-6">
                  <p className="text-xs text-[#e4e4e7]/60 mb-1 uppercase tracking-widest">Maksimum Lot Disarankan:</p>
                  <div className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight sky-text">
                    {formattedLot} <span className="text-2xl font-bold text-[#38bdf8]">Lot</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#e4e4e7] bg-white/5 p-4 border border-white/10 text-left">
                  <div className="flex justify-between">
                    <span className="text-[#e4e4e7]/60">Batas Toleransi Kerugian:</span>
                    <span className="font-bold sky-text">${riskAmountUSD.toFixed(2)} USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#e4e4e7]/60">Jarak Stop Loss:</span>
                    <span className="font-bold text-white">{stopLossPips} Pips</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#e4e4e7]/60">Estimasi Kerugian Per Pip:</span>
                    <span className="font-bold text-white">${(riskAmountUSD / (stopLossPips || 1)).toFixed(2)} USD</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-white/5 border border-[#38bdf8]/30 text-[11px] text-[#e4e4e7] text-left flex items-start gap-2">
                <Info className="w-4 h-4 sky-text shrink-0 mt-0.5" />
                <span>
                  <strong className="sky-text uppercase tracking-widest mr-1">Edukasi Valbury:</strong> Penggunaan ukuran lot yang sesuai dengan batas toleransi risiko adalah kunci utama agar posisi trading tetap aman dari margin call.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
