import * as Yup from "yup";
export interface TransactionPayload {
  beneficiary_id: string;
  sending_amount: string;
  rate: string;
  charge: number;
  receiving_amount: string;
  files: Array<File>;
}

export const initialValues: TransactionPayload = {
  beneficiary_id: "",
  sending_amount: "",
  rate: "",
  charge: 10,
  receiving_amount: "",
  files: [],
};
export const TransactionSchema = Yup.object().shape({
  beneficiary_id: Yup.string().required("Beneficiary is required field."),
  sending_amount: Yup.number().required("Sending amount is required field."),
  receiving_amount: Yup.number().required(
    "Receiving amount is required field."
  ),
  rate: Yup.number().required("Today Rate is not updated."),
  charge: Yup.number().required("Charge is required field."),
  files: Yup.number().optional(),
});
