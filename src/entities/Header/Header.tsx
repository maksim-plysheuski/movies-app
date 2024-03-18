'use client';

import {
  StyledSettingsIcon,
  StyledButtonsBlock,
  StyledHeader,
  StyledLogo,
  StyledLinks,
} from './styled';
import { Link as Navigate } from '@/shared/ui/Link/Link';
import Link from 'next/link';
import HeaderLogo from '@/shared/assets/images/headerLogoImage.png';
import Button from '@/shared/ui/Button/Button';

export const Header = () => {
  return (
    <StyledHeader>
      <Link href={'/'}>
        <StyledLogo src={HeaderLogo} alt={'logo'} />
      </Link>
      <StyledLinks>
        <Navigate path={'/'}>Home</Navigate>
        <Navigate path={'/bookings'}>Bookings</Navigate>
      </StyledLinks>
      <StyledButtonsBlock>
        <Button>Sing Up</Button>
        <Button variant={'secondary'}>Sing In</Button>
      </StyledButtonsBlock>
      <StyledSettingsIcon />
    </StyledHeader>
  );
};
