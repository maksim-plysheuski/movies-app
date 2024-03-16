'use client';

import styled from 'styled-components';
import Button from '@/shared/ui/Button/Button';
import { Link } from '@/shared/ui/Link/Link';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export default function Home() {
  return (
    <main>
      <Title>Main Page</Title>
      <Button variant={'primary'}>Hello world</Button>
      <Link path={'/film'}>Link1</Link>
      <Link path={'/'}>Link2</Link>
    </main>
  );
}
