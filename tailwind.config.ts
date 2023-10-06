import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#e0fbff',
          '100': '#cbf2ff',
          '200': '#9ae2ff',
          '300': '#64d2ff',
          '400': '#3cc5fe',
          '500': '#23bcfe',
          '600': '#09b8ff',
          '700': '#00a1e4',
          '800': '#0090cd',
          '900': '#007cb5',
          '950': '#13250e', // If you want to include this custom color
        },
        secondary: {},
      },
      container: {
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}
export default config
