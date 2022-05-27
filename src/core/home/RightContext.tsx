import { Link, Outlet } from "react-router-dom";
import { Alert, Container, Row } from "reactstrap";
import TokenService from "../../services/TokenService";

export default function RightContent() {
  return (
    <Container>
      <Row className="mt-3">
        {TokenService.getAuthUser()?.isKycVerified !== "VERIFIED" ? (
          <Alert color="danger mt-3 mx-0">
            Your KYC verification process is ongoing. You will be notified once
            it is updated.
            <Link className="alert-link text-underline" to="/upload-kyc">
              &nbsp; Click here ?
            </Link>
          </Alert>
        ) : (
          ""
        )}
        <Outlet />
      </Row>
    </Container>
  );
}
