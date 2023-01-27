import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';
import {
  Overlay,
  Title,
  Container
} from './styles';

import {
  BottomSheetProps,
  BottomSheetModal,
  BottomSheetModalProvider
} from '@gorhom/bottom-sheet';

import theme from '@themes/theme';

export type Props = BottomSheetProps & {
  title: string;
  bottomSheetRef?: any;
  children: ReactNode;
}

export function Modal({ title, bottomSheetRef, children, ...rest }: Props) {
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        backdropComponent={() => <Overlay />}
        backgroundStyle={{ backgroundColor: theme.COLORS.PRIMARY_900 }}        
        handleIndicatorStyle={{ backgroundColor: theme.COLORS.BACKGROUND }}
        {...rest}
      >
        <SafeAreaView style={{ flex: 1 }}>
            <Title>
              {title}
            </Title>

          <Container>
            {children}
          </Container>
        </SafeAreaView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}