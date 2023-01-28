import styled from 'styled-components/native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 0 10px 10px 10px;
`;

export const ContentScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 30
  }
})``;

export const Upload = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin: 32px 0px;
`;

export const DeleteButton = styled(BorderlessButton)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 32px 0;
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`;

export const Form = styled.View`
  width: 100%;
`;

export const SizeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputGroup = styled.View`
  width: 48%;
`;