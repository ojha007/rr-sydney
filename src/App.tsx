import { useRoutes } from "react-router";
import ForgetPassword from "./core/auth/ForgetPassword";
import Login from "./core/auth/Login";
import Profile from "./core/auth/Profile";
import Register from "./core/auth/Register";
import BeneficiaryList from "./core/beneficiary/BeneficiaryList";
import Home from "./core/Home";
import Dashboard from "./core/home/Dashboard";
import History from "./core/send-money/History";
import SendMoney from "./core/send-money/SendMoney";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forget-password", element: <ForgetPassword /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "/dashboard/beneficiary",
          element: <BeneficiaryList />,
        },
        {
          path: "/dashboard/send-money",
          element: <SendMoney />,
        },
        {
          path: "/dashboard/history",
          element: <History />,
        },
        {
          path: "/dashboard/profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  return routes;
};
export default App;
