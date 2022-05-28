import { useState } from "react";
import { Nav, NavItem, NavLink, TabContent } from "reactstrap";
import ChangePassword from "../profile/ChangePassword";
import KYCForm from "../profile/Kyc";
import Setting from "../profile/Setting";

const Profile = () => {
  const tabContent: string[] = ["KYC", "CHANGE_PASSWORD", "SETTING"];
  const [currentTab, setCurrentTab] = useState(tabContent[0]);
  return (
    <div className="box">
      <div className="box-header">Your Profile Section</div>
      <Nav tabs className="tab-03 mt-2 px-4">
        <NavItem>
          <NavLink
            className={currentTab === "KYC" ? "active" : ""}
            onClick={() => setCurrentTab("KYC")}
          >
            Manage Your Kyc
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={currentTab === "SETTING" ? "active" : ""}
            onClick={() => setCurrentTab("SETTING")}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={currentTab === "CHANGE_PASSWORD" ? "active" : ""}
            onClick={() => setCurrentTab("CHANGE_PASSWORD")}
          >
            Change Password
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={currentTab} className={"m-3"}>
        <KYCForm />
        <Setting />
        <ChangePassword />
      </TabContent>
    </div>
  );
};

export default Profile;
