import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import TokenService from "../../services/TokenService";

const useAuth = () => {
  const token = TokenService.getAccessToken();
  if (token) return true;
  return false;
};

const PublicRoutes = (props: any) => {
  const auth = useAuth();
  return auth ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoutes;
