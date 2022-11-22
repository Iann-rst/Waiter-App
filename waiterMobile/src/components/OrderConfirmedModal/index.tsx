import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';

import * as S from './styles';

interface OrderConfirmedModalProps {
  visible: boolean;
  onClose: () => void;
}

export function OrderConfirmedModal({ visible, onClose }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <S.Container>
        <CheckCircle />
        <Text size={20} weight="600" color="#fff" style={{ marginTop: 12, marginBottom: 4 }}>Pedido confirmado</Text>
        <Text color="#fff" opacity={0.9}>O pedido já entrou na fila da produção!</Text>

        <S.OkButton onPress={onClose}>
          <Text color="#d73035" weight='600' size={16}>OK</Text>
        </S.OkButton>
      </S.Container>
    </Modal>
  );
}
