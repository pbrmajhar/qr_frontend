import axios from "./server";

export const createToken = async (fullname, phone, price, used, token) => {
  return await axios.post(
    "/api/token/create",
    { fullname, phone, price, used },
    { headers: { token } }
  );
};

export const getTokens = async (token) => {
  return await axios.get(`/api/token/all?limit=2&sort=createdAt&order=desc&page=2`, {
    headers: { token },
  });
};

export const deleteToken = async (id, token) => {
  return await axios.delete(`/api/token/delete/${id}`, { headers: { token } });
};
