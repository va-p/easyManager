import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.SECONDARY_900};
  `};
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SHAPE
}))`
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  font-size: ${RFValue(14)}px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;
  background-color: transparent;
  border-radius: 12px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.REGULAR};
    border: 1px solid ${theme.COLORS.SECONDARY_900};
    color: ${theme.COLORS.SECONDARY_900};
  `};
`;

export const ErrorMessage = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_800};
`;