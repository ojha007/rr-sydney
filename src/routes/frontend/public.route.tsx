import { useRoutes } from "react-router";
import ForgetPassword from "../../core/auth/ForgetPassword";
import Login from "../../core/auth/Login";
import Otp from "../../core/auth/Otp";
import Register from "../../core/auth/Register";
import Home from "../../core/Home";

const PublicRoute = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forget-password", element: <ForgetPassword /> },
    { path: "/email-otp", element: <Otp /> },
  ]);
};

export default PublicRoute;
