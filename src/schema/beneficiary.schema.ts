import * as Yup from "yup";
export interface BeneficiaryPayload {
  id?: string | undefined;
  name: string;
  phone: string;
  district_id: number;
  relationship_id: number;
  bank_id: number;
  branch: string;
  account_name: string;
  account_number: string;
  street: string;
  country_id: number;
}

export const initialValues: BeneficiaryPayload = {
  name: "",
  account_name: "",
  account_number: "",
  bank_id: 0,
  district_id: 0,
  branch: "",
  phone: "",
  relationship_id: 0,
  country_id: 1,
  street: "",
};
export const BeneficiarySchema = Yup.object().shape({
  name: Yup.string().required("Name is required field"),
  street: Yup.string().required("Address is required field"),
  phone: Yup.string().required("Phone is required field"),
  district_id: Yup.string().required("Select district"),
  relationship_id: Yup.string().required("Select relationship"),
  bank_id: Yup.string().required("Bank is required field"),
  branch: Yup.string().required("Branch is required field"),
  account_name: Yup.string().required("Account Name is required field"),
  account_number: Yup.string().required("AC/No. is required field"),
});
