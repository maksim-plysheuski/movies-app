import { PropsWithChildren, ReactNode } from 'react';
import { Header } from '@/entities/Header/Header';

export default function HeaderLayout({ children }: PropsWithChildren<ReactNode>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
