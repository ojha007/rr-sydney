import { Link } from "react-router-dom";
import { Alert } from "reactstrap";
import { LoggedInUser } from "../interfaces/User";

interface UploadYourKycI {
  user: LoggedInUser;
}
const UploadYourKyc = (props: UploadYourKycI) => {
  return (
    <>
      <Alert color="danger mt-3 mx-0">
        {props.user.kycMessage}
        <Link className="alert-link text-underline" to="/dashboard/profile">
          &nbsp; Click here ?
        </Link>
      </Alert>
      <div className="d-flex justify-content-center">
        <img
          src={require("../assets/images/upload-kyc.png")}
          alt=""
          className="img-responsive"
        />
      </div>
    </>
  );
};

export default UploadYourKyc;
