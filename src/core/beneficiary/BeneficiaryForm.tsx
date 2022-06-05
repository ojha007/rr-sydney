import { Formik, FormikHelpers, Form } from "formik";
import { useEffect, useState } from "react";
import {
  Col,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalProps,
  Row,
} from "reactstrap";
import { dispatchEvent } from "../../actions";
import { IOption } from "../../interfaces/common";
import {
  BeneficiaryPayload,
  BeneficiarySchema,
} from "../../schema/beneficiary.schema";
import Button from "../../components/LoadingButton";

interface BeneficiaryFormInterface extends ModalProps {
  handleClose: any;
  title?: string;
  saveText?: string;
  beneficiary: BeneficiaryPayload;
  fetchAllBeneficiaries: Function;
}
const BeneficiaryForm = (props: BeneficiaryFormInterface) => {
  const [relations, setRelations] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [banks, setBanks] = useState([]);

  const handleOnSubmit = async (
    values: BeneficiaryPayload,
    { setErrors, setSubmitting, resetForm }: FormikHelpers<BeneficiaryPayload>
  ) => {
    setSubmitting(true);
    let response;
    //UPDATE
    if (values.id) {
      let id = values.id;
      response = await dispatchEvent(
        "BENEFICIARY_UPDATE",
        values,
        { id },
        setErrors
      );
    } else {
      response = await dispatchEvent(
        "BENEFICIARY_CREATE",
        values,
        {},
        setErrors
      );
    }
    setSubmitting(false);
    if (response.success) {
      props.handleClose();
      resetForm();
      props.fetchAllBeneficiaries();
    }
  };

  useEffect(() => {
    Promise.all([
      dispatchEvent("MASTER_DATA", null, { type: "relationships" }),
      dispatchEvent("MASTER_DATA", null, { type: "districts" }),
      dispatchEvent("MASTER_DATA", null, { type: "banks" }),
    ]).then((response) => {
      setRelations(response[0].data);
      setDistricts(response[1].data);
      setBanks(response[2].data);
    });
  }, []);

  return (
    <Formik
      enableReinitialize
      onSubmit={(values, formikHelpers) =>
        handleOnSubmit(values, formikHelpers)
      }
      initialValues={props.beneficiary}
      validationSchema={BeneficiarySchema}
    >
      {({
        errors,
        touched,
        handleBlur,
        handleChange,
        isSubmitting,
        values,
        resetForm,
      }) => (
        <Modal size="lg" isOpen={props.isOpen} onClosed={resetForm}>
          <Form autoComplete="off">
            <ModalHeader toggle={props.handleClose}>
              {props.title || "Create Beneficiary"}
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="name">Receiver name</Label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter Receiver name"
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
                    <Label for="name">Receiver Phone</Label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Enter Receiver Phone"
                      errors={errors}
                      value={values.phone}
                      touched={touched}
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
              <FormGroup>
                <Label for="name">Address</Label>
                <Input
                  type="text"
                  name="street"
                  placeholder="Enter Receiver Address"
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
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="relation">Select District</Label>
                    <Input
                      id="district_id"
                      name="district_id"
                      type="select"
                      placeholder="Select District"
                      errors={errors}
                      value={values.district_id}
                      touched={touched}
                      onChange={handleChange}
                      invalid={
                        errors.district_id && touched.district_id ? true : false
                      }
                      onBlur={handleBlur}
                    >
                      <option>----SELECT DISTRICT----</option>
                      {districts.map((option: IOption) => (
                        <option key={option.id} value={option.id}>
                          {option.value}
                        </option>
                      ))}
                    </Input>
                    {errors.district_id && touched.district_id ? (
                      <FormFeedback>{errors.district_id}</FormFeedback>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="relationship_id">Select Relation</Label>
                    <Input
                      id="relationship_id"
                      name="relationship_id"
                      type="select"
                      placeholder="Select Relation"
                      errors={errors}
                      touched={touched}
                      value={values.relationship_id}
                      onChange={handleChange}
                      invalid={
                        errors.relationship_id && touched.relationship_id
                          ? true
                          : false
                      }
                      onBlur={handleBlur}
                    >
                      <option>----SELECT RELATIONSHIP----</option>
                      {relations.map((option: IOption) => (
                        <option key={option.id} value={option.id}>
                          {option.value}
                        </option>
                      ))}
                    </Input>
                    {errors.relationship_id && touched.relationship_id ? (
                      <FormFeedback>{errors.relationship_id}</FormFeedback>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="relation">Select Bank</Label>
                    <Input
                      id="bank_id"
                      name="bank_id"
                      value={values.bank_id}
                      type="select"
                      placeholder="Select Bank"
                      errors={errors}
                      touched={touched}
                      onChange={handleChange}
                      invalid={errors.bank_id && touched.bank_id ? true : false}
                      onBlur={handleBlur}
                    >
                      <option>----SELECT BANK----</option>
                      {banks.map((option: IOption) => (
                        <option value={option.id} key={option.id}>
                          {option.value}
                        </option>
                      ))}
                    </Input>
                    {errors.bank_id && touched.bank_id ? (
                      <FormFeedback>{errors.bank_id}</FormFeedback>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="relation">Enter Bank Branch</Label>
                    <Input
                      id="branch"
                      name="branch"
                      type="text"
                      value={values.branch}
                      placeholder="Enter Bank Branch"
                      errors={errors}
                      touched={touched}
                      onChange={handleChange}
                      invalid={errors.branch && touched.branch ? true : false}
                      onBlur={handleBlur}
                    />
                    {errors.branch && touched.branch ? (
                      <FormFeedback>{errors.branch}</FormFeedback>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="account_name">Account Name</Label>
                    <Input
                      id="account_name"
                      name="account_name"
                      type="text"
                      placeholder="Enter A/C Name"
                      errors={errors}
                      touched={touched}
                      value={values.account_name}
                      onChange={handleChange}
                      invalid={
                        errors.account_name && touched.account_name
                          ? true
                          : false
                      }
                      onBlur={handleBlur}
                    />
                    {errors.account_name && touched.account_name ? (
                      <FormFeedback>{errors.account_name}</FormFeedback>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="account_number">A/C No.</Label>
                    <Input
                      id="account_number"
                      name="account_number"
                      type="text"
                      placeholder="Enter A/C No."
                      errors={errors}
                      value={values.account_number}
                      touched={touched}
                      onChange={handleChange}
                      invalid={
                        errors.account_number && touched.account_number
                          ? true
                          : false
                      }
                      onBlur={handleBlur}
                    />
                    {errors.account_number && touched.account_number ? (
                      <FormFeedback>{errors.account_number}</FormFeedback>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter className="justify-content-between">
              <Button
                text="Cancel"
                loading={0}
                type="button"
                className="btn-default pull-left btn-sm"
                onClick={props.handleClose}
              />
              <Button
                text={props.saveText || "Create"}
                loading={+isSubmitting}
                type="submit"
                className="btn-primary pull-right btn-sm"
              />
            </ModalFooter>
          </Form>
        </Modal>
      )}
    </Formik>
  );
};

export default BeneficiaryForm;
