import { Form, Formik, FormikHelpers } from "formik";
import { useEffect, useState } from "react";
import { Col, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import { dispatchEvent } from "../../actions";
import { IOption } from "../../interfaces/common";
import {
  initialValues,
  TodayRateInterface,
  TransactionPayload,
  TransactionSchema,
} from "../../schema/transaction.schema";
import Button from "../../components/LoadingButton";
import { FilesUpload } from "../../components/FileUploader";

const SendMoney = () => {
  const fetchTodayRate = async () => {
    let response = await dispatchEvent("TODAY_RATE_V2", {});
    if (response.success) setTodayRate(response.data);
  };

  useEffect(() => {});

  const [beneficiaries, setBeneficiaries] = useState<Array<IOption>>([]);
  const [todayRate, setTodayRate] = useState<TodayRateInterface>();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleOnSubmit = async (
    values: TransactionPayload,
    formikHelpers: FormikHelpers<TransactionPayload>
  ) => {
    console.log(values);
    values.files = uploadedFiles;
    formikHelpers.setSubmitting(true);
    await dispatchEvent("SEND_MONEY", values, {}, formikHelpers.setErrors);
    formikHelpers.setSubmitting(false);
  };

  useEffect(() => {
    (async () => await fetchTodayRate())();
    (async () => await fetchBeneficiary())();
  }, []);

  const fetchBeneficiary = async () => {
    let response = await dispatchEvent("BENEFICIARY_LIST");
    let data: IOption[] = response.data?.map((item: any) => {
      return {
        id: item.id,
        value: item.name + " [ " + item.relationship + " ]",
      };
    });
    setBeneficiaries(data);
  };
  return (
    <div className="send-money-screen box">
      {todayRate?.errorMessage ? (
        <>
          <div className="box-header">{todayRate.errorMessage}</div>
          <div className="box-body"></div>
        </>
      ) : (
        <>
          <div className="box-header">
            You can send money to your friends and family.
          </div>
          <Formik
            enableReinitialize
            onSubmit={(values, formikHelpers) =>
              handleOnSubmit(values, formikHelpers)
            }
            initialValues={{
              ...initialValues,
              charge: todayRate?.charge || 10,
            }}
            validationSchema={TransactionSchema}
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
                <div className="box-body">
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="name">Select Receiver</Label>
                        <Input
                          type="select"
                          name="beneficiary_id"
                          placeholder="Enter Receiver name"
                          errors={errors}
                          touched={touched}
                          onChange={handleChange}
                          invalid={
                            errors.beneficiary_id && touched.beneficiary_id
                              ? true
                              : false
                          }
                          onBlur={handleBlur}
                        >
                          <option>----SELECT RECEIVER----</option>
                          {beneficiaries.map((option: IOption) => (
                            <option key={option.id} value={option.id}>
                              {option.value}
                            </option>
                          ))}
                        </Input>
                        {errors.beneficiary_id && touched.beneficiary_id ? (
                          <FormFeedback>{errors.beneficiary_id}</FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="name">Sending Amount (AUD)</Label>
                        <Input
                          type="text"
                          name="sending_amount"
                          placeholder="Enter Sending amount"
                          errors={errors}
                          touched={touched}
                          onChange={handleChange}
                          invalid={
                            errors.sending_amount && touched.sending_amount
                              ? true
                              : false
                          }
                          onBlur={handleBlur}
                        />
                        {errors.sending_amount && touched.sending_amount ? (
                          <FormFeedback>{errors.sending_amount}</FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="rate">Today Rate</Label>
                        <Input
                          type="text"
                          readOnly
                          name="rate"
                          value={values.rate}
                          placeholder="Today Rate"
                          errors={errors}
                          touched={touched}
                          onChange={handleChange}
                          invalid={errors.rate && touched.rate ? true : false}
                          onBlur={handleBlur}
                        />

                        {errors.rate && touched.rate ? (
                          <FormFeedback>{errors.rate}</FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="rate">Service Charge (AUD)</Label>
                        <Input
                          type="number"
                          readOnly
                          name="charge"
                          value={values.charge}
                          placeholder="Service Charge"
                          errors={errors}
                          touched={touched}
                          onChange={handleChange}
                          invalid={
                            errors.charge && touched.charge ? true : false
                          }
                          onBlur={handleBlur}
                        />

                        {errors.charge && touched.charge ? (
                          <FormFeedback>{errors.charge}</FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="rate">Receiving Amount (NPR)</Label>
                        <Input
                          type="text"
                          readOnly
                          value={values.receiving_amount}
                          name="receiving_amount"
                          placeholder="Receiving Amount"
                          errors={errors}
                          touched={touched}
                          onChange={handleChange}
                          invalid={
                            errors.receiving_amount && touched.receiving_amount
                              ? true
                              : false
                          }
                          onBlur={handleBlur}
                        />

                        {errors.receiving_amount && touched.receiving_amount ? (
                          <FormFeedback>{errors.receiving_amount}</FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label>Upload your Payment screenshot</Label>
                    <FilesUpload
                      setUploadedFiles={setUploadedFiles}
                      uploadedFiles={uploadedFiles}
                    />
                  </Row>
                </div>
                <div className="box-footer justify-content-between ">
                  <Button
                    loading={0}
                    type="reset"
                    className="btn btn-danger btn-sm"
                    text="Reset"
                  ></Button>
                  <Button
                    className="btn btn-primary btn-sm"
                    loading={+isSubmitting}
                    type="submit"
                    text="Send Money"
                  ></Button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default SendMoney;
