const palette = {
  main: "#43C3C3",

  black: "#0B0B0B",
  white: "#F0F2F3",
};

export const theme = {
  colors: {
    homeBackground: palette.main,
    textPrimary: palette.black,
    cardPrimaryBackground: palette.white,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    s: 0,
    m: 768,
    l: 1024,
  },
};

export type Theme = typeof theme;
