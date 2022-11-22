import styled from 'styled-components/native';

export const ImageContainer = styled.ImageBackground`
  width: 100%;
  height: 200px;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;

  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;

  align-items: center;
  justify-content: center;

  position: absolute;
  top:24px;
  right: 24px;
`;

export const ModalBody = styled.View`
  flex: 1;
  background: #FAFAFA;
  padding: 32px 24px 0;
`;

export const IngredientsHeader = styled.View``;

export const IngredientsContent = styled.View`
flex:1;
  margin-top: 32px;
`;

export const Ingredient = styled.View`
  margin-bottom: 4px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
`;

export const Footer = styled.View`
  width: 100%;
  min-height: 110px;
  padding: 16px 24px;
  background: #fff;
`;

export const FooterContainer = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.View``;
