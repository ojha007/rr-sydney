enum FormMethod {
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
  BENEFICIARY_BY_USER: {
    url: "user/beneficiaries/{userId}",
    method: FormMethod.GET,
    auth: true,
  },
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
    url: "send-money",
    method: FormMethod.POST,
    auth: true,
  },

  // BENEFICIARY: {
  //   CREATE: {
  //     url: "/forget-password",
  //     method: FormMethod.POST,
  //   },
  //   delete: {},
  //   update: {},
  //   view: {
  //     url: "/forget-password",
  //     method: FormMethod.POST,
  //   },
  // },
  // transaction: {
  //   history: {},
  // },
  // sendMoney: {
  //   create: {},
  //   view: {},
  //   export: {},
  //   update: {},
  // },
  // profile: {
  //   create: {},
  //   update: {},
  // },
  // address: {
  //   create: {},
  //   update: {},
  // },
  // kyc: {
  //   create: {},
  //   update: {},
  // },
};
