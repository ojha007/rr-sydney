export enum FormMethod {
  POST = "POST",
  GET = "GET",
  DELETE = "DELETE",
  PUT = "PUT",
}
export interface ApiInformationType {
  url: string;
  method: FormMethod;
  auth?: boolean;
  requestType?: string;
  params?: any;
}

export const BackendRoute = {
  //============START AUTH ROUTES==================
  LOGIN: {
    url: "/login",
    method: FormMethod.POST,
    auth: false,
  },
  REGISTER: {
    url: "/register",
    method: FormMethod.POST,
    auth: false,
  },
  FORGET_PASSWORD: {
    url: "/forget-password",
    method: FormMethod.POST,
    auth: false,
  },
  CHANGE_PASSWORD: {
    url: "/change-password",
    method: FormMethod.POST,
    auth: true,
  },
  //==========START Forget password=======
  F_P_CHANGE: {
    url: "/change-forget-password",
    method: FormMethod.POST,
    auth: true,
  },
  F_P_OTP_VERIFY: {
    url: "forget-password/otp/verify",
    method: FormMethod.POST,
    auth: true,
  },
  F_P_RESEND_OTP: {
    url: "forget-password/resend/email/otp",
    method: FormMethod.POST,
    auth: true,
  },
  //==================END=========
  USER_DETAIL: {
    url: "/user/detail?hideToken=true",
    method: FormMethod.GET,
    auth: true,
  },

  UPDATE_PROFILE: {
    url: "/update-profile",
    method: FormMethod.POST,
    auth: true,
    requestType: "formData",
  },
  EMAIL_OTP_VERIFY: {
    url: "/email/otp/verify",
    method: FormMethod.POST,
    auth: true,
  },
  RESEND_EMAIL_OTP: {
    url: "/email/otp/resend",
    method: FormMethod.GET,
    auth: true,
  },
  //==============END AUTH ROUTES===========
  BENEFICIARY_LIST: {
    url: "/beneficiary",
    method: FormMethod.GET,
    auth: true,
  },
  BENEFICIARY_CREATE: {
    url: "/beneficiary",
    method: FormMethod.POST,
    auth: true,
  },
  BENEFICIARY_DELETE: {
    url: "/beneficiary/{id}",
    method: FormMethod.DELETE,
    auth: true,
  },
  BENEFICIARY_VIEW: {
    url: "/beneficiary/{id}",
    method: FormMethod.GET,
    auth: true,
  },
  BENEFICIARY_UPDATE: {
    url: "beneficiary/{id}",
    method: FormMethod.PUT,
    auth: true,
  },
  BENEFICIARY_BY_USER: {
    url: "user/beneficiaries/{userId}",
    method: FormMethod.GET,
    auth: true,
  },

  //=========BENEFICIARY ROUTE END===========
  MASTER_DATA: {
    url: "/get/{type}/master",
    method: FormMethod.GET,
    auth: true,
  },
  STATE_LIST: {
    url: "/country/{countryId}/states",
    method: FormMethod.GET,
    auth: true,
  },
  SUBURB_LIST: {
    url: "state/{stateId}/suburbs",
    method: FormMethod.GET,
    auth: true,
  },
  TRANSACTION_HISTORY: {
    url: "transaction/history",
    method: FormMethod.GET,
    auth: true,
  },
  SEND_MONEY: {
    url: "/send-money",
    method: FormMethod.POST,
    auth: true,
    requestType: "formData",
  },
  USER_KYC: {
    url: "/user/kyc",
    method: FormMethod.GET,
    auth: true,
  },
  KYC_POST: {
    url: "/user/kyc",
    method: FormMethod.POST,
    auth: true,
    requestType: "formData",
  },
  TODAY_RATE_V2: {
    url: "todayRate",
    method: FormMethod.GET,
    auth: true,
  },

  USER_ADDRESS_GET: {
    url: "user-address",
    method: FormMethod.GET,
    auth: true,
  },
  USER_ADDRESS_POST: {
    url: "user-address",
    method: FormMethod.POST,
    auth: true,
  },
};
