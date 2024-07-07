import axios from "axios";

export const cartApi = {
  addCart: async (data) => {
    return await axios.post(`${import.meta.env.VITE_SV}/cart/add`, data);
  },
  getCart: async (userId) => {
    return await axios.get(`${import.meta.env.VITE_SV}/cart/${userId}`);
  },
};