import React from 'react';

export const CandlestickBg: React.FC<{ opacity?: number }> = ({ opacity = 0.15 }) => {
  // Generate random candlestick parameters for visual realism
  const candles = [
    { x: 30, open: 120, close: 90, high: 140, low: 80, isGreen: false },
    { x: 80, open: 90, close: 130, high: 145, low: 85, isGreen: true },
    { x: 130, open: 130, close: 110, high: 135, low: 100, isGreen: false },
    { x: 180, open: 110, close: 160, high: 170, low: 105, isGreen: true },
    { x: 230, open: 160, close: 190, high: 210, low: 150, isGreen: true },
    { x: 280, open: 190, close: 170, high: 200, low: 160, isGreen: false },
    { x: 330, open: 170, close: 220, high: 235, low: 165, isGreen: true },
    { x: 380, open: 220, close: 250, high: 260, low: 210, isGreen: true },
    { x: 430, open: 250, close: 230, high: 265, low: 220, isGreen: false },
    { x: 480, open: 230, close: 280, high: 290, low: 225, isGreen: true },
    { x: 530, open: 280, close: 270, high: 285, low: 255, isGreen: false },
    { x: 580, open: 270, close: 320, high: 330, low: 260, isGreen: true },
    { x: 630, open: 320, close: 300, high: 335, low: 290, isGreen: false },
    { x: 680, open: 300, close: 350, high: 360, low: 295, isGreen: true },
    { x: 730, open: 350, close: 380, high: 395, low: 340, isGreen: true },
    { x: 780, open: 380, close: 360, high: 390, low: 350, isGreen: false },
    { x: 830, open: 360, close: 410, high: 420, low: 355, isGreen: true },
    { x: 880, open: 410, close: 440, high: 450, low: 400, isGreen: true },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" style={{ opacity }}>
      <svg
        className="w-full h-full"
        viewBox="0 0 900 500"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="chartGradientGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="chartGradientGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EAB308" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        <line x1="0" y1="100" x2="900" y2="100" stroke="#1E293B" strokeDasharray="4 4" strokeWidth="1" />
        <line x1="0" y1="200" x2="900" y2="200" stroke="#1E293B" strokeDasharray="4 4" strokeWidth="1" />
        <line x1="0" y1="300" x2="900" y2="300" stroke="#1E293B" strokeDasharray="4 4" strokeWidth="1" />
        <line x1="0" y1="400" x2="900" y2="400" stroke="#1E293B" strokeDasharray="4 4" strokeWidth="1" />

        {/* Trend line */}
        <path
          d="M 30 105 L 80 110 L 130 120 L 180 135 L 230 175 L 280 180 L 330 195 L 380 235 L 430 240 L 480 255 L 530 275 L 580 295 L 630 310 L 680 325 L 730 365 L 780 370 L 830 385 L 880 425"
          stroke="#EAB308"
          strokeWidth="2"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Candlesticks */}
        {candles.map((c, idx) => {
          const top = Math.min(c.open, c.close);
          const height = Math.abs(c.open - c.close) || 4;
          const color = c.isGreen ? '#10B981' : '#EF4444';
          return (
            <g key={idx} className="transition-opacity duration-1000">
              {/* Wick */}
              <line
                x1={c.x}
                y1={500 - c.high}
                x2={c.x}
                y2={500 - c.low}
                stroke={color}
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />
              {/* Body */}
              <rect
                x={c.x - 6}
                y={500 - top - height}
                width="12"
                height={height}
                fill={color}
                fillOpacity="0.5"
                stroke={color}
                strokeWidth="1"
                rx="1"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
