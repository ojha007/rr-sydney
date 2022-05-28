import * as Yup from "yup";
export enum Gender {
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
  file: any;
}

export const KycInitialValues: KYCPayload = {
  id_number: "",
  expiry_date: "",
  identity_type_id: 0,
  issuer_id: 0,
  file: undefined,
};
export const KYCFormSchema = Yup.object().shape({
  id_number: Yup.string().required("Enter your identity number."),
  expiry_date: Yup.string().required("Enter your identity expiry date."),
  identity_type_id: Yup.string().required("Select your identity type."),
  issuer_id: Yup.string().required("Select your identity type."),
  file: Yup.string().required("Your identity is required."),
});

export interface ProfilePayload {
  gender: Gender;
  name: string;
  email: string;
  phone: string;
  date_of_birth: Date;
}

export const ProfileInitialValues: ProfilePayload = {
  gender: Gender.MALE,
  name: "",
  email: "",
  phone: "",
  date_of_birth: new Date(),
};

export const ProfileSchema = Yup.object().shape({
  date_of_birth: Yup.string().required("Date of birth required field."),
  email: Yup.string().required("Date of birth required field."),
  gender: Yup.string().required("Gender is required field."),
  name: Yup.string().required("Enter your identity number."),
  phone: Yup.string().required("Enter your identity expiry date."),
});

export interface ChangePasswordPayload {
  confirmPassword: string;
  newPassword: string;
  oldPassword: string;
}

export const ChangePasswordInitialValues: ChangePasswordPayload = {
  confirmPassword: "",
  newPassword: "",
  oldPassword: "",
};

export const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Old Password is required field."),
  newPassword: Yup.string()
    .required("New Password is required field.")
    .min(6, "New Password should be greater than 6 character."),
  confirmPassword: Yup.string()
    .required("Password Confirmation is required field.")
    .oneOf([Yup.ref("newPassword"), null], "Passwords does not match."),
});
