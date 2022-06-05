import { Formik, Form, FormikHelpers } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/LoadingButton";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

import {
  RegisterSchema,
  RegisterInitialValues,
  RegisterPayload,
} from "../../schema/auth.schema";
import { dispatchEvent } from "../../actions";
import TokenService from "../../services/TokenService";
import AuthHeaderLogo from "../../components/AuthHeaderLogo";
export default function Register() {
  let navigate = useNavigate();
  const handleOnSubmit = async (
    values: RegisterPayload,
    formikHelpers: FormikHelpers<RegisterPayload>
  ) => {
    formikHelpers.setSubmitting(true);
    values.created_by = process.env.REACT_APP_AGENT_ID;
    let r = await dispatchEvent(
      "REGISTER",
      values,
      {},
      formikHelpers.setErrors
    );
    formikHelpers.setSubmitting(false);
    if (r.success) {
      TokenService.setToken(r.data);
      navigate("/auth/email-otp");
    }
  };

  return (
    <Container fluid className="auth-screen h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col md="3">
          <AuthHeaderLogo />
          <Card className="background-snow">
            <CardBody>
              <CardTitle className="text-center">
                Register a new membership
              </CardTitle>
              <Formik
                onSubmit={(values, formikHelpers) =>
                  handleOnSubmit(values, formikHelpers)
                }
                initialValues={RegisterInitialValues}
                validationSchema={RegisterSchema}
              >
                {({
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  isSubmitting,
                }) => (
                  <Form>
                    <FormGroup>
                      <Label for="name">Full Name</Label>
                      <Input
                        type="text"
                        placeholder="Enter your name"
                        touched={touched}
                        name="name"
                        onChange={handleChange}
                        invalid={errors.name && touched.name ? true : false}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? (
                        <FormFeedback>{errors.name}</FormFeedback>
                      ) : null}
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Email Address</Label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        touched={touched}
                        onChange={handleChange}
                        invalid={errors.email && touched.email ? true : false}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <FormFeedback>{errors.email}</FormFeedback>
                      ) : null}
                    </FormGroup>
                    <FormGroup>
                      <Label for="phone">Phone Number</Label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Enter your contact number"
                        touched={touched}
                        onChange={handleChange}
                        invalid={errors.phone && touched.phone ? true : false}
                        onBlur={handleBlur}
                      />
                      {errors.phone && touched.phone ? (
                        <FormFeedback>{errors.phone}</FormFeedback>
                      ) : null}
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        touched={touched}
                        onChange={handleChange}
                        invalid={
                          errors.password && touched.password ? true : false
                        }
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password ? (
                        <FormFeedback>{errors.password}</FormFeedback>
                      ) : null}
                    </FormGroup>
                    <FormGroup>
                      <Label for="password_confirmation">
                        Confirm Password
                      </Label>
                      <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        touched={touched}
                        onChange={handleChange}
                        invalid={
                          errors.confirmPassword && touched.confirmPassword
                            ? true
                            : false
                        }
                        onBlur={handleBlur}
                      />
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <FormFeedback>{errors.confirmPassword}</FormFeedback>
                      ) : null}
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
                          type="submit"
                          text="Register"
                          loading={+isSubmitting}
                          className="btn-sm btn-flat btn-block"
                        />
                      </div>
                    </Row>
                  </Form>
                )}
              </Formik>
              <Link to="/auth/login">I already have a membership</Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
