import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000",
});

const BASE_URL = "http://localhost:9000";

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  config.headers["mode"] = "cors";
  config.headers["Access-Control-Allow-Origin"] = "*";
  config.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE";
  config.headers["Access-Control-Allow-Headers"] =
    "Origin, X-Requested-With, Content-Type, Accept";
  return config;
});

export default api;
export { BASE_URL };
