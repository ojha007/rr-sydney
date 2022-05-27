import { Form, Formik, FormikHelpers } from "formik";
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
  ProfileInitialValues,
  ProfilePayload,
  ProfileSchema,
} from "../../schema/profile.schema";
import Button from "../../components/LoadingButton";
import { dispatchEvent } from "../../actions";
import { useEffect, useState } from "react";
import TokenService from "../../services/TokenService";
import { LoggedInUser } from "../../interfaces/User";
// import DatePicker from "react-datepicker";

function Setting(): JSX.Element {
  const [authUser, setAuthUser] = useState<LoggedInUser>();

  useEffect(() => {
    let authUser: LoggedInUser = TokenService.getAuthUser();
    setAuthUser(authUser);
  }, []);

  const handleOnSubmit = async (
    values: ProfilePayload,
    formikHelpers: FormikHelpers<ProfilePayload>
  ) => {
    console.log(values);
    formikHelpers.setSubmitting(true);
    await dispatchEvent("UPDATE_PROFILE", values, {}, formikHelpers.setErrors);
    formikHelpers.setSubmitting(false);
  };

  return (
    <TabPane tabId="SETTING">
      <Row>
        <Formik
          enableReinitialize
          onSubmit={(values, formikHelpers) =>
            handleOnSubmit(values, formikHelpers)
          }
          initialValues={{
            ...ProfileInitialValues,
            email: authUser?.email || "",
            name: authUser?.name || "",
            phone: authUser?.phone || "",
          }}
          validationSchema={ProfileSchema}
        >
          {({
            errors,
            touched,
            handleBlur,
            handleChange,
            isSubmitting,
            setFieldValue,
            values,
          }) => (
            <Form autoComplete="off">
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="name">Your Full Name</Label>
                    <Input
                      type="text"
                      name="name"
                      errors={errors}
                      touched={touched}
                      value={values.name}
                      onChange={handleChange}
                      invalid={errors.name && touched.name ? true : false}
                      onBlur={handleBlur}
                    />

                    {errors.name && touched.name ? (
                      <FormFeedback>{errors.name}</FormFeedback>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="email">Your Email Address</Label>
                    <Input
                      type="email"
                      name="email"
                      errors={errors}
                      touched={touched}
                      value={values.email}
                      onChange={handleChange}
                      readOnly
                      invalid={errors.email && touched.email ? true : false}
                      onBlur={handleBlur}
                    />

                    {errors.email && touched.email ? (
                      <FormFeedback>{errors.email}</FormFeedback>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="name">Your Contact Number</Label>
                    <Input
                      type="tel"
                      name="phone"
                      errors={errors}
                      touched={touched}
                      readOnly
                      value={values.phone}
                      onChange={handleChange}
                      invalid={errors.phone && touched.phone ? true : false}
                      onBlur={handleBlur}
                    />

                    {errors.phone && touched.phone ? (
                      <FormFeedback>{errors.phone}</FormFeedback>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="date_of_birth">Date Of Birth</Label>
                    <Input
                      type="text"
                      selected={values.date_of_birth}
                      dateFormat="yyyy-m-dd"
                      className="form-control"
                      name="date_of_birth"
                      errors={errors}
                      touched={touched}
                      value={values.date_of_birth}
                      onChange={(date: any) =>
                        setFieldValue("date_of_birth", date)
                      }
                      invalid={
                        errors.date_of_birth && touched.date_of_birth
                          ? true
                          : false
                      }
                    />

                    {errors.date_of_birth && touched.date_of_birth ? (
                      <FormFeedback>{errors.date_of_birth}</FormFeedback>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <Label for="sex">Gender</Label>
                  <div className="clearfix"></div>
                  <FormGroup check inline>
                    <Input type="radio" name="sex" />
                    <Label check>Male</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="radio" name="sex" />
                    <Label check>Female</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="radio" name="sex" />
                    <Label check>Others</Label>
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
                    text={"Update"}
                    color="primary"
                    className="btn-sm btn-flat "
                  />
                </div>
              </Row>
            </Form>
          )}
        </Formik>
      </Row>
    </TabPane>
  );
}
export default Setting;
