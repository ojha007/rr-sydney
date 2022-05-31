import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { LoggedInUser } from "../../interfaces/User";
import TokenService from "../../services/TokenService";

const useAuth = () => {
  const user: LoggedInUser = TokenService.getAuthUser();
  return user;
};

const PublicRoutes = (props: any) => {
  let location = useLocation();
  const auth = useAuth();
  if (auth && !auth.isEmailVerified && location.pathname === "/auth/email-otp")
    return <Outlet />;
  return auth && auth.isEmailVerified ? (
    <Navigate to="/dashboard" />
  ) : (
    <Outlet />
  );
};

export default PublicRoutes;
