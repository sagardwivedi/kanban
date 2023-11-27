import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    colors: {
      primary: {
        background: '#2c2c38',
        color: '#6260c8',
      },
      secondary: {
        background: '#21212d',
      },
      white: '#fff',
    },
  },
  plugins: [],
};
export default config;
