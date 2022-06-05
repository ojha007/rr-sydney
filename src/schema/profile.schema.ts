import { TRUE } from "sass";
import * as Yup from "yup";
import { formatDate } from "../lib/DateFormatter";
export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHERS = "others",
}

export interface KycServerResponse extends KYCPayload {
  kycStatus: string;
  identityType: string;
  issuer: string;
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
  expiry_date: formatDate(new Date()),
  identity_type_id: 0,
  issuer_id: 0,
  file: undefined,
};
export const KYCFormSchema = Yup.object().shape({
  id_number: Yup.string().required("Enter your identity number."),
  expiry_date: Yup.string().required("Enter your identity expiry date."),
  identity_type_id: Yup.string().required("Select your identity type."),
  issuer_id: Yup.string().required("Select your identity type."),
  file: Yup.string().optional(),
});

export interface ProfilePayload {
  gender: Gender;
  name: string;
  email: string;
  phone: string;
  dob: Date | string;
}

export const ProfileInitialValues: ProfilePayload = {
  gender: Gender.MALE,
  name: "",
  email: "",
  phone: "",
  dob: new Date(),
};

export const ProfileSchema = Yup.object().shape({
  dob: Yup.string().required("Date of birth required field."),
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

export interface UserAddressPayload {
  country_id: string;
  state_id: string;
  suburb_id: string;
  postal_code: string;
  street: string;
}

export const UserAddressSchema = Yup.object().shape({
  country_id: Yup.string().required("Country is required field."),
  state_id: Yup.string().required("State is required field."),
  suburb_id: Yup.string().required("Suburb is required field."),
  street: Yup.string().required("Street is required field."),
  postal_code: Yup.string().required("Postal code is required field."),
});

export const UserAddressInitialValues: UserAddressPayload = {
  country_id: "",
  state_id: "",
  suburb_id: "",
  postal_code: "",
  street: "",
};

export interface F_P_PasswordPayload {
  newPassword: string;
  confirmPassword: string;
  email: string;
  forgetPassword: boolean;
}

export const F_P_PasswordInitialValues: F_P_PasswordPayload = {
  newPassword: "",
  confirmPassword: "",
  email: "",
  forgetPassword: true,
};

export const F_P_PasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("New Password is required field.")
    .min(6, "New Password should be greater than 6 character."),
  confirmPassword: Yup.string()
    .required("Password Confirmation is required field.")
    .oneOf([Yup.ref("newPassword"), null], "Passwords does not match."),
  email: Yup.string().required(),
});
