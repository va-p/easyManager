import React from 'react';
import {
  Container,
  ImageContainer,
  Image,
  DetailsContainer,
  Header,
  TitleContainer,
  Title,
  Description,
  Icon,
  Type,
  Footer,
  RatingContainer,
  Price,
  ProductDate
} from './styles';

import { BorderlessButton, RectButtonProps } from 'react-native-gesture-handler';
import { Rating } from 'react-native-ratings';

import theme from '@themes/theme';

export type ProductProps = {
  id: string;
  title: string;
  type: string;
  description: string;
  productImage?: {
    image: {
      url: string | undefined;
    };
  };
  height: number;
  width: number;
  price: string;
  rating: number;
  created: Date | number;
}

type Props = RectButtonProps & {
  data: ProductProps;
  actions: () => void;
}

export function ProductListItem({ data, actions }: Props) {
  return (
    <Container>
      <ImageContainer>
        <Image source={{ uri: data.productImage?.image?.url }} />
      </ImageContainer>

      <DetailsContainer>
        <Header>
          <TitleContainer>
            <Title>{data.title}</Title>
          </TitleContainer>

          <BorderlessButton onPress={actions}>
            <Icon name='ellipsis-horizontal' />
          </BorderlessButton>
        </Header>
        <Description>{data.description}</Description>


        <Type>{data.type}</Type>

        <Footer>
          <RatingContainer>
            <Rating
              startingValue={data.rating}
              ratingCount={5}
              showRating={false}
              readonly
              jumpValue={1}
              imageSize={20}
              tintColor={theme.COLORS.SHAPE}
            />
          </RatingContainer>

          <Price>{data.price}</Price>
        </Footer>

        <ProductDate>{data.created}</ProductDate>
      </DetailsContainer>
    </Container>
  );
}