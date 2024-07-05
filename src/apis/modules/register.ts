import axios from "axios";

export const registerApi = {
  registerUser: async (data: {
    userName: string;
    phone: string;
    email: string;
    date: string;
    password: string;
    confirmPassword: string;
  }) => {
    return await axios.post(`${import.meta.env.VITE_SV}/api/register`, data);
  },
  
};
