import { createSlice } from "@reduxjs/toolkit";

interface ProductVariant {
  color: string;
  price: string;
  image: string;
  quantity: string;
  description: string;
}
export interface Product {
  id: string;
  name: string;
  storage: string;
  image: string[];
  description: string;
  category: string;
  variants: ProductVariant[];
}
export interface ProductState {
  data: Product[] | null;
}
const productStateInit: ProductState = {
  data: null,
};

const productSlice = createSlice({
  name: "products",
  initialState: productStateInit,
  reducers: {
    addProduct: (state, action) => {
      // Giả sử data là một mảng, bạn có thể thêm sản phẩm mới vào mảng này
      // Đảm bảo rằng state.data không phải là null trước khi thêm
      if (state.data) {
        state.data.push(action.payload);
        console.log(state.data,"state.data");
      } else {
        state.data = [action.payload];
      }
    },
  },
  
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
