import { FormikErrors } from "formik";
import { toast } from "react-toastify";

import {
  ErrorResponse,
  makeApiRequest,
  SuccessResponse,
} from "../helpers/apiRequest";
import { BackendRoute, FormMethod } from "../routes/backend.route";
import TokenService from "../services/TokenService";

interface RequestParam {
  [key: string]: any;
}

type ObjectKey = keyof typeof BackendRoute;
export const dispatchEvent = async (
  action: ObjectKey,
  payload?: any,
  params?: RequestParam,
  serverErrors?: (errors: FormikErrors<{ [key: string]: string }>) => void
) => {
  let api = Object.assign({}, BackendRoute[action]);
  if (params && Object.keys(params).length) {
    for (const key in params) {
      // console.log(api.url);
      if (api.url.includes(key)) {
        api.url = api.url.replaceAll(`{${key}}`, params[key]);
      } else {
        api.url = api.url + "?" + `${key}=${params[key]}`;
      }
    }
  }
  let response: SuccessResponse | ErrorResponse = await makeApiRequest(
    api,
    payload
  );
  if (response.success) {
    if (api.method !== FormMethod.GET) {
      toast.success(response.message);
    }
    if (action === "LOGIN") {
      TokenService.setToken(response.data);
    }
  } else {
    if (response.message) {
      toast.error(response.message);
    }
    if (serverErrors) {
      let errors = response.errors || {};
      serverErrors(errors);
    }
  }
  return response;
};
