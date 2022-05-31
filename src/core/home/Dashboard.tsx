import { ToastContainer } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import LeftContent from "./LeftContent";
import NavBar from "./Navbar";
import RightContent from "./RightContext";

export default function Dashboard() {
  return (
    <Container className="primary-screen">
      <NavBar />
      <Row className="mt-3">
        <Col md={3} sm={3}>
          <LeftContent />
        </Col>
        <Col md={9} sm={9}>
          <RightContent />
        </Col>
      </Row>
    </Container>
  );
}
