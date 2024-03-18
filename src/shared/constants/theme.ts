export const darkTheme = {
  accentColor: '#D98639',
  bgColor: '#1E1F27',
  textColor: '#fff',
  cardBgColor500: '#313131',
  cardBgColor300: '#5A5A5CCC',
  cardBgColor100: '#BDBDBD',
};

type Themes = typeof darkTheme;
export const lightTheme: Themes = {
  accentColor: '#9e3fcb',
  bgColor: '#f8bb95',
  textColor: '#fff',
  cardBgColor500: '#5426b5',
  cardBgColor300: '#725caa',
  cardBgColor100: '#9f93c0',
};

export type Theme = { theme: Themes };
