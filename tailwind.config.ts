import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: { colors: { sand: '#F6F3EE', charcoal: '#2F2F2F' } } },
  plugins: []
} satisfies Config;
