import { Nav, NavItem, TabContent, NavLink } from "reactstrap";

import { Outlet, useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useState } from "react";

const navItems: any = {
  KYC: {
    label: "Your Kyc",
    url: "/dashboard/user/kyc",
  },
  ADDRESS: {
    label: "Current Address",
    url: "/dashboard/user/address",
  },
  SETTING: {
    label: "Profile Setting",
    url: "/dashboard/user/setting",
  },
  CHANGE_PASSWORD: {
    label: "Change Password",
    url: "/dashboard/user/change-password",
  },
};
const Profile = () => {
  const history = createBrowserHistory({ window });
  let currentPath = Object.keys(navItems).find(
    (key) => navItems[key].url === history.location.pathname
  );
  let navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(currentPath);
  const handleSelect = (tab: any) => {
    setCurrentTab(tab);
    navigate(navItems[tab].url);
  };

  return (
    <div className="box">
      <div className="box-header">Your Profile Section</div>
      <Nav tabs className="tab-03 mt-2 px-4 tab-scrollable">
        {Object.keys(navItems).map((item: any, index: number) => {
          return (
            <NavItem key={index}>
              <NavLink
                className={currentTab === item ? "active" : ""}
                onClick={() => handleSelect(item)}
              >
                {navItems[item].label}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
      <TabContent activeTab={currentTab} className="m-3">
        <Outlet />
      </TabContent>
    </div>
  );
};
export default Profile;
