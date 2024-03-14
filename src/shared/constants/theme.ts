export const darkTheme = {
  accentColor: '#D98639',
  bgColor: '#1E1F27',
  cardBgColor500: '#313131',
  cardBgColor300: '#5A5A5CCC',
  cardBgColor100: '#BDBDBD',
};

type Themes = typeof darkTheme;
export const lightTheme: Themes = {
  accentColor: '#9e3fcb',
  bgColor: '#e6d0f9',
  cardBgColor500: '#5426b5',
  cardBgColor300: '#725caa',
  cardBgColor100: '#9f93c0',
};

export type Theme = { theme: Themes };
