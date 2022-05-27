import * as Yup from "yup";
enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHERS = "others",
}

export interface KycServerResponse extends KYCPayload {
  kycStatus: string;
}

export interface KYCPayload {
  id_number: string;
  expiry_date: string;
  identity_type_id: number;
  issuer_id: number;
  file: string;
}

export const KycInitialValues: KYCPayload = {
  id_number: "",
  expiry_date: "",
  identity_type_id: 0,
  issuer_id: 0,
  file: "",
};
export const KYCFormSchema = Yup.object().shape({
  id_number: Yup.string().required("Enter your identity number."),
  expiry_date: Yup.string().required("Enter your identity expiry date."),
  identity_type_id: Yup.string().required("Select your identity type."),
  issuer_id: Yup.string().required("Select your identity type."),
  file: Yup.string().required("Your identity is required."),
});

export interface ProfilePayload {
  sex: Gender;
  name: string;
  email: string;
  phone: string;
  date_of_birth: string;
}

export const ProfileInitialValues: ProfilePayload = {
  sex: Gender.MALE,
  name: "",
  email: "",
  phone: "",
  date_of_birth: "",
};

export const ProfileSchema = Yup.object().shape({
  date_of_birth: Yup.string().required("Date of birth required field."),
  email: Yup.string().required("Date of birth required field."),
  sex: Yup.string().required("Gender is required field."),
  name: Yup.string().required("Enter your identity number."),
  phone: Yup.string().required("Enter your identity expiry date."),
});
