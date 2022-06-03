import { LoggedInUser } from "../interfaces/User";

interface AuthTokenService {
  setToken: Function;
  getAccessToken: Function;
  getRefreshToken: Function;
  clearToken: Function;
  getAuthUser: Function;
  setAuthUser: Function;
}

function setToken(tokenObj: any) {
  localStorage.setItem("tk", JSON.stringify(tokenObj));
  localStorage.setItem("access_token", tokenObj.token);
  localStorage.setItem("refresh_token", tokenObj.refresh_token);
}

function setAuthUser(user: LoggedInUser) {
  localStorage.setItem("tk", JSON.stringify({ user }));
}

function getAuthUser(): LoggedInUser {
  let data = JSON.parse(localStorage.getItem("tk") || "{}");
  return data.user;
}

function getAccessToken(): string {
  let accessToken = "";
  try {
    accessToken = localStorage.getItem("access_token") || "";
  } catch (e) {
    console.log("Local Store token error", e);
  }
  return accessToken;
}

function getRefreshToken(): string {
  let refreshToken = "";
  try {
    refreshToken = localStorage.getItem("refresh_token") || "";
  } catch (e) {
    console.log("Local Store token error", e);
  }
  return refreshToken;
}

function clearToken() {
  localStorage.removeItem("tk");
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
}

const TokenService: AuthTokenService = {
  setToken: setToken,
  getAccessToken: getAccessToken,
  getRefreshToken: getRefreshToken,
  clearToken: clearToken,
  getAuthUser: getAuthUser,
  setAuthUser: setAuthUser,
};
export default TokenService;
