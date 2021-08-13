import axios from "./server";

export const createToken = async (fullname, phone, price, used, token) => {
  return await axios.post(
    "/api/token/create",
    { fullname, phone, price, used },
    { headers: { token } }
  );
};

export const getTokens = async (page, perPage, token) => {
  return await axios.get(
    `/api/token/all?sort=createdAt&order=desc&limit=${perPage}&page=${page}`,
    {
      headers: { token },
    }
  );
};

export const totalToken = async (token) => {
  return await axios.get(`/api/token/count`);
};

export const deleteToken = async (id, token) => {
  return await axios.delete(`/api/token/delete/${id}`, { headers: { token } });
};
