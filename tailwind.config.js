/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: 'var(--bg-canvas)',
        },
        surface: {
          DEFAULT: 'var(--bg-surface-glass)',
          elevated: 'var(--bg-surface-glass-elevated)',
          interactive: 'var(--bg-surface-glass-interactive)',
          border: 'var(--border-glass)',
          highlight: 'var(--border-glass-highlight)',
        },
        primary: {
          DEFAULT: '#0066FF',
          hover: '#1A75FF',
          dark: '#004CE6',
          subtle: 'rgba(0, 102, 255, 0.12)',
          glow: 'rgba(0, 102, 255, 0.45)',
        },
        hacker: {
          blue: '#0066FF',
          neon: '#00E5FF',
          deep: '#003399',
          cobalt: '#0052FF',
          dark: '#04091A',
        },
        cyber: {
          950: '#030712',
          900: '#050B18',
          850: '#071024',
          800: '#0A1733',
          700: '#0F224D',
          600: '#15316E',
        },
        accent: {
          indigo: '#0066FF',
          icy: '#60A5FA',
          cyan: '#00E5FF',
          violet: '#818CF8',
          'cyan-subtle': 'rgba(0, 229, 255, 0.12)',
          'icy-subtle': 'rgba(0, 102, 255, 0.12)',
        },
        content: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        status: {
          success: '#00FF9D',
          'success-subtle': 'rgba(0, 255, 157, 0.12)',
          warning: '#FFB800',
          'warning-subtle': 'rgba(255, 184, 0, 0.12)',
          danger: '#FF3366',
          'danger-subtle': 'rgba(255, 51, 102, 0.12)',
          info: '#00E5FF',
          'info-subtle': 'rgba(0, 229, 255, 0.12)',
        },
        obsidian: {
          950: '#000000',
          900: '#020408',
          850: '#050812',
          800: '#080d1c',
          750: '#0c1326',
          700: '#101a33',
        },
        difficulty: {
          easy: '#00FF9D',
          medium: '#FFB800',
          hard: '#FF3366',
        }
      },
      fontFamily: {
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glass-ambient': 'var(--shadow-ambient)',
        'glass-elevated': 'var(--shadow-elevated)',
        'glow-hacker': '0 0 25px -2px rgba(0, 102, 255, 0.5), 0 0 10px rgba(0, 229, 255, 0.35)',
        'glow-cyan': '0 0 20px -2px rgba(0, 229, 255, 0.45)',
        'glow-sm': '0 0 12px -2px rgba(0, 102, 255, 0.4)',
      },
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
      }
    },
  },
  plugins: [],
};
