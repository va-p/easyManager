import React, { useState } from 'react';
import {
  Container,
  Footer,
  Header,
  SignInTitle,
  Title,
  TitleWrapper
} from './styles';

import { RFValue } from 'react-native-responsive-fontsize';
import * as Svg from 'react-native-svg';

import { Button } from '@components/Button';


export function SignIn({ navigation }: any) {
  const [buttonIsLoading, setButtonIsLoading] = useState(false);

  async function handleSignIn() {
    navigation.navigate('Home')
  };

  async function handleSignUp() {
    navigation.navigate('Cadastro')
  };

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>
            Gestão de produtos {'\n'}
            fácil e eficiente
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Toque no botão para entrar {'\n'}
        </SignInTitle>
      </Header>

      <Footer>
        <Button
          title='Entrar'
          type='light'
          isLoading={buttonIsLoading}
          onPress={handleSignIn}
        />
      </Footer>
    </Container>
  );
}