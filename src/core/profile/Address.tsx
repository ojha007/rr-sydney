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
  UserAddressInitialValues,
  UserAddressPayload,
  UserAddressSchema,
} from "../../schema/profile.schema";
import Button from "../../components/LoadingButton";
import { dispatchEvent } from "../../actions";
import { useEffect, useState } from "react";
import { IOption, IOptionV2, ISuburb } from "../../interfaces/common";

const UserAddress = () => {
  const [address, setUserAddress] = useState<UserAddressPayload>(
    UserAddressInitialValues
  );
  const [countries, setCountries] = useState<IOption[]>([]);
  const [states, setStates] = useState<IOptionV2[]>([]);
  const [suburbs, setSuburbs] = useState<ISuburb[]>([]);

  useEffect(() => {
    Promise.all([
      dispatchEvent("USER_ADDRESS_GET", {}),
      dispatchEvent("MASTER_DATA", {}, { type: "countries", user: "sender" }),
    ]).then((response) => {
      let userAddress = response[0].data;
      setUserAddress(userAddress ?? []);
      if (userAddress.country_id) {
        handleOnCountryChange(userAddress.country_id);
        handleOnStateChange(userAddress.state_id);
        setUserAddress((prev) => ({
          ...prev,
          postal_code: userAddress.post_code,
        }));
      }
      setCountries(response[1].data);
    });
  }, []);

  const handleOnCountryChange = async (countryId: string) => {
    let response = await dispatchEvent("STATE_LIST", {}, { countryId });
    setStates(response.data);
  };

  const handleOnStateChange = async (stateId: string) => {
    let response = await dispatchEvent("SUBURB_LIST", {}, { stateId });
    setSuburbs(response.data);
  };

  const handleOnSubmit = async (
    values: UserAddressPayload,
    { setSubmitting, setErrors }: FormikHelpers<UserAddressPayload>
  ) => {
    setSubmitting(true);
    await dispatchEvent("USER_ADDRESS_POST", values, {}, setErrors);
    setSubmitting(false);
  };

  return (
    <TabPane tabId="ADDRESS">
      <Formik
        enableReinitialize
        onSubmit={(values, formikHelpers) =>
          handleOnSubmit(values, formikHelpers)
        }
        initialValues={address}
        validationSchema={UserAddressSchema}
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
          <Form>
            <Row>
              <Col sm="12" md="6">
                <FormGroup>
                  <Label for="name">Select County</Label>
                  <Input
                    type="select"
                    name="country_id"
                    value={values.country_id ?? 13}
                    disabled
                    errors={errors}
                    touched={touched}
                    onChange={(e) => {
                      handleOnCountryChange(e.target.value);
                      setFieldValue("country_id", e.target.value);
                    }}
                    invalid={
                      errors.country_id && touched.country_id ? true : false
                    }
                    onBlur={handleBlur}
                  >
                    <option>-----SELECT STATE----</option>
                    {countries.map((country: IOption) => {
                      return (
                        <option key={country.id} value={country.id}>
                          {country.value}
                        </option>
                      );
                    })}
                  </Input>
                  {errors.country_id && touched.country_id ? (
                    <FormFeedback>{errors.country_id}</FormFeedback>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="5" md="5">
                <FormGroup>
                  <Label for="select">Select State</Label>
                  <Input
                    type="select"
                    name="state_id"
                    errors={errors}
                    value={values.state_id}
                    touched={touched}
                    onChange={(e) => {
                      handleOnStateChange(e.target.value);
                      setFieldValue("state_id", e.target.value);
                      setFieldValue("postal_code", "");
                    }}
                    invalid={errors.state_id && touched.state_id ? true : false}
                    onBlur={handleBlur}
                  >
                    <option>-----SELECT STATE----</option>
                    {states.map((state: IOptionV2) => {
                      return (
                        <option key={state.id} value={state.id}>
                          {state.name}
                        </option>
                      );
                    })}
                  </Input>

                  {errors.state_id && touched.state_id ? (
                    <FormFeedback>{errors.state_id}</FormFeedback>
                  ) : null}
                </FormGroup>
              </Col>
              <Col sm="5" md="5">
                <FormGroup>
                  <Label for="suburb_id">Select Suburb</Label>
                  <Input
                    type="select"
                    name="suburb_id"
                    errors={errors}
                    value={values.suburb_id}
                    touched={touched}
                    onChange={(e: any) => {
                      let c =
                        e.target?.selectedOptions[0].getAttribute(
                          "data-postcode"
                        );
                      setFieldValue("suburb_id", e.target.value);
                      setFieldValue("postal_code", c);
                    }}
                    invalid={
                      errors.suburb_id && touched.suburb_id ? true : false
                    }
                    onBlur={handleBlur}
                  >
                    <option>-----SELECT SUBURB----</option>
                    {suburbs.map((suburb: ISuburb) => {
                      return (
                        <option
                          data-postcode={suburb.post_code}
                          key={suburb.id}
                          value={suburb.id}
                        >
                          {suburb.name}
                        </option>
                      );
                    })}
                  </Input>

                  {errors.suburb_id && touched.suburb_id ? (
                    <FormFeedback>{errors.suburb_id}</FormFeedback>
                  ) : null}
                </FormGroup>
              </Col>
              <Col sm="2" md="2">
                <FormGroup>
                  <Label for="postal_code">Postal Code</Label>
                  <Input
                    type="text"
                    readOnly
                    name="postal_code"
                    defaultValue={values.postal_code}
                    errors={errors}
                    invalid={errors.postal_code ? true : false}
                    disabled
                  />

                  {errors.postal_code && touched.postal_code ? (
                    <FormFeedback>{errors.postal_code}</FormFeedback>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="12">
                <FormGroup>
                  <Label for="street">Street</Label>
                  <Input
                    type="text"
                    name="street"
                    errors={errors}
                    value={values.street}
                    touched={touched}
                    onChange={handleChange}
                    invalid={errors.street && touched.street ? true : false}
                    onBlur={handleBlur}
                  />

                  {errors.street && touched.street ? (
                    <FormFeedback>{errors.street}</FormFeedback>
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
export default UserAddress;
