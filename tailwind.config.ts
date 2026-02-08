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
      },
    },
  },
  plugins: [],
};
export default config;
