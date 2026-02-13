import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',

    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '480px',
        md: '768px',
        lg: '1280px',
        xl: '1920px',
      },
      extend: {
        container: {
          center: true,
          screens: {
            sm: '100%',
            md: '991px',
            lg: '1440px',
            xl: '1920px',
          },
        },
        animation: {
          float: 'float 3s linear infinite',
          shadow: 'shadow 3s linear infinite',
          'heart-1': 'heart 1s ease-out infinite',
          'heart-2': 'heart 2s ease-out infinite',
          'heart-3': 'heart 1.5s ease-out infinite',
          'heart-4': 'heart 2.3s ease-out infinite',
          'heart-5': 'heart 1.7s ease-out infinite',
        },
        keyframes: {
          float: {
            '0%,100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-30px)' },
          },
          shadow: {
            '0%,100%': { transform: 'scaleX(1)' },
            '50%': { transform: 'scaleX(0.85)' },
          },
          heart: {
            '0%': {
              transform: 'translateY(0) rotate(-45deg) scale(0.3)',
              opacity: '1',
            },
            '100%': {
              transform: 'translateY(-150px) rotate(-45deg) scale(1.3)',
              opacity: '0.5',
            },
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
