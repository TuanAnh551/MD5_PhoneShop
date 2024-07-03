import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  CategoryState,
  categoryAction,
  categoryReducer,
} from "./category.slices";

export type StoreType = {
  categoryStore: CategoryState;
};

const rootReducer = combineReducers({
  categoryStore: categoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(categoryAction.findAllThunk());

export default store;
