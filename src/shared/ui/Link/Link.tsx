import { StyledLink } from './styled';
import { poppinsFont } from '@/shared/constants/fonts';
import { usePathname } from 'next/navigation';

type Props = {
  children: string;
  path: string;
};
export const Link = ({ children, path }: Props) => {
  const currentPath = usePathname();

  return (
    <StyledLink
      href={path}
      className={poppinsFont.className}
      $active={currentPath === path}
    >
      {children}
    </StyledLink>
  );
};
