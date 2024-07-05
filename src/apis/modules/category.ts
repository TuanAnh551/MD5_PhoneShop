import axios from "axios";
import { find } from "node_modules/@reduxjs/toolkit/dist/utils";

export const categoryApi = {
  findAll: async () => {
    return await axios.get(`${import.meta.env.VITE_SV}/admin/category`);
  },
  add: async (data: any) => {
    return await axios.post(
      `${import.meta.env.VITE_SV}/admin/category/add`,
      data
    );
  },
  delete: async (id: number) => {
    return await axios.post(
      `${import.meta.env.VITE_SV}/admin/category/delete/${id}`
    );
  },
  edit: async (data: any) => {
    return await axios.post(
      `${import.meta.env.VITE_SV}/admin/category/update`,
      data
    );
  },

  categoryPro: async () => {
    return await axios.get(`${import.meta.env.VITE_SV}/admin/product/category`);
  },

  getDataCat: async (id: number) => {
    return await axios.get(`${import.meta.env.VITE_SV}/admin/category/${id}`);
  },

  paginationCategory: async (offset: number, limit: number) => {
    return await axios.get(
      `${
        import.meta.env.VITE_SV
      }/admin/category/pagination?offset=${offset}&limit=${limit}`
    );
  },

  searchCategory: async (name: string) => {
    return await axios.get(
      `${import.meta.env.VITE_SV}/admin/category/search?name=${name}`
    );
  },

  //   async findAll() {
  //     return await axios.get(`${import.meta.env.VITE_SV}/admin/category`);
  //   },
};
