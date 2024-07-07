/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const productApi = {
  addProduct: async (data: {
    product: {
      name: string;
      storage: string;

      description: string;
      categoryId: string;
    };
    variants: any[] | null;
    images: any[];
  }) => {
    return await axios.post(
      `${import.meta.env.VITE_SV}/admin/addproduct`,
      data
    );
  },
  getProduct: async () => {
    return await axios.get(`${import.meta.env.VITE_SV}/admin/product`);
  },
  getProductById: async (id: string) => {
    return await axios.get(`${import.meta.env.VITE_SV}/admin/product/${id}`);
  },
  updateProduct: async (data: {
    product: {
      id: string;
      name: string;
      storage: string;
      description: string;
      categoryId: string;
    };
    variants: any[] | null;
    images: any[];
  }) => {
    return await axios.put(
      `${import.meta.env.VITE_SV}/admin/updateproduct`,
      data
    );
  },
  productCategory: async (productId) => {
    return await axios.get(
      `${import.meta.env.VITE_SV}/category`,
      productId
    );
  },
};
