import { FlatList, TouchableOpacity } from 'react-native';
import { CartItemProps } from '../../@types/cartItem';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';

import * as S from './styles';

interface CartProps {
  cartItems: CartItemProps[];
}

export function Cart({ cartItems }: CartProps) {
  return (
    <>
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

              <TouchableOpacity style={{ marginRight: 20 }}>
                <PlusCircle />
              </TouchableOpacity>

              <TouchableOpacity>
                <MinusCircle />
              </TouchableOpacity>

            </S.Actions>
          </S.Item>
        )}
      />

      <S.Summary>
        <S.TotalContainer>
          <Text color="#666">Total</Text>
          <Text size={20} weight='600'>{formatCurrency(120)}</Text>
        </S.TotalContainer>

        <Button onPress={() => alert('Confirma pedido')}>Confirmar pedido</Button>
      </S.Summary>
    </>
  );

}
