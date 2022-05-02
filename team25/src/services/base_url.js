import axios from "axios";

const api = axios.create({
  baseURL: "localhost:3003",
});

export default api;
