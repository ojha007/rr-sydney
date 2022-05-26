import { Link, Outlet } from "react-router-dom";
import { Alert, Breadcrumb, BreadcrumbItem, Container, Row } from "reactstrap";
import TokenService from "../../services/TokenService";

export default function RightContent() {
  return (
    <Container>
      <Row className="mt-3">
        {TokenService.getAuthUser()?.isKycVerified !== "VERIFIED" ? (
          <Alert color="danger mt-3 mx-0">
            Upload Your kyc
            <Link className="alert-link" to="/upload-kyc">
              &nbsp; click here
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
