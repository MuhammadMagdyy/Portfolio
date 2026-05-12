/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['"Plus Jakarta Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cyber: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        sec: {
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
        },
      },
      animation: {
        'fade-up':    'fadeUp .6s cubic-bezier(.22,1,.36,1) forwards',
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 2.5s ease-in-out infinite',
        'shimmer':    'shimmer 2.5s linear infinite',
        'ring-pulse': 'ringPulse .8s ease-out forwards',
        'badge-pop':  'badgePop .25s ease forwards',
      },
      keyframes: {
        fadeUp:    { '0%':{ opacity:0, transform:'translateY(20px)' }, '100%':{ opacity:1, transform:'translateY(0)' } },
        float:     { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-10px)' } },
        shimmer:   { '0%':{ backgroundPosition:'-200% 0' }, '100%':{ backgroundPosition:'200% 0' } },
        ringPulse: { '0%':{ transform:'scale(1)', opacity:.6 }, '100%':{ transform:'scale(2.2)', opacity:0 } },
        badgePop:  { '0%,100%':{ transform:'scale(1)' }, '50%':{ transform:'scale(1.1)' } },
      },
      boxShadow: {
        'cyber': '0 0 0 1px rgba(34,211,238,.15), 0 8px 32px rgba(34,211,238,.12)',
        'sec':   '0 0 0 1px rgba(52,211,153,.15), 0 8px 32px rgba(52,211,153,.12)',
        'amber': '0 0 0 1px rgba(251,191,36,.15),  0 8px 32px rgba(251,191,36,.12)',
        'violet':'0 0 0 1px rgba(167,139,250,.15), 0 8px 32px rgba(167,139,250,.12)',
      },
      backgroundImage: {
        'grid-dark':  'linear-gradient(rgba(34,211,238,.032) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,.032) 1px,transparent 1px)',
        'grid-light': 'linear-gradient(rgba(6,182,212,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,.055) 1px,transparent 1px)',
      },
      backgroundSize: { grid: '44px 44px' },
    },
  },
  plugins: [],
};
