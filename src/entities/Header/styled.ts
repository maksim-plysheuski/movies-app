'use client';

import styled from 'styled-components';
import { Theme } from '@/shared/constants/theme';
import { SettingsIcon } from '@/shared/assets/icons/SettingsIcon';
import Image from 'next/image';

export const StyledHeader = styled.header`
  background: ${({ theme: { bgColor } }) => bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 65px 85px 0 85px;
  gap: 60px;
  @media (max-width: 1300px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const StyledLogo = styled(Image)`
  cursor: pointer;
  width: 245px;
  height: 55px;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;
  flex: 1 1 auto;
  @media (max-width: 450px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const StyledButtonsBlock = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const StyledSettingsIcon = styled(SettingsIcon)<Theme>`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
