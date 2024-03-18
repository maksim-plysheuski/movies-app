import React, { type ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/shared/constants/theme';

type Props = { children: ReactNode };

export const StyledComponentsThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};
