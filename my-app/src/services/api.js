import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.2.11:5002",
});

export default api;