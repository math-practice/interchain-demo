module.exports = {
  content: ["./*.html"],
  theme: {
    fontSize: {
      sm: ['14.5px', {
        lineHeight: '1.2',
        letterSpacing: '0.01em',
        wordSpacing: '0.01em',
      }],
      base: ['18px', {
        lineHeight: '1.2',
      }],
      lg: ['21px', {
        lineHeight: '1.2',
      }],
      xl: ['36px', {
        lineHeight: '1.1',
      }],
    },
    extend: {
      colors: {
        'beige': '#EFEBE2',
      },
      padding: {
        '10%': '10%',
        '15%': '15%',
      },
      animation: {
        'slide': 'slide 0.75s linear infinite',
      },
      keyframes: {
        slide: {
            '0%': {
              backgroundPositionY: '0'
            },
            '100%': {
              backgroundPositionY: '8px'
            },
        }
      },
    },
  },
  plugins: [],
}

// .t-xl {
//   font-size: 36px;
//   line-height: 1;
//   font-weight: 500;
// }
// @media all and (max-width: 767px) {
//   .t-xl {
//     font-size: 32px;
//   }
// }
// .t-l {
//   font-size: 21px;
//   line-height: 1.2;
//   letter-spacing: -0.005em;
// }
// .t-m {
//   font-size: 18px;
//   line-height: 1.2;
// }
// .t-s {
//   font-size: 14.5px;
//   line-height: 1.15;
//   letter-spacing: 0.01em;
//   word-spacing: 0.01em;
// }