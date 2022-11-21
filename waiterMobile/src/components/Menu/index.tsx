import { FlatList } from 'react-native';

import { products } from '../../mocks/products';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';

import * as S from './styles';

export function Menu() {
  return (
    <FlatList
      data={products}
      keyExtractor={product => product._id}
      renderItem={({ item: product }) => (
        <S.Product>
          <S.ProductImage
            source={{ uri: `http://10.0.0.168:3002/uploads/${product.imagePath}`, }}
          />

          <S.ProductDetails>
            <Text size={16} weight="600">{product.name}</Text>
            <Text size={14} weight="400" color="#666" style={{ marginVertical: 8 }}>{product.description}</Text>
            <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
          </S.ProductDetails>

          <S.AddToCartButton>
            <PlusCircle />
          </S.AddToCartButton>
        </S.Product>
      )}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      ItemSeparatorComponent={S.Separator}
    />
  );
}

