import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import LeftContent from "./LeftContent";
import NavBar from "./Navbar";
import RightContent from "./RightContext";

export default function Dashboard() {
  const [sidebarIsOpen, setSidebarOpen] = useState<boolean>(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  return (
    <Container className="primary-screen ">
      <NavBar />
      <Row className="mt-3">
        <Col md={sidebarIsOpen ? 3 : 1} sm={sidebarIsOpen ? 3 : 1}>
          <LeftContent isOpen={sidebarIsOpen} toggle={toggleSidebar} />
        </Col>
        <Col md={sidebarIsOpen ? 9 : 11} sm={sidebarIsOpen ? 9 : 11}>
          <RightContent />
        </Col>
      </Row>
    </Container>
  );
}
