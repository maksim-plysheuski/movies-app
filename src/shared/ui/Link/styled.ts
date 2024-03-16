'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { Theme } from '@/shared/constants/theme';

export const StyledLink = styled(Link)<{ $active?: boolean } & Theme>`
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  text-decoration: none;
  color: ${({ $active, theme }) => ($active ? theme.accentColor : theme.textColor)};
  border-bottom: 2px solid
    ${({ $active, theme }) => ($active ? theme.accentColor : 'transparent')};
`;
