import { Outlet } from "react-router-dom";
import { Container, Row } from "reactstrap";

export default function RightContent() {
  return (
    <Container>
      <Row className="mt-3">
        <Outlet />
      </Row>
    </Container>
  );
}
