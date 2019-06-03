import { fontNames } from '../constants/fonts';

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#1155CC',
    font: '#686868',
    inputBackground: '#F4F5F7',
    error: '#ff0045',
    dot: '#E5E5E5',
    activeDot: '#C4C4C4',
    greyFont: '#5A5A5A',
    buyPrimary: '#f01221',
  },
  linearGradient: {},
  fonts: {
    primary: {
      light: fontNames.Poppins.light,
      regular: fontNames.Poppins.regular,
      medium: fontNames.Poppins.medium,
      semiBold: fontNames.Poppins.semiBold,
      bold: fontNames.Poppins.bold,
    },
    secondary: {
      regular: fontNames.Viga.regular,
    },
  },
};

export default theme;
