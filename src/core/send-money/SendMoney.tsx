import { Form, Formik, FormikHelpers } from "formik";
import { useEffect, useState } from "react";
import {
  Col,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
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
import UploadYourKyc from "../../components/UploadYourKyc";
import { LoggedInUser } from "../../interfaces/User";

const SendMoney = () => {
  return (
    <div className="send-money-screen box">
      <Render />
    </div>
  );
};

export default SendMoney;

function SendMoneySpinner() {
  return (
    <div className="text-center p-2 m-3">
      <Spinner />
    </div>
  );
}
interface TodayRateProps {
  message: string;
}
function NoTodayRate(props: TodayRateProps) {
  return (
    <>
      <div className="box-header p-2 m-3">{props.message}</div>
      <div className="box-body"></div>
    </>
  );
}

function Render() {
  const [beneficiaries, setBeneficiaries] = useState<Array<IOption>>([]);
  const [todayRate, setTodayRate] = useState<TodayRateInterface>();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [user, setUser] = useState<LoggedInUser>();

  const [loading, setLoading] = useState<boolean>(true);

  const handleOnSubmit = async (
    values: TransactionPayload,
    formikHelpers: FormikHelpers<TransactionPayload>
  ) => {
    values.files = uploadedFiles;
    formikHelpers.setSubmitting(true);
    await dispatchEvent("SEND_MONEY", values, {}, formikHelpers.setErrors);
    formikHelpers.setSubmitting(false);
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([
      dispatchEvent("USER_DETAIL", {}),
      dispatchEvent("TODAY_RATE_V2", {}),
      dispatchEvent("MASTER_DATA", {}, { type: "identity-issuers" }),
    ]).then((response) => {
      console.log(response[0].data.user);
      setUser(response[0].data.user);
      setTodayRate(response[1].data);
      let data: IOption[] = response[2].data?.map((item: any) => {
        return {
          id: item.id,
          value: item.name + " [ " + item.relationship + " ]",
        };
      });
      setBeneficiaries(data);
      setLoading(false);
    });
  }, []);

  let message = todayRate?.errorMessage;
  if (loading) return <SendMoneySpinner />;
  if (user && user.isKycVerified !== "VERIFIED")
    return <UploadYourKyc user={user} />;
  if (message) return <NoTodayRate message={message} />;
  return (
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
                      invalid={errors.charge && touched.charge ? true : false}
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
  );
}
