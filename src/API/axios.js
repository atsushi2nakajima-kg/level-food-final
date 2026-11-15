
import axios from "axios";

// Один общий адрес backend для всех запросов каталога.
const api = axios.create({
  baseURL: "https://level-food-backend.onrender.com",
  timeout: 30000,
});

export default api;
