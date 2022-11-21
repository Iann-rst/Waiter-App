import { ReactNode } from 'react';
import { Text } from '../Text';
import * as S from './styles';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

export function Button({ children, onPress, disabled }: ButtonProps) {
  return (
    <S.Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#fff">{children}</Text>
    </S.Container>
  );
}
