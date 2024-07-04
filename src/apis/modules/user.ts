import axios from "axios";

export const userApi = {
  verifyToken: async (token: string) => {
    return axios.post(`${import.meta.env.VITE_SV}/api/user/verify`, {
      token,
    });
  },
};
