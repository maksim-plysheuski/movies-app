import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';
import { StyledButton } from './styled';

export type Variant = 'primary' | 'secondary';

type Props = {
  children: string;
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = 'primary',
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <StyledButton $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
