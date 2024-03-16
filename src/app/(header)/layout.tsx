import { PropsWithChildren, ReactNode } from 'react';

export default function HeaderLayout({ children }: PropsWithChildren<ReactNode>) {
  return (
    <div>
      <h1>Header</h1>
      {children}
    </div>
  );
}
