import axios from "./server";

export const login = async (email, password) => {
  return await axios.post("/api/auth/login", { email, password });
};
