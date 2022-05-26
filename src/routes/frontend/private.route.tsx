import { useRoutes } from "react-router";
import Profile from "../../core/auth/Profile";
import BeneficiaryList from "../../core/beneficiary/BeneficiaryList";
import Dashboard from "../../core/home/Dashboard";
import History from "../../core/send-money/History";
import SendMoney from "../../core/send-money/SendMoney";

const PrivateRoute = () => {
  return useRoutes([
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
};

export default PrivateRoute;
