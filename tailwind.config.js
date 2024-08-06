/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    borderRadius: {
      '0': '0px',
      '5': '5px',
      '10': '10px',
      '15': '15px',
      '20': '20px',
      '25': '25px',
      '30': '30px',
      'full': '100%',
    },
    extend: {
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1280px',
        xl: '1920px',
      },
      fontFamily: {
        serif: ['Helvetica', 'sans-serif'],
      },
      fontSize: {
        xs: ['14px'],
        md: ['18px'],
        lg: ['22px'],
      },
      colors: {
        accent: '#F2FC89',
        secondaryLight: '#B785F6',
        secondaryDark: '#5952D6',
        online: '#A2DA2E',
        offline: '#d32e2f',
        ordinaryBg: '#20242B',
        messageBg: '#1D1E25',
        accentBg: '#15171C',
        brightBg: '#000',
        primaryText: '#fff',
        secondaryText: '#939398',
      },
      padding: {
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '28': '28px',
      },
      spacing: {
        '1': '1px',
        '3': '3px',
        '5': '5px',
        '7': '7px',
        '8': '8px',
        '10': '10px',
        '13': '13px',
        '15': '15px',
        '17': '70px',
        '20': '20px',
        '23': '23px',
        '25': '25px',
        '26': '26px',
        '28': '28px',
        '30': '30px',
        '31': '31px',
        '34': '34px',
        '35': '30px',
        '40': '40px',
        '45': '45px',
        '50': '50px',
        '60': '60px',
        'full_vh': '100vh',
        'full_vw': '100vw',
      },
      animation: {
        jelly: 'jelly .2s linear',
      },
      keyframes: {
        jelly: {
          '0%, 100%': {
            transform: 'scale(1, 1)',
          },
          '50%': {
            transform: 'scale(1, .97)',
          },
        },
      },
    },
  },
  plugins: [],
};

