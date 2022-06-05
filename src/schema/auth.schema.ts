import * as Yup from "yup";
export interface LoginPayload {
  email: string;
  password: string;
}
export interface RegisterPayload {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
  created_by: string | undefined;
}

export const LoginInitialValues: LoginPayload = {
  email: "",
  password: "",
};
export const RegisterInitialValues: RegisterPayload = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  phone: "",
  created_by: "",
};
export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.number().required("Phone  is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export interface ForgetPasswordIn {
  email: string;
}

export const ForgetPasswordInitialValues: ForgetPasswordIn = {
  email: "",
};
export const ForgetPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
});

export interface ForgetPasswordOtpPayload {
  otp: string;
  email: string;
}
