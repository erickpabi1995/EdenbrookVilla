/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    screens: {
      sm: '320px',
      md: '636px',
      lg: '1008px',
      xl: '1499px',
    },
    extend: {
      maxHeight: {
        '6/10': 'calc(100vh - 500px)',
        '7/10': 'calc(100vh - 400px)',
        '8/10': 'calc(100vh - 250px)',
        '9/10': 'calc(100vh - 100px)',
        '0.5screen': '50vh',
        4.7: '4.7rem',
      },
      minWidth: {
        24: '6rem',
        28: '7rem',
        64: '16rem',
      },
      opacity: {
        '05': '0.05',
      },
      flex: {
        6: '6',
      },
      width: {
        9.5: '2.4rem',
        13: '3.2rem',
        '1/10': '10%',
        '2/10': '20%',
        '5/10': '50%',
        '6/10': '60%',
      },
      height: {
        9.5: '2.4rem',
      },
      padding: {
        9.5: '2.4rem',
        15: '3.75rem',
      },
      boxShadow: {
        '3xl': '0 6px 24px 0 rgba(0,0,0,0.12)',
        '4xl':
          'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      },
      fontSize: {
        '1xs': '.8rem',
        '4-5xl': '2.4rem',
        xl: '1.25rem',
        '2xl': '1.4rem',
        '3xl': '1.8rem',
        '4xl': '2rem',
        '5xl': '3.2rem',
        '6xl': '4.2rem',
      },
      lineHeight: {
        12: '3rem',
      },
      gridTemplateColumns: {
        'dashboard-lg': '0.13fr 2.07fr 0.8fr',
        'dashboard-sm': '0.4fr 1.8fr 0.8fr',
      },
      gap: {
        small: '16px',
        medium: '16px',
        large: '16px',
      },
      colors: {
        // Design System Primary Colors
        primary: {
          magenta: '#E20074',
          'magenta-hover': '#C5006A',
          'magenta-active': '#A8005C',
        },
        // Design System Neutral Colors
        neutral: {
          white: '#FFFFFF',
          'gray-50': '#F9FAFB',
          'gray-100': '#F3F4F6',
          'gray-200': '#E5E7EB',
          'gray-300': '#D1D5DB',
          'gray-400': '#9CA3AF',
          'gray-600': '#4B5563',
          'gray-800': '#1F2937',
          'gray-900': '#111827',
        },
        // Design System Semantic Colors
        semantic: {
          error: '#DC2626',
          'error-bg': '#FEE2E2',
          'error-border': '#FCA5A5',
          warning: '#F59E0B',
          'warning-bg': '#FEF3C7',
          success: '#10B981',
          info: '#3B82F6',
        },
        // Legacy colors (keeping for compatibility)
        magenta: {
          900: '#e20074', // Primary color
          800: '#cc036a',
        },
        black: {
          900: '#000000', // Black and White
        },
        grey: {
          900: '#251d2a',
          800: '#262626', // Shades of grey / Component color - Light
          700: '#383838', // Component color - Dark
          600: '#4b4b4b', // Shades of grey / Component color - Dark
          500: '#6b6b6b', // Component color - Light
          400: '#737373', // Component color - Dark
          300: '#6c6c6c', // Shades of grey
          200: '#7c7c7c', // Shades of grey
          100: '#a4a4a4', // Shades of grey
          50: '#a3a3a3', // Component color - Dark
        },
        lightGrey: {
          900: '#b2b2b2', // Component color - Light
          800: '#d0d0d0', // Shades of grey
          700: '#dcdcdc', // Component color - Light
          600: '#ececec', // Shades of grey
          500: '#dedede', // Shades of grey / Component color - Light
          400: '#f7f7f7',
        },
        red: {
          900: '#d90000', // Functional color
          800: '#e8aba7', // Secondary color
        },
        purple: {
          900: '#734d7c',
          100: '#e1dce6',
          50: '#eee9ef',
        },
        yellow: {
          900: '#dbad39', // Secondary color
          800: '#ffd329', // Secondary color
          700: '#fecb00', // Functional color
          600: '#ffde5d', // Secondary color
          500: '#ffff00', // Component color - Dark / Component color - Light
        },
        orange: {
          900: '#ff9a1e', // Secondary color
          800: '#d48936', // Secondary color
          700: '#ffb356', // Secondary color
        },
        blue: {
          900: '#235482', // Secondary color
          800: '#1063ad', // Secondary color
          700: '#00739f', // Component color - Light
          600: '#317cb3', // Secondary color
          500: '#009de0', // Functional color
          400: '#53baf2', // Secondary color
          300: '#31c3f7', // Component color - Dark
          200: '#7ecbf5', // Secondary color,
          100: '#E5F5FD',
          50: '#add8e6',
        },
        petrol: {
          900: '#218076', // Secondary color
          800: '#1bada2', // Secondary color
          700: '#65c8c0', // Secondary color
        },
        green: {
          900: '#46a800', // Functional color
          800: '#889130', // Secondary color
          700: '#bfcb44', // Secondary color
          600: '#cfd873', // Secondary color
        },
        darkGreen: {
          900: '#306100',
        },
      },
      fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
        theseasons: ['TheSeasons', 'sans-serif'],
        sans: ['system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'zoom-in-95': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'zoom-out-95': {
          from: { opacity: '1', transform: 'scale(1)' },
          to: { opacity: '0', transform: 'scale(0.95)' },
        },
        'slide-in-from-bottom-4': {
          from: { transform: 'translateY(1rem)' },
          to: { transform: 'translateY(0)' },
        },
        'slide-out-to-bottom-4': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(1rem)' },
        },
        'modal-enter': {
          from: {
            opacity: '0',
            transform: 'scale(0.95) translateY(1rem)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'fade-out': 'fade-out 0.3s ease-out forwards',
        'zoom-in': 'zoom-in-95 0.3s ease-out forwards',
        'zoom-out': 'zoom-out-95 0.3s ease-out forwards',
        'slide-in': 'slide-in-from-bottom-4 0.3s ease-out forwards',
        'slide-out': 'slide-out-to-bottom-4 0.3s ease-out forwards',
        'modal-enter': 'modal-enter 0.3s ease-out forwards',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
    },
  },
  variants: {
    extend: {
      outline: ['responsive', 'focus-visible'],
    },
  },
  plugins: [
  ],
};
