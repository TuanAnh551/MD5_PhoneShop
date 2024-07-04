import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  CategoryState,
  categoryAction,
  categoryReducer,
} from "./category.slices";

import { UserState, userActions, userReducer } from "./user.slices";


export type StoreType = {
  categoryStore: CategoryState;
  userStore: UserState;
};

const rootReducer = combineReducers({
  categoryStore: categoryReducer,
  userStore: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(categoryAction.findAllThunk());
<<<<<<< HEAD
=======

store.dispatch(categoryAction.findAllThunk());
>>>>>>> af27ab0 (user)
store.dispatch(userActions.getUserData());
export default store;
