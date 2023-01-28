import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const Products = styled.View`
  padding: 10px;
`;

export const ListEmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ListEmptyText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(12)}px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`;