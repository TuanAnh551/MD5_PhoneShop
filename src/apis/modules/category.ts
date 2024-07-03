import axios from "axios";

export const categoryApi = {
  async findAll() {
    return await axios.get(`${import.meta.env.VITE_SV}/admin/category`);
  },
};
