import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      screens: {
        lg: '1100px',
      },
    },
    extend: {
      colors: {
        'shortly-cyan': 'hsl(180, 66%, 49%)',
        'shortly-dark-violet': 'hsl(257, 27%, 26%)',
        'shortly-red': 'hsl(0, 87%, 67%)',
        'shortly-gray': 'hsl(0, 0%, 75%)',
        'shortly-grayish-violet': 'hsl(257, 7%, 63%)',
        'shortly-very-dark-blue': 'hsl(255, 11%, 22%)',
        'shortly-very-dark-violet': 'hsl(260, 8%, 14%)',
      },
    },
  },
  plugins: [],
};
export default config;
