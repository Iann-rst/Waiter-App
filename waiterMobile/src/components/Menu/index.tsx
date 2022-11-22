import { useState } from 'react';
import { FlatList } from 'react-native';
import { Product } from '../../@types/product';

import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductDetailsModal } from '../ProductDetailsModal';
import { Text } from '../Text';

import * as S from './styles';

interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[];
}

export function Menu({ onAddToCart, products }: MenuProps) {
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  function handleOpenModal(product: Product) {
    setModal(true);
    setSelectedProduct(product);
  }

  return (
    <>

      <ProductDetailsModal
        onClose={() => setModal(false)}
        visible={modal}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />


      <FlatList
        data={products}
        keyExtractor={product => product._id}
        renderItem={({ item: product }) => (
          <S.Product onPress={() => handleOpenModal(product)}>
            <S.ProductImage
              source={{ uri: `http://10.0.0.168:3002/uploads/${product.imagePath}`, }}
            />

            <S.ProductDetails>
              <Text size={16} weight="600">{product.name}</Text>
              <Text size={14} weight="400" color="#666" style={{ marginVertical: 8 }}>{product.description}</Text>
              <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
            </S.ProductDetails>

            <S.AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </S.AddToCartButton>
          </S.Product>
        )}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={S.Separator}
      />
    </>
  );
}

