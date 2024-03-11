'use client';

import styles from './page.module.css';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;
export default function Home() {
  return (
    <main className={styles.main}>
      <div>hello</div>
      <Title>World</Title>
    </main>
  );
}
