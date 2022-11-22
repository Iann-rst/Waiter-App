import { FlatList, TouchableOpacity } from 'react-native';
import { CartItemProps } from '../../@types/cartItem';
import { formatCurrency } from '../../utils/formatCurrency';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';

import * as S from './styles';

interface CartProps {
  cartItems: CartItemProps[];
}

export function Cart({ cartItems }: CartProps) {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={cartItem => cartItem.product._id}
      showsVerticalScrollIndicator={false}
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
  );
}
