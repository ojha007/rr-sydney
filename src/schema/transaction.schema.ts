import * as Yup from "yup";
import { FileInterface } from "../components/FileUploader";

export interface RateInterface {
  rate: number;
  min_range: number;
  type: string;
}
export interface TodayRateInterface {
  charge: number;
  rate: RateInterface[];
  errorMessage: string | null;
}
export interface TransactionPayload {
  beneficiary_id: string;
  sending_amount: string;
  rate: string;
  charge: number;
  receiving_amount: string;
  files: FileInterface[];
  payment_type_id: number;
  beneficiary_bank_id: string;
  agent_id: string | undefined;
  totalPayable?: number;
}

export const initialValues: TransactionPayload = {
  beneficiary_id: "",
  sending_amount: "",
  rate: "",
  charge: 10,
  receiving_amount: "",
  files: [],
  payment_type_id: 2,
  beneficiary_bank_id: "",
  agent_id: "",
  totalPayable: 0,
};
export const TransactionSchema = Yup.object().shape({
  beneficiary_id: Yup.string().required("Beneficiary is required field."),
  sending_amount: Yup.number().required("Sending amount is required field."),
  receiving_amount: Yup.number().required(
    "Receiving amount is required field."
  ),
  rate: Yup.number().required("Today Rate is not updated."),
  charge: Yup.number().required("Charge is required field."),
  beneficiary_bank_id: Yup.number().required(
    "Beneficiary bank is required field."
  ),
  payment_type_id: Yup.number().required(),
  files: Yup.mixed().required("File is Required"),
});
