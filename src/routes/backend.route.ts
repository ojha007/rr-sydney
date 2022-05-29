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
};
