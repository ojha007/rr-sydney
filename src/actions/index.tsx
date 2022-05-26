import { FormikErrors } from "formik";
import {
  ErrorResponse,
  makeApiRequest,
  SuccessResponse,
} from "../helpers/apiRequest";
import { BackendRoute } from "../routes/backend.route";
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
      api.url = api.url.replaceAll(`{${key}}`, params[key]);
    }
  }
  let response: SuccessResponse | ErrorResponse = await makeApiRequest(
    api,
    payload
  );
  if (response.success) {
    if (action === "LOGIN") {
      TokenService.setToken(response.data);
    }
  } else {
    if (serverErrors) {
      console.log(response);
      let errors = response.data.errors || {};
      serverErrors(errors);
      console.log(errors);
    }
  }
  return response;
};
