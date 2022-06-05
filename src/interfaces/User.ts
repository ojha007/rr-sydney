import { Gender } from "../schema/profile.schema";

export interface LoggedInUser {
  avatar: string;
  dateOfBirth: string;
  email: string;
  gender: Gender;
  id: number;
  isEmailVerified: boolean;
  isKycVerified: string;
  name: string;
  phone: string;
  status: number;
  super: number;
  kycMessage: string;
  address: boolean;
}
