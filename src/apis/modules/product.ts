/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const productApi = {
  addProduct: async (data: {
    product: {
      name: string;
      storage: string;

      description: string;
      categoryId: string;
      images: string ;
    };
    variants: any[] | null;
  }) => {
    return await axios.post(
      `${import.meta.env.VITE_SV}/admin/addproduct`,
      data
    );
  },
};
