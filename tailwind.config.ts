import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: 'var(--bg)',
        bgSecondary: 'var(--surface)',
        surface: 'var(--surface)',
        ice: 'var(--ice)',
        iceLine: 'var(--ice-line)',
        textPrimary: 'var(--text)',
        textSecondary: 'var(--text-secondary)',
        textMuted: 'var(--muted)',
        accent: 'var(--accent)',
        accentSoft: 'var(--accent-soft)',
        accentSurface: 'var(--accent-surface)',
        border: 'var(--hairline)',
        btn: 'var(--btn-bg)',
        btnText: 'var(--btn-text)',
      },
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      fontSize: {
        display: ['56px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h1: ['40px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['28px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        h3: ['20px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        content: '1040px',
        prose: '680px',
      },
    },
  },
  plugins: [typography],
};

export default config;
