import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        white : '#FFFFFF',
        background: '#F5F8FA',
        blue : {
          100 : '#DDE9F0',
          500 : '#123952'
        },
        gray : {
          100 : '#DCE2E5',
          200 : '#A0ACB2',
          400 : '#617480',
          500 : '#41414D'
        },
        yellow : {
          500 : '#EFB866'
        },
        orange : {
          500 : '#FFA585'
        },
        green : {
          100 : '#DCF5DD',
          500 : '#51B853'
        },
        red : {
          500 : '#DE3838'
        }
      },
      fontFamily : {
        sans :[ 'var(--font-saira)']
      }
    },
  },
  plugins: [],
}
export default config
