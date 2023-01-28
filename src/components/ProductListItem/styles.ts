import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  min-height: 150px;
  max-height: 150px;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const ImageContainer = styled.View`
  width: 35%;
  background-color: ${({ theme }) => theme.COLORS.SUCCESS_400};
`;

export const Image = styled.Image``;

export const DetailsContainer = styled.View`
  width: 65%;
  padding-left: 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  max-width: 90%;

`;

export const Title = styled.Text.attrs({
  numberOfLines: 1
})`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2
})`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`;

export const Type = styled.Text.attrs({
  numberOfLines: 1
})`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_500};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RatingContainer = styled.View``;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`;

export const ProductDate = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_400};
`;