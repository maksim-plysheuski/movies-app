'use client';

import type { ReactNode } from 'react';
import StyledComponentsRegistry from '@/shared/lib/StyledComponentsRegistry';
import { StyledComponentsThemeProvider } from '@/shared/lib/StyledComponentsThemeProvider';

type Props = { children: ReactNode };

export const AppProviders = ({ children }: Props) => (
  <StyledComponentsThemeProvider>
    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
  </StyledComponentsThemeProvider>
);
