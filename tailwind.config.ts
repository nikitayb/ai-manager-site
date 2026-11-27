import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Монохромная палитра, как на скриншоте-референсе
        ink: '#050505',
        panel: '#121212',
      },
    },
  },
  plugins: [],
};

export default config;
