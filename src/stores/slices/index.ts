import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  CategoryState,
  categoryAction,
  categoryReducer,
} from "./category.slices";

import { UserState, userActions, userReducer } from "./user.slices";
import { productReducer, ProductState } from "./product.slices";

export type StoreType = {
  categoryStore: CategoryState;
  userStore: UserState;
  productsStore: ProductState;
};

const rootReducer = combineReducers({
  categoryStore: categoryReducer,
  userStore: userReducer,
  productsStore: productReducer,
});

const store = configureStore({
  reducer: rootReducer,

});

store.dispatch(categoryAction.findAllThunk());

store.dispatch(userActions.getUserData());
export default store;
