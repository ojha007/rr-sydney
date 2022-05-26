import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

export default function Register() {
  return (
    <Container fluid className="auth-screen h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col md="3">
          <Card className="background-snow">
            <CardBody>
              <CardTitle className="text-center">
                Register a new membership
              </CardTitle>
              <Form>
                <FormGroup>
                  <Label for="name">Full Name</Label>
                  <Input type="email" placeholder="Enter your name" addon />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email Address</Label>
                  <Input type="email" placeholder="Enter your email address" />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" placeholder="Enter your password" />
                </FormGroup>
                <FormGroup>
                  <Label for="password_confirmation">Confirm Password</Label>
                  <Input type="password" placeholder="Confirm your password" />
                </FormGroup>
                <Row>
                  <div className="col-md-8">
                    <FormGroup check inline>
                      <Input type="checkbox" />
                      <Label check>I agree terms & condition</Label>
                    </FormGroup>
                  </div>
                  <div className="col-md-4">
                    <Button
                      color="primary"
                      className="btn-sm btn-flat btn-block"
                    >
                      Register
                    </Button>
                  </div>
                </Row>
              </Form>
              <Link to="/login">I already have a membership</Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
