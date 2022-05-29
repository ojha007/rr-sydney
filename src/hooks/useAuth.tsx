import * as React from "react";
import { Navigate, useLocation } from "react-router";
import { LoggedInUser } from "../interfaces/User";
import TokenService from "../services/TokenService";

const AuthContext = React.createContext(false);

export function RequireAuth(children: any) {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  if (isLoggedIn === true) return children;
  if (location.pathname === "/login") return;
  return <Navigate to="/login" replace state={{ path: location.pathname }} />;
}
function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  let access_token = TokenService.getAccessToken();
  if (access_token) setIsLoggedIn(true);
  return {
    isLoggedIn,
  };
}

export function AuthProvider(children: React.ReactElement) {
  const { isLoggedIn } = useAuth();
  return (
    <AuthContext.Provider value={isLoggedIn}>{children}</AuthContext.Provider>
  );
}

export default function AuthConsumer() {
  return React.useContext(AuthContext);
}
