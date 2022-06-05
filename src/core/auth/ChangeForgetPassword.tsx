import { FormikHelpers, Formik, Form } from "formik";
import {
  Card,
  CardBody,
  CardFooter,
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
  F_P_PasswordInitialValues,
  F_P_PasswordPayload,
  F_P_PasswordSchema,
} from "../../schema/profile.schema";
import Button from "../../components/LoadingButton";
import { dispatchEvent } from "../../actions";
import { useLocation, useNavigate } from "react-router";
import AuthHeaderLogo from "../../components/AuthHeaderLogo";

const ChangeForgetPassword = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const handleOnSubmit = async (
    values: F_P_PasswordPayload,
    { setSubmitting, setErrors }: FormikHelpers<F_P_PasswordPayload>
  ) => {
    setSubmitting(true);
    let r = await dispatchEvent("F_P_CHANGE", values, {}, setErrors);
    if (r.success) {
      navigate("/auth/login");
    }
    setSubmitting(false);
  };

  return (
    <Container fluid className="auth-screen h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col md="3">
          <AuthHeaderLogo />
          <Card className="background-snow">
            <CardBody>
              <CardTitle tag="p" className="auth-screen-msg">
                You can change your password
              </CardTitle>
              <Formik
                enableReinitialize
                onSubmit={(values, formikHelpers) =>
                  handleOnSubmit(values, formikHelpers)
                }
                initialValues={{
                  ...F_P_PasswordInitialValues,
                  email: location.state as string,
                }}
                validationSchema={F_P_PasswordSchema}
              >
                {({
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  isSubmitting,
                }) => (
                  <Form>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label for="name">New Password</Label>
                          <Input
                            type="text"
                            name="newPassword"
                            errors={errors}
                            touched={touched}
                            onChange={handleChange}
                            invalid={
                              errors.newPassword && touched.newPassword
                                ? true
                                : false
                            }
                            onBlur={handleBlur}
                          />

                          {errors.newPassword && touched.newPassword ? (
                            <FormFeedback>{errors.newPassword}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label for="name">Confirm New Password</Label>
                          <Input
                            type="text"
                            name="confirmPassword"
                            errors={errors}
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
                            <FormFeedback>
                              {errors.confirmPassword}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    <CardFooter
                      className="p-0"
                      style={{ backgroundColor: "none" }}
                    >
                      <Button
                        type="submit"
                        loading={+isSubmitting}
                        text="Reset Password"
                        color="primary"
                        className="btn-sm btn-flat btn-block"
                      />
                    </CardFooter>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ChangeForgetPassword;
