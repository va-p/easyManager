import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../store'

export interface ProductState {
  productId: string;
  productTitle: string | null;
  productType: string | null;
  productDescription: string | null;
  productImageUri: string | null;
  productHeight: number | null;
  productWidth: number | null;
  productPrice: string | null;
  productRating: number | null;
}

const initialState: ProductState = {
  productId: '',
  productTitle: null,
  productType: null,
  productDescription: null,
  productImageUri: null,
  productHeight: null,
  productWidth: null,
  productPrice: null,
  productRating: null
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductId: (state, action: PayloadAction<ProductState['productId']>) => {
      state.productId = action.payload;
    },
    setProductTitle: (state, action: PayloadAction<ProductState['productTitle']>) => {
      state.productTitle = action.payload;
    },
    setProductType: (state, action: PayloadAction<ProductState['productType']>) => {
      state.productType = action.payload;
    },
    setProductDescription: (state, action: PayloadAction<ProductState['productDescription']>) => {
      state.productDescription = action.payload;
    },
    setProductImageUri: (state, action: PayloadAction<ProductState['productImageUri']>) => {
      state.productImageUri = action.payload;
    },
    setProductHeight: (state, action: PayloadAction<ProductState['productHeight']>) => {
      state.productHeight = action.payload;
    },
    setProductWidth: (state, action: PayloadAction<ProductState['productWidth']>) => {
      state.productWidth = action.payload;
    },
    setProductPrice: (state, action: PayloadAction<ProductState['productPrice']>) => {
      state.productPrice = action.payload;
    },
    setProductRating: (state, action: PayloadAction<ProductState['productRating']>) => {
      state.productRating = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  setProductId,
  setProductTitle,
  setProductType,
  setProductDescription,
  setProductImageUri,
  setProductHeight,
  setProductWidth,
  setProductPrice,
  setProductRating
} = productSlice.actions

export const selectProductId = (state: RootState) => state.product.productId;
export const selectProductTitle = (state: RootState) => state.product.productTitle;
export const selectProductType = (state: RootState) => state.product.productType;
export const selectProductDescription = (state: RootState) => state.product.productDescription;
export const selectProductImageuRI = (state: RootState) => state.product.productImageUri;
export const selectProductHeight = (state: RootState) => state.product.productHeight;
export const selectProductWidth = (state: RootState) => state.product.productWidth;
export const selectProductPrice = (state: RootState) => state.product.productPrice;
export const selectProductRating = (state: RootState) => state.product.productRating;

export default productSlice.reducer