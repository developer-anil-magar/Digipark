/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#151a23',
        white: {
          1: '#ffffff',
        },
        gray: {
          1: '#878C91',
          // 2. rgba(255, 255, 255, 0.5)
          2: '#ffffff80',
          // 3. rgba(255, 255, 255, 0.07)
          3: '#ffffff12',
          // 4. rgba(108, 114, 120, 0.5)
          4: '#6c727880',
          // 5. rgba(255, 255, 255, 0.6)
          5: '#ffffff99',
          // 6. rgba(135,140,145,1)
          6: '#878c91',
          // 7. rgba(255, 255, 255, 0.2)
          7: '#ffffff33',
          8: '#252A32',
        },
        blue: {
          1: '#52889F',
          // 2.rgba(104, 173, 202, 1)
          2: '#68adca',
          3: '#6BB0CD',
        },
      },
      backgroundImage: {
        'gradient':
          'linear-gradient(3deg, #151A23 2.41%, rgba(21, 26, 35, 0.00) 96.85%)',
      },
    },
  },
  plugins: [],
};
