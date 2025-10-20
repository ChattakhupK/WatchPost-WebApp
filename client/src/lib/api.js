import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const client = axios.create({
  baseURL: API_URL,
});

export const api = {
  async get(path) {
    const { data } = await client.get(path);
    return data;
  },

  async post(path, body) {
    const { data } = await client.post(path, body);
    return data;
  },
};
