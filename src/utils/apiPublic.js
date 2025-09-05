import axios from "axios";
import { jwtDecode } from "jwt-decode";

const apiPublic = axios.create({
  baseURL: import.meta.env.VITE_API_COPI_URL, // Lấy URL từ .env
  headers: {
    "Content-Type": "application/json"
  },
});

apiPublic.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminAccessToken"); // Hoặc lấy từ Recoil/Zustand
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;

    // Giải mã token để lấy userId
    try {
      const decoded = jwtDecode(token);
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }
  return config;
});

export default apiPublic;