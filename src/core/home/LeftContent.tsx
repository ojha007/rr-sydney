import {
  Speedometer2,
  PersonCircle,
  Send,
  ClockHistory,
  PeopleFill,
  BoxArrowRight,
} from "react-bootstrap-icons";
import { Link, useResolvedPath, useMatch, LinkProps } from "react-router-dom";
import TokenService from "../../services/TokenService";

function SidebarLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link className={`nav-link ${match ? "active" : ""}`} to={to} {...props}>
      {children}
    </Link>
  );
}

export default function LeftContent() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-white"
      style={{ width: "280px" }}
    >
      <div className="text-center">
        <img
          src={TokenService.getAuthUser()?.avatar}
          className="img-circle"
          alt=""
        />
      </div>
      <h3 className="profile-username text-center">
        {TokenService.getAuthUser().name}
      </h3>
      <p className="text-muted text-center m-1 mt-0">
        {TokenService.getAuthUser().email}
      </p>
      <p className="text-muted text-center m-1 mt-0">
        {TokenService.getAuthUser().phone}
      </p>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item ">
          <SidebarLink to="/dashboard" aria-current="page">
            <Speedometer2 className="bi me-2" />
            Dashboard
          </SidebarLink>
        </li>
        <li className="nav-item">
          <SidebarLink to="send-money" aria-current="page">
            <Send className="bi me-2" />
            Send Money
          </SidebarLink>
        </li>
        <li className="nav-item">
          <SidebarLink to="history" aria-current="page">
            <ClockHistory className="bi me-2" />
            History
          </SidebarLink>
        </li>
        <li className="nav-item">
          <SidebarLink to="beneficiary" aria-current="page">
            <PeopleFill className="bi me-2" />
            Beneficiary
          </SidebarLink>
        </li>
        <li className="nav-item">
          <SidebarLink to="profile" aria-current="page">
            <PersonCircle className="bi me-2" />
            Profile
          </SidebarLink>
        </li>
        <li className="nav-item">
          <SidebarLink
            to="/"
            aria-current="page"
            onClick={() => TokenService.clearToken()}
          >
            <BoxArrowRight className="bi me-2" />
            Logout
          </SidebarLink>
        </li>
      </ul>
    </div>
  );
}
