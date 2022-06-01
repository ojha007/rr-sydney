import {
  Speedometer2,
  PersonCircle,
  Send,
  ClockHistory,
  PeopleFill,
  BoxArrowRight,
  List,
} from "react-bootstrap-icons";
import { Link, useResolvedPath, useMatch, LinkProps } from "react-router-dom";
import TokenService from "../../services/TokenService";
import "../../assets/sass/_sidebar.scss";
import classNames from "classnames";

function SidebarLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link className={`nav-link ${match ? "active" : ""}`} to={to} {...props}>
      {children}
    </Link>
  );
}

interface SideBarProps {
  isOpen: boolean;
  toggle: () => void;
}
const LeftContent = (props: SideBarProps) => {
  let avatar = TokenService.getAuthUser()?.avatar;
  const { isOpen, toggle } = props;

  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 bg-light">
      <div
        className="nav_brand justify-content-center mt-1"
        role="button"
        onClick={toggle}
      >
        <List className="bi me-2 nav_toggle" />
      </div>
      <div className="user-profile">
        <div className="text-center">
          <img
            src={avatar ?? require("../../assets/images/fallback-user.jpg")}
            className="img-circle w-50 h-50"
            alt=""
          />
        </div>
        {isOpen ? (
          <>
            <h3 className="profile-username text-center">
              {TokenService.getAuthUser().name}
            </h3>
            <p className="text-muted text-center m-1 mt-0">
              {TokenService.getAuthUser().email}
            </p>
            <p className="text-muted text-center m-1 mt-0">
              {TokenService.getAuthUser().phone}
            </p>
          </>
        ) : (
          ""
        )}
        <hr />
      </div>

      <ul
        className={classNames("nav nav-pills nav-flush flex-column mb-auto", {
          "text-center": !isOpen,
        })}
      >
        <li className="nav-item ">
          <SidebarLink to="/dashboard" aria-current="page">
            <Speedometer2 className="bi me-2" />
            <span className={classNames({ "d-none": !isOpen })}>Dashboard</span>
          </SidebarLink>
        </li>
        <li className="nav-item">
          <SidebarLink to="send-money" aria-current="page">
            <Send className="bi me-2" />
            <span className={classNames({ "d-none": !isOpen })}>
              Send Money
            </span>
          </SidebarLink>
        </li>
        <li className="nav-item">
          <SidebarLink to="history" aria-current="page">
            <ClockHistory className="bi me-2" />
            <span className={classNames({ "d-none": !isOpen })}>History</span>
          </SidebarLink>
        </li>
        <li className="nav-item">
          <SidebarLink to="beneficiary" aria-current="page">
            <PeopleFill className="bi me-2" />
            <span className={classNames({ "d-none": !isOpen })}>
              Beneficiary
            </span>
          </SidebarLink>
        </li>
        <li className="nav-item">
          <SidebarLink to="profile" aria-current="page">
            <PersonCircle className="bi me-2" />
            <span className={classNames({ "d-none": !isOpen })}>Profile</span>
          </SidebarLink>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://registeredremitsydney.com.au"
            aria-current="page"
            onClick={() => TokenService.clearToken()}
          >
            <BoxArrowRight className="bi me-2" />
            <span className={classNames({ "d-none": !isOpen })}>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftContent;
