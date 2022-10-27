module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    boxShadow: {
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    },
    transitionDuration: {
      default: '150ms'
    },
    transition: 'transition',
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      opacity: {
        '0': '0',
        '20': '20',
        '40': '40',
        '60': '60',
        '80': '80',
        '100': '100',
      },
      white: {
        light: '#FFFFFF',
        default: '#F9FAFB',
        darker: '#F3F4F6',
      },
      blue: {
        light: '#E0FBFC',
        default: '#98C1D9',
        dark: '#3D5A80',
      },
      orange: {
        default: '#EE6C4D',
      },
      gray: {
        sevenhundred: '#374151',
        light: '#E5E7EB',
        default: '#9CA3AF',
        dark: '#374151'
      },
      black: {
        border: '#6b7280',
        default: '#293241',
      },
      emerald: {
        default: '#10B981'
      },
      red: {
        default: '#EF4444'
      },
      amber: {
        default: '#FBBF24'
      },
      indigo: {
        default: '#6366F1'
      },
      },
      extend: {
        backgroundImage: {
          'ipad-analytics': "url('./img/ipad-analytics.png')",
          'building': "url('./img/building.png')",
        },
        width: {
          '98': '26rem',
          '100': '30rem',
          '110': '40rem',
          '120': '50rem'
        },
        textColor: ['responsive','hover','focus','group-hover'],
      }
    },
  }
