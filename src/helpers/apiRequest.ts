import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import TokenService from "../services/TokenService";
import { ApiInformationType } from "../routes/backend.route";

export interface ErrorResponse {
  data: any;
  errors: any;
  message: string;
  status: number;
  success: false;
}
export interface SuccessResponse {
  data: any;
  message: string;
  status: number;
  success: true;
}

// Auth and URL configs
let url: string = process.env.REACT_APP_BACKEND_ENDPOINT!;

console.log(process.env);

function getToken() {
  let access_token = "";
  const storedToken: string = TokenService.getAccessToken();
  if (storedToken) access_token = storedToken;
  return access_token;
}

export const makeApiRequest = async (
  apiDetails: ApiInformationType,
  requestData: any,
  requestConfig?: Object
): Promise<ErrorResponse | SuccessResponse> => {
  let access_token = getToken();
  let headers = getRequestHeaders(access_token);
  let transformedRequestData = transformRequestData(apiDetails, requestData);
  let axiosReqParams: AxiosRequestConfig = {
    url: apiDetails.url,
    method: apiDetails.method,
    baseURL: url,
    headers: headers,
    ...transformedRequestData,
    timeout: 60 * 3 * 1000,
  };
  if (requestConfig) {
    axiosReqParams = { ...axiosReqParams, ...requestConfig };
  }
  axios.interceptors.response.use((response: any) => response);
  try {
    let response: AxiosResponse = await axios.request(axiosReqParams);
    return handleSuccessResponse(response);
  } catch (error: any) {
    return handleErrorResponse(error);
  }
};

const getRequestHeaders = (access_token: string) => {
  return {
    "Content-Type": "application/json",
    "accept-content": "application/json",
    Authorization: "Bearer " + access_token,
  };
};

const transformRequestData = (
  apiDetails: ApiInformationType,
  requestData: any
) => {
  let transformedRequestData: any = {};

  let formData = new FormData();
  for (let data in requestData) {
    formData.append(data, requestData[data]);
  }
  if (apiDetails.requestType === "formData") return formData;
  transformedRequestData.data = requestData;
  return transformedRequestData;
};

let handleErrorResponse = (
  error: AxiosError<ErrorResponse, any>
): ErrorResponse => {
  let errorResponse: ErrorResponse = {
    message: "Error",
    data: null,
    errors: [],
    status: 500,
    success: false,
  };
  if (error.response) {
    errorResponse.errors = error.response.data.errors;
    errorResponse.status = error.response.status;
    errorResponse.data = error.response.data.data;
    if (typeof error.response.data) {
      errorResponse.message = error.response.data.message;
    }
  } else if (error.request) {
    errorResponse.message = "Server could not be reached.";
  }
  return errorResponse;
};

let handleSuccessResponse = (response: AxiosResponse): SuccessResponse => {
  let successResponse: SuccessResponse = {
    message: "Success",
    data: null,
    status: 200,
    success: true,
  };
  successResponse.data = response.data.data;
  successResponse.message = response.data.message;
  return successResponse;
};
