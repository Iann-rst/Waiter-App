import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { CartItemProps } from '../../@types/cartItem';
import { Product } from '../../@types/product';

import { formatCurrency } from '../../utils/formatCurrency';

import { Button } from '../Button';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { OrderConfirmedModal } from '../OrderConfirmedModal';
import { Text } from '../Text';

import * as S from './styles';

interface CartProps {
  cartItems: CartItemProps[];
  onAdd: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onConfirmOrder: () => void;
}

export function Cart({ cartItems, onAdd, onDecrement, onConfirmOrder }: CartProps) {
  const [isModal, setIsModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  function handleConfirmOrder() {
    setIsModal(true);
  }

  function handleOk() {
    onConfirmOrder();
    setIsModal(false);
  }

  return (
    <>

      <OrderConfirmedModal visible={isModal} onClose={handleOk} />


      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={cartItem => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 95 }}
          renderItem={({ item: cartItem }) => (
            <S.Item>
              <S.ProductContainer>
                <S.Image source={{ uri: `http://10.0.0.168:3002/uploads/${cartItem.product.imagePath}`, }} />

                <S.QuantityContainer>
                  <Text color="#666" size={14}>
                    {cartItem.quantity}x
                  </Text>
                </S.QuantityContainer>

                <S.ProductDetails>
                  <Text weight='600' size={14}>{cartItem.product.name}</Text>
                  <Text size={14} color="#666" style={{ marginTop: 4 }}>{formatCurrency(cartItem.product.price)}</Text>
                </S.ProductDetails>
              </S.ProductContainer>

              <S.Actions>

                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => onAdd(cartItem.product)}>
                  <PlusCircle />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onDecrement(cartItem.product)}>
                  <MinusCircle />
                </TouchableOpacity>

              </S.Actions>
            </S.Item>
          )}
        />
      )}

      <S.Summary>
        <S.TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color="#666">Total</Text>
              <Text size={20} weight='600'>{formatCurrency(total)}</Text>
            </>
          ) : (
            <Text color="#999">Seu carrinho está vazio</Text>
          )}
        </S.TotalContainer>

        <Button
          onPress={() => handleConfirmOrder()}
          disabled={cartItems.length === 0}
          loading={isLoading}
        >
          Confirmar pedido</Button>
      </S.Summary>
    </>
  );

}
