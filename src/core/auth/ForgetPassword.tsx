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

export default function ForgetPassword() {
  return (
    <Container fluid className="auth-screen h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col md="3">
          <Card className="background-snow">
            <CardBody>
              <CardTitle tag="p" className="auth-screen-msg">
                Enter your registered email.
                <br />
                we will send you a otp to verify your email
              </CardTitle>
              <Form>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    addon
                  />
                </FormGroup>
                <Button color="primary" className="btn-sm btn-flat btn-block">
                  Send OTP
                </Button>
              </Form>
              <Link className="mt-1" to="/login">
                Back to login
              </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
