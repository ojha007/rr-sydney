import { FormikHelpers, Formik, Form } from "formik";
import {
  Col,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
  TabPane,
} from "reactstrap";
import {
  ChangePasswordPayload,
  ChangePasswordInitialValues,
  ChangePasswordSchema,
} from "../../schema/profile.schema";
import Button from "../../components/LoadingButton";
import { dispatchEvent } from "../../actions";

const ChangePassword = () => {
  const handleOnSubmit = async (
    values: ChangePasswordPayload,
    { setSubmitting, setErrors }: FormikHelpers<ChangePasswordPayload>
  ) => {
    setSubmitting(true);
    await dispatchEvent("CHANGE_PASSWORD", values, {}, setErrors);
    setSubmitting(false);
  };

  return (
    <TabPane tabId="CHANGE_PASSWORD">
      <Formik
        enableReinitialize
        onSubmit={(values, formikHelpers) =>
          handleOnSubmit(values, formikHelpers)
        }
        initialValues={ChangePasswordInitialValues}
        validationSchema={ChangePasswordSchema}
      >
        {({ errors, touched, handleBlur, handleChange, isSubmitting }) => (
          <Form>
            <Row>
              <Col sm="12" md="6">
                <FormGroup>
                  <Label for="name">Old Password</Label>
                  <Input
                    type="text"
                    name="oldPassword"
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    invalid={
                      errors.oldPassword && touched.oldPassword ? true : false
                    }
                    onBlur={handleBlur}
                  />

                  {errors.oldPassword && touched.oldPassword ? (
                    <FormFeedback>{errors.oldPassword}</FormFeedback>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="6">
                <FormGroup>
                  <Label for="name">New Password</Label>
                  <Input
                    type="text"
                    name="newPassword"
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    invalid={
                      errors.newPassword && touched.newPassword ? true : false
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
              <Col sm="12" md="6">
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
                    <FormFeedback>{errors.confirmPassword}</FormFeedback>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>
            <Row className="mt-3">
              <div className="box-footer justify-content-between pt-3">
                <Button
                  type="reset"
                  loading={0}
                  text="Reset"
                  color="danger"
                  className="btn-sm btn-flat "
                />
                <Button
                  type="submit"
                  loading={+isSubmitting}
                  text="Change"
                  color="primary"
                  className="btn-sm btn-flat "
                />
              </div>
            </Row>
          </Form>
        )}
      </Formik>
    </TabPane>
  );
};
export default ChangePassword;
