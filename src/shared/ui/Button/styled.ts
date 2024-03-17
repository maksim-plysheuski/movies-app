import styled from 'styled-components';
import { Variant } from '@/shared/ui/Button/Button';
import { Theme } from '@/shared/constants/theme';

export const StyledButton = styled.button<Theme & { $variant?: Variant }>`
  font-size: 24px;
  font-weight: 300;
  width: 200px;
  height: 55px;
  border: none;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  text-align: center;
  background-color: ${props =>
    props.$variant === 'primary' ? props.theme.accentColor : '#fff'};
  color: ${props => (props.$variant === 'primary' ? '#fff' : '#000')};
  border-radius: 10px;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.4;
  }
`;
