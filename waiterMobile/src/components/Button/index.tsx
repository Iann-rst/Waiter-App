import { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';

import * as S from './styles';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({ children, onPress, disabled, loading }: ButtonProps) {
  return (
    <S.Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text weight="600" color="#fff">{children}</Text>
      )}

      {loading && (
        <ActivityIndicator color="#FFF" />
      )}
    </S.Container>
  );
}
