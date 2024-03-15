import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '@/shared/lib/StyledComponentsRegistry';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Movies App',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
