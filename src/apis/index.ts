import { categoryApi } from "./modules/category";
import { loginApi } from "./modules/user/login";
import { registerApi } from "./modules/user/register";
import "./axios.instance";
import { userApi } from "./modules/user";
export default {
  category: categoryApi,
  login: loginApi,
  register: registerApi,
  user: userApi,
};
