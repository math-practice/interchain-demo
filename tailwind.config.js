module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontSize: {
      sm: ['14.5px', {
        lineHeight: '1.15',
      }],
      base: ['18px', {
        lineHeight: '1.2',
      }],
      lg: ['21px', {
        lineHeight: '1.2',
      }],
      xl: ['36px', {
        lineHeight: '1',
        letterSpacing: '0.01em',
        wordSpacing: '0.01em',
      }],
    },
    extend: {},
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