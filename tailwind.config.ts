import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        left: {
        '0%': { transform: 'translateX(-50px)'},
        '100%': { transform: 'translateX(0)'}
        },
        right: {
          '0%': { transform: 'translateX(50px)'},
          '100%': { transform: 'translateX(0)'}
        },
        grow: {
          '0%': { width: '0'},
          '100%': { width: 'fil-content'}
        },
        popUp: {
          '0%': { transform: 'translateY(-30px)'},
          '100%': { transform: 'translateY(0)'}
        },
        scale: {
          '0%': { transform: 'scale(1)'},
          '100%': { transform: 'scale(.99)'}
        }
      },
      animation:{
        'left_right': 'left .5s linear',
        'right_left': 'right linear .5s',
        'grow_width': 'grow linear .8s',
        'up_down': 'popUp linear .5s',
        'scale': 'scale linear .2s',
      }
    },
  },
  plugins: [],
}
export default config
