import { useState } from 'react';
import { Button } from '../components/Button';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu/';
import { TableModal } from '../components/TableModal';

import * as S from './styles';

export function Main() {
  const [tableModalVisible, setTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');


  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleCancelOrder() {
    setSelectedTable('');

  }

  return (
    <>
      <S.Container>
        <Header selectedTable={selectedTable} onCancelOrder={handleCancelOrder} />
        <S.CategoriesContainer>
          <Categories />
        </S.CategoriesContainer>

        <S.MenuContainer>
          <Menu />
        </S.MenuContainer>
      </S.Container>

      <S.Footer>
        <S.FooterContainer>
          {!selectedTable &&
            <Button onPress={() => setTableModalVisible(true)}>
              Novo Pedido
            </Button>
          }
        </S.FooterContainer>
      </S.Footer>

      <TableModal
        visible={tableModalVisible}
        onClose={() => setTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>

  );
}
