import axios from "axios";
import {jwtDecode} from "jwt-decode";

const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API_COPI_URL, // Lấy URL từ .env
  headers: {
    "Content-Type": "application/json"
  },
});

// Biến để lưu trạng thái refresh token
let isRefreshing = false;
let failedRequestsQueue = [];

apiAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Nếu lỗi là 401 (Unauthorized) và không phải request refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return apiAuth(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = localStorage.getItem("RefreshToken");

        const response = await apiAuth.post('/auth/refresh-token', {refreshToken})

        const newAccessToken = response.data.accessToken;
        localStorage.setItem("AccessToken", newAccessToken);

        apiAuth.defaults.headers["Authorization"] = `Bearer ${newAccessToken}`;

        failedRequestsQueue.forEach((req) => req.resolve(newAccessToken));
        failedRequestsQueue = [];

        return apiAuth(originalRequest);
      } catch (err) {
        failedRequestsQueue.forEach((req) => req.reject(err));
        failedRequestsQueue = [];
        localStorage.removeItem("AccessToken");
        localStorage.removeItem("RefreshToken");
        // window.location.href = path.dangnhap; // Redirect về trang login
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

// Request Interceptor để tự động thêm token vào headers
apiAuth.interceptors.request.use((config) => {
  const token = localStorage.getItem("AccessToken"); // Hoặc lấy từ Recoil/Zustand
  
  

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;

    // Giải mã token để lấy userId
    try {
      const decoded = jwtDecode(token);
      
      // const userId = decoded?.userId || decoded?.sub; // Tùy theo token backend trả về

      // console.log("User ID:", userId); // Bạn có thể lưu vào context, gửi lên server, v.v.
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }
  return config;
});

export default apiAuth;