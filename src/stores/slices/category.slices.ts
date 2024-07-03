import apis from "@/apis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Category {
  id: number;
  name: string;
  description: string;
  status: boolean;
}

export interface CategoryState {
  data: Category[] | null;
}

const categoryStateInit: CategoryState = {
  data: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState: categoryStateInit,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findAllThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

const findAllThunk = createAsyncThunk("category/findAllThunk", async () => {
  const response = await apis.category.findAll();
  return response.data;
});

export const categoryReducer = categorySlice.reducer;
export const categoryAction = {
  ...categorySlice.actions,
  findAllThunk,
};
