import styled, { css } from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export type TypeProps = 'primary' | 'secondary';

type ContainerProps = {
  type: TypeProps;
}

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT
})) <ContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${getStatusBarHeight() -30}px;
`;

export const BackButton = styled(BorderlessButton)`
  padding-right: 2%;
`;

export const IconBackButton = styled(Ionicons)`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.MEDIUM};
    color: ${theme.COLORS.TITLE};
  `};
`;