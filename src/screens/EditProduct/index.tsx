import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
  Container,
  ContentScroll,
  Upload,
  DeleteButton,
  Icon,
  Form,
  SizeContainer,
  InputGroup
} from './styles';

import { BorderlessButton } from 'react-native-gesture-handler';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as ImagePicker from 'expo-image-picker';
import { Rating } from 'react-native-ratings';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ControlledInput } from '@components/ControlledInput';
import { ProductImage } from '@components/ProductImage';
import { Button } from '@components/Button';

import {
  setProductId,
  setProductTitle,
  setProductDescription,
  setProductRating,
  selectProductId,
  selectProductTitle,
  selectProductDescription,
  selectProductWidth,
  selectProductHeight,
  selectProductType,
  selectProductPrice,
  selectProductRating,
  setProductType,
  setProductHeight,
  setProductWidth,
  setProductPrice,
} from '@slices/productSlice';

import db from '@configs/firebaseConfig';

import theme from '@themes/theme';

type Props = {
  closeProduct: () => void;
}

type FormData = {
  productImage?: string;
  title: string;
  description: string | null;
  width: number | null;
  height: number | null;
  type: string;
  rating: number | null;
  price: string;
  created: Date | number;
}

/* Validation Form - Start */
const schema = yup.object().shape({
  title: yup
    .string()
    .required("Digite o título do produto"),
  description: yup
    .string(),
  width: yup
    .number()
    .typeError("Digite apenas números"),
  height: yup
    .number()
    .typeError("Digite apenas números"),
  type: yup
    .string()
    .required("Digite o tipo do produto"),
  price: yup
    .string()
    .typeError("Digite apenas números")
    .required("Digite o preço do produto"),
});
/* Validation Form - End */

export function EditProduct({ closeProduct }: Props) {
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const [productImageUrl, setProductImageUrl] = useState('');
  const [productImageBase64, setProductImageBase64] = useState<string>();
  const dispatch = useDispatch();

  const id = useSelector(selectProductId);
  const title = useSelector(selectProductTitle);
  const type = useSelector(selectProductType);
  const description = useSelector(selectProductDescription);

  const height = useSelector(selectProductHeight);
  const width = useSelector(selectProductWidth);
  const price = useSelector(selectProductPrice);
  const rating = useSelector(selectProductRating);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  async function handlePickerImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        base64: true
      });
      if (!response.canceled) {
        setProductImageUrl(response.assets[0].uri);
        setProductImageBase64(response.assets[0].base64);
      }
    } else {
      Alert.alert("Permissão de acesso à biblioteca de mídia negada.")
    }
  };

  async function handleEditProduct(form: FormData) {
    setButtonIsLoading(true);

    try {
      const productUpdated = {
        title: form.title,
        type: form.type,
        description: form.description,
        //filename: filename,
        height: form.height,
        width: form.width,
        price: form.price,
        rating: rating,
        created_at: new Date(),
      }

      const docRef = doc(db, 'products', id);
      await updateDoc(docRef, productUpdated);

      dispatch(
        setProductTitle(form.title)
      );
      dispatch(
        setProductType(form.type)
      );
      dispatch(
        setProductDescription(form.description)
      );
      /*dispatch(
        setProductImageUri(product.productImage?.image.url)
      );*/
      dispatch(
        setProductHeight(form.height)
      );
      dispatch(
        setProductWidth(form.width)
      );
      dispatch(
        setProductPrice(form.price)
      );
      dispatch(
        setProductRating(rating)
      );

      Alert.alert("Edição de produto", "Produto editado com sucesso!", [{ text: "Voltar para a home", onPress: closeProduct }, { text: "Continuar editando o produto." }])
    } catch (error) {
      console.error(error);
      Alert.alert("Edição de produto", "Não foi possível editar o produto. Verifique sua internet e tente novamente")
    }

    console.log(width, height, price);

    setButtonIsLoading(false);
  };

  async function handleClickDeleteProduct(id: string) {
    Alert.alert("Exclusão de produto", "Tem certeza que deseja excluir o produto?", [{ text: "Não, cancelar a exclusão." }, { text: "Sim, excluir o produto.", onPress: () => handleDeleteProduct(id) }])
  };

  async function handleDeleteProduct(id: string) {
    setButtonIsLoading(true);

    try {
      await deleteDoc(doc(db, 'products', id));

      reset();
      closeProduct();
      Alert.alert("Exclusão de produto", "Produto excluído com sucesso!");
    } catch (error) {
      Alert.alert("Exclusão de produto", `${error}`);
    } finally {
      setButtonIsLoading(false);
    }
  };

  return (
    <Container>
      <ContentScroll>
        <Upload>
          <BorderlessButton onPress={handlePickerImage}>
            <ProductImage uri={productImageUrl} />
          </BorderlessButton>
        </Upload>

        <DeleteButton onPress={() => handleClickDeleteProduct(id)}>
          <Icon name='trash' />
        </DeleteButton>


        <Form>
          <ControlledInput
            label="Título"
            placeholder="Título"
            autoCapitalize='words'
            autoCorrect={true}
            autoComplete='name'
            textContentType='name'
            defaultValue={title}
            name='title'
            control={control}
            error={errors.title}
          />

          <ControlledInput
            label="Tipo"
            placeholder="Tipo"
            autoCapitalize='words'
            autoCorrect={true}
            defaultValue={type}
            name='type'
            control={control}
            error={errors.type}
          />

          <ControlledInput
            label="Descrição"
            placeholder="Descrição"
            multiline
            numberOfLines={5}
            autoCapitalize='words'
            autoCorrect={true}
            defaultValue={description}
            name='description'
            control={control}
            error={errors.description}
          />

          <SizeContainer>
            <InputGroup>
              <ControlledInput
                label="Altura"
                placeholder="Altura"
                keyboardType='numeric'
                defaultValue={height}
                name='height'
                control={control}
                error={errors.height}
              />
            </InputGroup>

            <InputGroup>
              <ControlledInput
                label="Largura"
                placeholder="Largura"
                keyboardType='numeric'
                defaultValue={width}
                name='width'
                control={control}
                error={errors.width}
              />
            </InputGroup>
          </SizeContainer>

          <ControlledInput
            label="Preço"
            placeholder="Preço"
            keyboardType='numeric'
            defaultValue={price}
            returnKeyType='go'
            onSubmitEditing={handleSubmit(handleEditProduct)}
            name='price'
            control={control}
            error={errors.price}
          />

          <Rating
            startingValue={rating}
            onFinishRating={setProductRating}
            ratingCount={5}
            showRating={false}
            jumpValue={1}
            imageSize={45}
            tintColor={theme.COLORS.SHAPE}
          />
        </Form>
      </ContentScroll>

      <Button
        title="Editar Produto"
        type='dark'
        isLoading={buttonIsLoading}
        onPress={handleSubmit(handleEditProduct)} />
    </Container>
  );
}