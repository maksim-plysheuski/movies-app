import 'normalize.css';
import { ReactNode } from 'react';
import { AppProviders } from '@/shared/lib/Providers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
