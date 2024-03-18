import { Inter, Nunito_Sans, Poppins } from 'next/font/google';

export const interFont = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--var-inter',
});

export const nunitoSansFont = Nunito_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
  variable: '--var-nunito-sans',
});
export const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--var-poppins',
});
