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
  RateInterface,
  TodayRateInterface,
  TransactionPayload,
  TransactionSchema,
} from "../../schema/transaction.schema";
import Button from "../../components/LoadingButton";
import { FileInterface, FilesUpload } from "../../components/FileUploader";
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
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [todayRate, setTodayRate] = useState<TodayRateInterface>();
  const [uploadedFiles, setUploadedFiles] = useState<FileInterface[]>([]);
  const [user, setUser] = useState<LoggedInUser>();
  const [totalPayable, setTotalPayable] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(true);

  const handleOnSubmit = async (
    values: TransactionPayload,
    { setSubmitting, setErrors }: FormikHelpers<TransactionPayload>
  ) => {
    if (!uploadedFiles.length)
      return setErrors({
        files: "Please upload the screenshot of your payment.",
      });
    values.files = uploadedFiles?.map((f) => f.file);
    values.agent_id = process.env.REACT_APP_AGENT_ID;
    setSubmitting(true);
    await dispatchEvent("SEND_MONEY", values, {}, setErrors);
    setSubmitting(false);
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([
      dispatchEvent("USER_DETAIL", {}),
      dispatchEvent("TODAY_RATE_V2", {}),
      dispatchEvent("BENEFICIARY_LIST", {}),
    ]).then((response) => {
      setUser(response[0].data.user);
      setTodayRate(response[1].data);
      setBeneficiaries(response[2].data);
      setLoading(false);
    });
  }, []);

  const onBeneficiarySelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => void
  ) => {
    setFieldValue("beneficiary_id", e.target.value);
    let beneficiary: any = beneficiaries.find(
      (b: any) => Number(e.target.value) === Number(b.id)
    );
    setFieldValue("beneficiary_bank_id", beneficiary?.beneficiary_bank_id);
  };
  const onChangeSendingAmount = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => void
  ) => {
    let sending_amount = e.target.value;
    setFieldValue("sending_amount", sending_amount);
    setTotalPayable(+sending_amount + 10);
    let rates = todayRate?.rate ?? [];
    let rate: RateInterface | undefined = rates.find(
      (rate) => Number(sending_amount) >= rate["min_range"]
    );
    if (rate && rate.rate) {
      let receiving_amount = Number(sending_amount) * rate.rate;
      setFieldValue("receiving_amount", receiving_amount);
      setFieldValue("rate", rate.rate);
    } else {
      setFieldValue("receiving_amount", 0);
      setFieldValue("rate", 0);
    }
  };

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
          setFieldValue,
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
                      onChange={(e) => onBeneficiarySelect(e, setFieldValue)}
                      invalid={
                        errors.beneficiary_id && touched.beneficiary_id
                          ? true
                          : false
                      }
                      onBlur={handleBlur}
                    >
                      <option>----SELECT RECEIVER----</option>
                      {beneficiaries
                        .map((b: any) => {
                          return {
                            id: b.id,
                            value: b.name + " [ " + b.relationship + "]",
                          };
                        })
                        .map((option: IOption) => (
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
                      type="number"
                      name="sending_amount"
                      placeholder="Enter Sending amount"
                      errors={errors}
                      touched={touched}
                      onChange={(e) => onChangeSendingAmount(e, setFieldValue)}
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
                      type="number"
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
                      type="number"
                      readOnly
                      value={values.receiving_amount}
                      name="receiving_amount"
                      placeholder="Receiving Amount"
                      errors={errors}
                      touched={touched}
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
              <Row style={{ backgroundColor: "aliceblue" }} className="p-2">
                <Col>
                  <p>
                    Please transfer the balance on the following account and
                    upload the receipt of payment
                  </p>
                  <p className="text-danger">Strictly No cash deposit.</p>
                  <p>
                    Please write sender name on reference or description while
                    transferring to our account
                  </p>
                  <table className="table table-stripped">
                    <thead>
                      <tr>
                        <th>Account Name</th>
                        <td>Registered Remit Sydney</td>
                      </tr>
                      <tr>
                        <th>BSB</th>
                        <td>484799</td>
                      </tr>
                      <tr>
                        <th>Account No.</th>
                        <td>054847695</td>
                      </tr>
                      <tr
                        style={{
                          backgroundColor: "#3989ba",
                        }}
                      >
                        <th>Total Payable:</th>
                        <td>{totalPayable}</td>
                      </tr>
                    </thead>
                  </table>
                </Col>
              </Row>
              <Row>
                <Label>Upload your Payment screenshot</Label>
                <FilesUpload
                  setUploadedFiles={setUploadedFiles}
                  uploadedFiles={uploadedFiles}
                  error={errors.files}
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
