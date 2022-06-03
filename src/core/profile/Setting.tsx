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
  Gender,
  ProfileInitialValues,
  ProfilePayload,
  ProfileSchema,
} from "../../schema/profile.schema";
import Button from "../../components/LoadingButton";
import { dispatchEvent } from "../../actions";
import { useEffect, useState } from "react";
import { LoggedInUser } from "../../interfaces/User";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "../../lib/DateFormatter";

function Setting(): JSX.Element {
  const [authUser, setAuthUser] = useState<LoggedInUser>();
  const fetchLoggedInUser = async () => {
    let response = await dispatchEvent("USER_DETAIL", {});
    setAuthUser(response.data.user);
  };

  useEffect(() => {
    (async () => await fetchLoggedInUser())();
  }, []);

  const handleOnSubmit = async (
    values: ProfilePayload,
    formikHelpers: FormikHelpers<ProfilePayload>
  ) => {
    formikHelpers.setSubmitting(true);
    let payload = Object.assign({}, values);
    payload.dob = formatDate(payload.dob);
    await dispatchEvent("UPDATE_PROFILE", payload, {}, formikHelpers.setErrors);
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
            gender: authUser?.gender || Gender.MALE,
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
                    <Label for="dob">Date Of Birth</Label>
                    <DatePicker
                      selected={new Date(values.dob)}
                      dateFormat="yyyy-MM-dd"
                      autoComplete="off"
                      name="dob"
                      className="form-control"
                      onChange={(date: Date) => {
                        setFieldValue("dob", formatDate(date));
                      }}
                    />

                    {errors.dob && touched.dob ? (
                      <FormFeedback>Date of birth is required.</FormFeedback>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <Label for="gender">Gender</Label>
                  <div className="clearfix"></div>
                  <FormGroup check inline>
                    <Input
                      type="radio"
                      name="gender"
                      onChange={handleChange}
                      value="male"
                      checked={values.gender === "male"}
                    />
                    <Label check>Male</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input
                      type="radio"
                      name="gender"
                      onChange={handleChange}
                      value="female"
                      checked={values.gender === "female"}
                    />
                    <Label check>Female</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input
                      type="radio"
                      name="gender"
                      onChange={handleChange}
                      value="others"
                      checked={values.gender === "others"}
                    />
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
