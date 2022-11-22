import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import * as S from './styles';

interface HeaderProps {
  selectedTable?: string;
  onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
  return (
    <S.Container>
      {!selectedTable && (
        <>

          <Text size={14} opacity={0.9}>Bem-vindo(a) ao</Text>
          <Text size={24} weight="700">WAITER<Text size={24}>APP</Text></Text>
        </>
      )}

      {selectedTable && (
        <S.OrderHeader>
          <S.ContentHeader>
            <Text weight='600' size={24}>Pedido</Text>
            <TouchableOpacity onPress={onCancelOrder}>
              <Text weight='600' color='#d73035' size={14}>Cancelar Pedido</Text>
            </TouchableOpacity>
          </S.ContentHeader>

          <S.Table>
            <Text color="#666666" size={16} weight="400">Mesa {selectedTable}</Text>
          </S.Table>
        </S.OrderHeader>
      )}
    </S.Container>
  );
}
