export type EditProductNavigationProps = {
  id: string;
}

type RootParamList = {
  Login: undefined;
  Produtos: undefined;
  'Editar Produto': EditProductNavigationProps;
}