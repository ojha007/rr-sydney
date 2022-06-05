import { Formik, Form, FormikHelpers } from "formik";
import { ArrowLeft } from "react-bootstrap-icons";
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
import {
  ForgetPasswordIn,
  ForgetPasswordInitialValues,
  ForgetPasswordSchema,
} from "../../schema/auth.schema";

import Button from "../../components/LoadingButton";
import { dispatchEvent } from "../../actions";
import AuthHeaderLogo from "../../components/AuthHeaderLogo";

export default function ForgetPassword() {
  let navigate = useNavigate();
  const handleOnSubmit = async (
    values: ForgetPasswordIn,
    { setErrors, setSubmitting }: FormikHelpers<ForgetPasswordIn>
  ) => {
    setSubmitting(true);
    let r = await dispatchEvent("FORGET_PASSWORD", values, {}, setErrors);
    setSubmitting(false);
    if (r.success)
      navigate("/auth/email-otp", {
        state: values.email,
      });
  };

  return (
    <Container fluid className="auth-screen h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col md="3">
          <AuthHeaderLogo />
          <Card className="background-snow">
            <CardBody>
              <CardTitle tag="p" className="auth-screen-msg">
                Enter your registered email.
                <br />
                we will send you a otp to verify your email
              </CardTitle>
              <Formik
                onSubmit={(values, formikHelpers) =>
                  handleOnSubmit(values, formikHelpers)
                }
                initialValues={ForgetPasswordInitialValues}
                validationSchema={ForgetPasswordSchema}
              >
                {({
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  isSubmitting,
                  values,
                }) => (
                  <Form>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                        errors={errors}
                        touched={touched}
                        value={values.email}
                        onChange={handleChange}
                        invalid={errors.email && touched.email ? true : false}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <FormFeedback>{errors.email}</FormFeedback>
                      ) : null}
                    </FormGroup>
                    <Button
                      loading={+isSubmitting}
                      text="Send Otp"
                      color="primary"
                      type="submit"
                      className="btn-sm btn-flat btn-block"
                    />
                  </Form>
                )}
              </Formik>
              <Row className="mt-2">
                <Link to="/auth/login">
                  <ArrowLeft /> Back to login
                </Link>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
