import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 }
}))`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: flex-end;
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  margin-top: 45px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const SignInTitle = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(16)}px;
  margin-top: 80px;
  margin-bottom: 67px;
  color: ${({ theme }) => theme.COLORS.SHAPE_800};
`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;
  margin-top: ${RFPercentage(-8)}px;
  padding: 0 32px;
`;