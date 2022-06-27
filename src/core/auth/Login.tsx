import { Form, Formik, FormikHelpers } from "formik";
import Button from "../../components/LoadingButton";
import { Link, useNavigate } from "react-router-dom";
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
import { dispatchEvent } from "../../actions";
import {
  LoginSchema,
  LoginInitialValues,
  LoginPayload,
} from "../../schema/auth.schema";
import { LoggedInUser } from "../../interfaces/User";
import TokenService from "../../services/TokenService";
import AuthHeaderLogo from "../../components/AuthHeaderLogo";

export default function Login() {
  let navigate = useNavigate();

  const handleOnSubmit = async (
    values: LoginPayload,
    formikHelpers: FormikHelpers<LoginPayload>
  ) => {
    formikHelpers.setSubmitting(true);
    let r = await dispatchEvent("LOGIN", values, {}, formikHelpers.setErrors);
    formikHelpers.setSubmitting(false);
    if (r.success) {
      let user: LoggedInUser = TokenService.getAuthUser();
      if (user.isKycVerified !== "VERIFIED") navigate("/dashboard/user/kyc");
      if (!user.address) navigate("/dashboard/user/address");
      navigate("/dashboard");
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
                Sign in to start your session
              </CardTitle>
              <Formik
                onSubmit={(values, formikHelpers) =>
                  handleOnSubmit(values, formikHelpers)
                }
                initialValues={LoginInitialValues}
                validationSchema={LoginSchema}
              >
                {({
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  isSubmitting,
                }) => (
                  <>
                    <Form autoComplete="off">
                      <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                          type="email"
                          name="email"
                          errors={errors}
                          touched={touched}
                          onChange={handleChange}
                          invalid={errors.email && touched.email ? true : false}
                          placeholder="Enter your email address"
                          onBlur={handleBlur}
                        />

                        {errors.email && touched.email ? (
                          <FormFeedback>{errors.email}</FormFeedback>
                        ) : null}
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                          placeholder="Enter your password"
                          invalid={
                            errors.password && touched.password ? true : false
                          }
                        />
                        {errors.password && touched.password ? (
                          <FormFeedback>{errors.password}</FormFeedback>
                        ) : null}
                      </FormGroup>
                      <Row>
                        <div className="col-md-8">
                          <FormGroup check inline>
                            <Input type="checkbox" />
                            <Label check>Remember Me </Label>
                          </FormGroup>
                        </div>
                        <div className="col-md-4">
                          <Button
                            type="submit"
                            loading={+isSubmitting}
                            text="Login"
                            color="primary"
                            className="btn-sm btn-flat btn-block"
                          />
                        </div>
                      </Row>
                    </Form>
                  </>
                )}
              </Formik>
              <Link to="/auth/forget-password">Forget Your Password?</Link>
              <div className="clearfix mt-1"></div>
              <Link to="/auth/register">Register a new membership</Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
