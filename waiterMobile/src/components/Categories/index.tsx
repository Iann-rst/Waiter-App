import { Text } from '../Text';
import { FlatList } from 'react-native';



import * as S from './styles';
import { useState } from 'react';
import { Category } from '../../@types/category';

interface CategoriesProps {
  categories: Category[];
}

export function Categories({ categories }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;
    setSelectedCategory(category);
  }

  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;

        return (
          <S.Category onPress={() => handleSelectCategory(category._id)}>
            <S.Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </S.Icon>
            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>{category.name}</Text>
          </S.Category>
        );
      }}
      contentContainerStyle={{ paddingRight: 24 }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
}
