import {
  Speedometer2,
  PersonCircle,
  Send,
  ClockHistory,
  PeopleFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
export default function LeftContent() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-white"
      style={{ width: "280px" }}
    >
      <div className="text-center">
        <img
          src="https://registeredremit.com.au/storage/users/avatar/63e78111-6854-4944-a4ca-3a838a3fcca21651650766.png"
          className="img-responsive"
          alt=""
        />
      </div>
      <h3 className="profile-username text-center">Administration</h3>
      <p className="text-muted text-center m-1">admin@registeredremit.com.au</p>
      <p className="text-muted text-center m-1">0424451758</p>
      <Link
        to="/home"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      ></Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item ">
          <Link to="/dashboard" className="nav-link active" aria-current="page">
            <Speedometer2 className="bi me-2" />
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="send-money" className="nav-link " aria-current="page">
            <Send className="bi me-2" />
            Send Money
          </Link>
        </li>
        <li className="nav-item">
          <Link to="history" className="nav-link " aria-current="page">
            <ClockHistory className="bi me-2" />
            History
          </Link>
        </li>
        <li className="nav-item">
          <Link to="beneficiary" className="nav-link " aria-current="page">
            <PeopleFill className="bi me-2" />
            Beneficiary
          </Link>
        </li>
        <li className="nav-item">
          <Link to="profile" className="nav-link " aria-current="page">
            <PersonCircle className="bi me-2" />
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
