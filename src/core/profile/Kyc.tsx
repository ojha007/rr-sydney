import { Form, Formik, FormikHelpers } from "formik";
import Button from "../../components/LoadingButton";
import {
  Row,
  TabPane,
  Col,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import {
  KYCFormSchema,
  KycInitialValues,
  KYCPayload,
  KycServerResponse,
} from "../../schema/profile.schema";
import { useEffect, useState } from "react";
import { dispatchEvent } from "../../actions";
import { IOption } from "../../interfaces/common";
import { FileUpload } from "../../components/FileUploader";

const KYCForm = () => {
  const [identityTypes, setIdentityTypes] = useState<IOption[]>([]);
  const [issuerTypes, setIssuerTypesTypes] = useState<IOption[]>([]);
  const [uploadedFile, setUploadedFile] = useState<File | undefined>();
  const [userKyc, setUserKyc] = useState<KycServerResponse>();

  useEffect(() => {
    Promise.all([
      dispatchEvent("USER_KYC", {}),
      dispatchEvent("MASTER_DATA", {}, { type: "identity-types" }),
      dispatchEvent("MASTER_DATA", {}, { type: "identity-issuers" }),
    ]).then((response) => {
      setUserKyc(response[0].data);
      setIdentityTypes(response[1].data);
      setIssuerTypesTypes(response[2].data);
    });
  }, []);

  const handleOnSubmit = async (
    values: KYCPayload,
    formikHelpers: FormikHelpers<KYCPayload>
  ) => {
    console.log(values);
    formikHelpers.setSubmitting(true);
    await dispatchEvent("KYC_POST", values, undefined, formikHelpers.setErrors);
    formikHelpers.setSubmitting(false);
  };
  return (
    <TabPane tabId="KYC">
      <Row>
        <Formik
          enableReinitialize
          onSubmit={(values, formikHelpers) =>
            handleOnSubmit(values, formikHelpers)
          }
          initialValues={userKyc?.kycStatus ? userKyc : KycInitialValues}
          validationSchema={KYCFormSchema}
        >
          {({
            errors,
            touched,
            handleBlur,
            handleChange,
            isSubmitting,
            values,
          }) => (
            <Form autoComplete="off">
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="identity_type_id">Select Identity Type</Label>
                    <Input
                      type="select"
                      name="identity_type_id"
                      errors={errors}
                      touched={touched}
                      value={values.identity_type_id}
                      onChange={handleChange}
                      invalid={
                        errors.identity_type_id && touched.identity_type_id
                          ? true
                          : false
                      }
                      onBlur={handleBlur}
                    >
                      <option>----SELECT IDENTITY TYPE----</option>
                      {identityTypes.map((option: IOption) => (
                        <option key={option.id} value={option.id}>
                          {option.value}
                        </option>
                      ))}
                    </Input>
                    {errors.identity_type_id && touched.identity_type_id ? (
                      <FormFeedback>{errors.identity_type_id}</FormFeedback>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="id_number">Identity No.</Label>
                    <Input
                      type="text"
                      name="id_number"
                      errors={errors}
                      touched={touched}
                      value={values.id_number}
                      onChange={handleChange}
                      invalid={
                        errors.id_number && touched.id_number ? true : false
                      }
                      placeholder="Enter your identity number"
                      onBlur={handleBlur}
                    />

                    {errors.id_number && touched.id_number ? (
                      <FormFeedback>{errors.id_number}</FormFeedback>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="issuer_type_id">Select Issuer</Label>
                    <Input
                      type="select"
                      name="issuer_id"
                      errors={errors}
                      touched={touched}
                      value={values.issuer_id}
                      onChange={handleChange}
                      invalid={
                        errors.issuer_id && touched.issuer_id ? true : false
                      }
                      onBlur={handleBlur}
                    >
                      <option>----SELECT IDENTITY ISSUER ----</option>
                      {issuerTypes.map((option: IOption) => (
                        <option key={option.id} value={option.id}>
                          {option.value}
                        </option>
                      ))}
                    </Input>
                    {errors.issuer_id && touched.issuer_id ? (
                      <FormFeedback>{errors.issuer_id}</FormFeedback>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="id_number">Expiry Date</Label>
                    <Input
                      type="text"
                      name="expiry_date"
                      errors={errors}
                      touched={touched}
                      value={values.expiry_date}
                      onChange={handleChange}
                      invalid={
                        errors.expiry_date && touched.expiry_date ? true : false
                      }
                      placeholder="Enter your identity number"
                      onBlur={handleBlur}
                    />

                    {errors.expiry_date && touched.expiry_date ? (
                      <FormFeedback>{errors.expiry_date}</FormFeedback>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Label>Upload your Identity Image</Label>
                <FileUpload
                  setUploadedFile={setUploadedFile}
                  uploadedFile={uploadedFile}
                />
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
                    text={userKyc?.kycStatus ? "Update" : "Save"}
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
};

export default KYCForm;
