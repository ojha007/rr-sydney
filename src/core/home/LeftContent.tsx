import {
  Speedometer2,
  PersonCircle,
  Send,
  ClockHistory,
  PeopleFill,
  BoxArrowRight,
  Hammer,
  List,
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
  let avatar = TokenService.getAuthUser()?.avatar;
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-white">
      <div className="text-center">
        <img
          src={
            avatar ? avatar : require("../../assets/images/fallback-user.jpg")
          }
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
      <div className="nav_brand">
        <List className="bi me-2 nav_toggle" />
      </div>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item ">
          <SidebarLink to="/dashboard" aria-current="page">
            <Speedometer2 className="bi me-2" />
            <span className="nav_name">Dashboard</span>
          </SidebarLink>
        </li>
        <li className="nav-item">
          <SidebarLink to="send-money" aria-current="page">
            <Send className="bi me-2" />
            <span className="nav_name">Send Money</span>
          </SidebarLink>
        </li>
        <li className="nav-item">
          <SidebarLink to="history" aria-current="page">
            <ClockHistory className="bi me-2" />
            <span className="nav_name">History</span>
          </SidebarLink>
        </li>
        <li className="nav-item">
          <SidebarLink to="beneficiary" aria-current="page">
            <PeopleFill className="bi me-2" />
            <span className="nav_name">Beneficiary</span>
          </SidebarLink>
        </li>
        <li className="nav-item">
          <SidebarLink to="profile" aria-current="page">
            <PersonCircle className="bi me-2" />
            <span className="nav_name">Profile</span>
          </SidebarLink>
        </li>
        <li className="nav-item">
          <SidebarLink
            to="/"
            aria-current="page"
            onClick={() => TokenService.clearToken()}
          >
            <BoxArrowRight className="bi me-2" />
            <span className="nav_name">Logout</span>
          </SidebarLink>
        </li>
      </ul>
    </div>
  );
}
