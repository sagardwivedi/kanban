import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
      },
      padding: {
        13: '50px',
        26: '100px',
      },
      gap: {
        26: '100px',
      },
    },
  },
  plugins: [],
};

export default config;
