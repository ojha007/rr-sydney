import { useRoutes } from "react-router";
import ForgetPassword from "../../core/auth/ForgetPassword";
import Login from "../../core/auth/Login";
import Register from "../../core/auth/Register";
import Home from "../../core/Home";

const PublicRoute = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "/forget-password", element: <ForgetPassword /> },
  ]);
};

export default PublicRoute;
