import { Col, Container, Row } from "reactstrap";
import LeftContent from "./LeftContent";
import NavBar from "./Navbar";
import RightContent from "./RightContext";

export default function Dashboard() {
  return (
    <Container>
      <NavBar />
      <Row>
        <Col md="3" className="mt-3">
          <LeftContent />
        </Col>
        <Col md="9" sm="12" className="mt-3 primary-screen">
          <RightContent />
        </Col>
      </Row>
    </Container>
  );
}
