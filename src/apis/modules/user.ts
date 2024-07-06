import axios from "axios";

export const userApi = {
  verifyToken: async (token: string) => {
    return axios.post(`${import.meta.env.VITE_SV}/api/user/verify`, {
      token,
    });
  },
  paginationUser: async (offset: number, limit: number) => {
    return axios.get(
      `${
        import.meta.env.VITE_SV
      }/api/user/pagination?offset=${offset}&limit=${limit}`
    );
  },
  searchUser: async (userName: string) => {
    return axios.get(
      `${import.meta.env.VITE_SV}/api/user/search?userName=${userName}`
    );
  },
  
};
