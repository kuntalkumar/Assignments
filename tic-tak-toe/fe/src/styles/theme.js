import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Arial, sans-serif',
    body: 'Arial, sans-serif',
  },
  colors: {
    brand: {
      100: '#f7c948',
      200: '#f0b429',
      300: '#e09d00',
    },
  },
});

export default theme;
