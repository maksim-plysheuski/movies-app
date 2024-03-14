'use client';

import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/shared/constants/theme';
import { createGlobalStyle } from 'styled-components';
import Button from '@/shared/ui/Button/Button';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <main>
        <Title>Main Page</Title>
        <Button variant={'secondary'}>Hello world</Button>
      </main>
    </ThemeProvider>
  );
}
