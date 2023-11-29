import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        primary: {
          background_dark: '#2c2c38',
          background_light: '#f3f7ff',
          color: '#6260c8',
        },
        secondary: {
          background_dark: '#21212d',
          background_light: '#ffffff',
          color: '#515151',
        },
        white: '#fff',
      },
    },
  },
  plugins: [],
};
export default config;
