import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.2.10:5003",
  headers: {
    'content-type': ' multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 30000,
});

export default api;