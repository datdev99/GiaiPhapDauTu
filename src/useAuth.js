import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import path from "./constants/path";

const protectedRoutes = [
    path.admin.articles.all,
    path.admin.articles.add,
    path.admin.control_panel,
    path.admin.career.all,
    path.admin.career.add,
];

const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("AccessToken");
    
    if (!token) {
      if (protectedRoutes.includes(location.pathname)) {
        navigate(path.dangnhap);
      }
    }
  }, [location, navigate]);
};

export default useAuth;