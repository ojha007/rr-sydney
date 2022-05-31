import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { LoggedInUser } from "../../interfaces/User";
import TokenService from "../../services/TokenService";

const useAuth = () => {
  const user: LoggedInUser = TokenService.getAuthUser();
  return user;
};

const ProtectedRoutes = (props: any) => {
  console.log(props, "EEEE");
  const auth = useAuth();
  if (auth) {
    if (auth.isEmailVerified) return <Outlet />;
    return <Navigate to="/auth/email-otp" />;
  }
  return <Navigate to="/auth/login" />;
};

export default ProtectedRoutes;
