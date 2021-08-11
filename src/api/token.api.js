import axios from "./server";

export const createToken = async (fullname, phone, price, token) => {
  return await axios.post(
    "/api/token/create",
    { fullname, phone, price },
    { headers: { token } }
  );
};

export const getTokens = async (token) => {
  return await axios.get("/api/token/all", { headers: { token } });
};

export const deleteToken = async (id, token) => {
  return await axios.delete(`/api/token/delete/${id}`, { headers: { token } });
};
