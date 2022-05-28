import { Link } from "react-router-dom";
import { Alert } from "reactstrap";
import TokenService from "../services/TokenService";

const UploadYourKyc = () => {
  return (
    <>
      {TokenService.getAuthUser()?.isKycVerified !== "VERIFIED" ? (
        <>
          <Alert color="danger mt-3 mx-0">
            {TokenService.getAuthUser()?.kycMessage}
            <Link className="alert-link text-underline" to="/upload-kyc">
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
      ) : (
        ""
      )}
    </>
  );
};

export default UploadYourKyc;
