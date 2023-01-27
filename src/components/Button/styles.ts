import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export type TypeProps = 'dark' | 'light';

type Props = {
  type: TypeProps;
}

export const Container = styled(RectButton) <Props>`
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  align-items: center;
  padding: 18px;
  margin-top: 10px;
  background-color: ${({ theme, type }) => type === 'dark' ? theme.COLORS.PRIMARY_900 : theme.COLORS.PRIMARY_100};
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.SHAPE
}))``;