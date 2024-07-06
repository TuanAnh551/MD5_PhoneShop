import { categoryApi } from "./modules/category";

import { productApi } from "./modules/product";
import {loginApi} from "./modules/login";
import { registerApi } from "./modules/register";
import { cartApi } from "./modules/cart";
import { userApi } from "./modules/user";
export default {
  category: categoryApi,
  login: loginApi,
  register: registerApi,
  user: userApi,
  product: productApi,
  cart: cartApi,
};
