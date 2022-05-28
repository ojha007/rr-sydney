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

function Setting(): JSX.Element {
  const formatDate = (tgl: Date) => {
    var temp = tgl.toLocaleDateString().split("/");
    return temp[0] + "-" + temp[1] + "-" + temp[2];
  };
  const [authUser, setAuthUser] = useState<LoggedInUser>();

  const fetchLoggedInUser = async () => {
    let response = await dispatchEvent("USER_DETAIL", {});
    setAuthUser(response.data.user);
    console.log(authUser);
  };

  useEffect(() => {
    (async () => await fetchLoggedInUser())();
  }, []);

  const handleOnSubmit = async (
    values: ProfilePayload,
    formikHelpers: FormikHelpers<ProfilePayload>
  ) => {
    console.log(values);
    formikHelpers.setSubmitting(true);
    let payload: any = Object.assign({}, values);
    payload.date_of_birth = "1997-02-02";
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
                    <Label for="date_of_birth">Date Of Birth</Label>
                    <DatePicker
                      selected={values.date_of_birth}
                      dateFormat="yyyy-MM-dd"
                      autoComplete="off"
                      name="date_of_birth"
                      className="form-control"
                      // value={values.date_of_birth}
                      onChange={(date: Date) =>
                        setFieldValue("date_of_birth", date)
                      }
                    />

                    {errors.date_of_birth && touched.date_of_birth ? (
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
