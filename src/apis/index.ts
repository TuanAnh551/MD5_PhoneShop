import { categoryApi } from "./modules/category";


import {loginApi} from "./modules/login";
import { registerApi } from "./modules/register";

import { userApi } from "./modules/user";
export default {
  category: categoryApi,
  login: loginApi,
  register: registerApi,
  user: userApi,
};
