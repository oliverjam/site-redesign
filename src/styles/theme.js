import { hsl } from 'polished';

export default {
  breakpoints: [40, 60, 70],
  space: [0, '0.5rem', '1rem', '2rem', '4rem', '8rem'],
  colors: {
    grey0: hsl(30, 0.1, 0.93),
    grey1: hsl(30, 0.05, 0.7),
    grey2: hsl(30, 0.05, 0.55),
    grey3: hsl(30, 0.05, 0.33),
    grey4: '#333',
    primary: 'orange',
    bg: '#fff',
  },
  fontSizes: ['0.85rem', '1rem', '2rem', '3rem', '4rem'],
};
