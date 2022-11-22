import { useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';

import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';


import * as S from './styles';


interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function handleSave() {
    onSave(table);
    setTable('');
    onClose();
  }

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <S.Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <S.ModalBody>
          <S.ModalHeader>
            <Text weight='600'>Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color='#666' />
            </TouchableOpacity>
          </S.ModalHeader>

          <S.ModalForm>
            <S.Input
              placeholder='Número da mesa'
              placeholderTextColor="#666"
              onChangeText={setTable}
              keyboardType='number-pad'
              value={table}
            />

            <Button
              onPress={handleSave}
              disabled={table.length === 0}
            >
              Salvar
            </Button>
          </S.ModalForm>
        </S.ModalBody>
      </S.Overlay>
    </Modal>
  );
}
