import { Route, Routes } from "react-router";
import ForgetPassword from "./core/auth/ForgetPassword";
import Login from "./core/auth/Login";
import Otp from "./core/auth/Otp";
import Profile from "./core/auth/Profile";
import Register from "./core/auth/Register";
import BeneficiaryList from "./core/beneficiary/BeneficiaryList";
import Home from "./core/Home";
import Dashboard from "./core/home/Dashboard";
import History from "./core/send-money/History";
import SendMoney from "./core/send-money/SendMoney";
import ProtectedRoutes from "./routes/frontend/private.route";
import PublicRoutes from "./routes/frontend/public.route";

const App = () => (
  <Routes>
    <Route path="dashboard" element={<ProtectedRoutes />}>
      <Route path="" element={<Dashboard />}>
        <Route path="send-money" element={<SendMoney />} />
        <Route path="history" element={<History />} />
        <Route path="beneficiary" element={<BeneficiaryList />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Route>
    <Route path="auth" element={<PublicRoutes />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="email-otp" element={<Otp />} />
      <Route path="forget-password" element={<ForgetPassword />} />
    </Route>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default App;
