import { FlatList, Modal } from 'react-native';
import { Product } from '../../@types/product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';

import * as S from './styles';

interface ProductDetailsModal {
  visible: boolean;
  onClose: () => void;
  product: null | Product;
}

export function ProductDetailsModal({ visible, onClose, product }: ProductDetailsModal) {

  if (!product) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <S.ImageContainer source={{ uri: `http://10.0.0.168:3002/uploads/${product.imagePath}`, }}>
        <S.CloseButton onPress={onClose}>
          <Close color='white' />
        </S.CloseButton>
      </S.ImageContainer>

      <S.ModalBody>
        <S.IngredientsHeader>
          <Text weight='600' size={24}>{product.name}</Text>
          <Text weight='400' size={16} style={{ marginTop: 8 }}>{product.description}</Text>
        </S.IngredientsHeader>

        {product.ingredients.length > 0 && (
          <S.IngredientsContent>
            <Text weight='600' color="#666">Ingredientes</Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={ingredients => ingredients._id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: ingredient }) => (
                <S.Ingredient>
                  <Text style={{ marginRight: 20 }}>{ingredient.icon}</Text>
                  <Text color="#666" size={14}>{ingredient.name}</Text>
                </S.Ingredient>
              )}
              style={{ marginTop: 16 }}
            />
          </S.IngredientsContent>
        )}
      </S.ModalBody>

      <S.Footer>
        <S.FooterContainer>
          <S.PriceContainer>
            <Text color="#666" size={16}>Preço</Text>
            <Text weight='600' size={20}>{formatCurrency(product.price)}</Text>
          </S.PriceContainer>

          <Button onPress={() => alert('Adicionar ao pedido')}>
            Adicionar ao pedido
          </Button>
        </S.FooterContainer>
      </S.Footer>
    </Modal>
  );
}
