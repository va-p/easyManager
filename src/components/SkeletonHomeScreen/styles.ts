import styled from 'styled-components/native';

import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Title = styled.View`
  width: 100px;
  height: ${RFPercentage(4)}px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Product = styled.View`
  width: 100%;
  min-height: 150px;
  max-height: 150px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;