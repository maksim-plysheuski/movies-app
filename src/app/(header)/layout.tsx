import { PropsWithChildren, ReactNode } from 'react';
import { Link } from '@/shared/ui/Link/Link';

export default function HeaderLayout({ children }: PropsWithChildren<ReactNode>) {
  return (
    <div>
      <Link path={'/film'}>Link1</Link>
      <Link path={'/'}>Link2</Link>
      <h1>Header</h1>
      {children}
    </div>
  );
}
