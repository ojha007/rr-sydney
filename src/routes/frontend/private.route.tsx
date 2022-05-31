import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import TokenService from "../../services/TokenService";

const useAuth = () => {
  const token = TokenService.getAccessToken();
  if (token) return true;
  return false;
};

const ProtectedRoutes = (props: any) => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default ProtectedRoutes;
