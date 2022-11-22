import { useState } from 'react';
import { CartItemProps } from '../@types/cartItem';
import { Button } from '../components/Button';
import { Cart } from '../components/Cart';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu/';
import { TableModal } from '../components/TableModal';
import { products } from '../mocks/products';

import * as S from './styles';

export function Main() {
  const [tableModalVisible, setTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');

  const [cartItem, setCartItem] = useState<CartItemProps[]>([
    {
      quantity: 1,
      product: products[0]
    },
    {
      quantity: 2,
      product: products[1]
    }
  ]);


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
          {!selectedTable && (
            <Button onPress={() => setTableModalVisible(true)}>
              Novo Pedido
            </Button>
          )}

          {selectedTable && (
            <Cart cartItems={cartItem} />
          )}
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
