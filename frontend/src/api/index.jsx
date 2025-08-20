import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-full-stack-app-n0xi.onrender.com/api",
});
export default api;
