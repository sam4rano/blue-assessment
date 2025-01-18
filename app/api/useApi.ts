/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_BASE_URL = 'http://20.126.3.61:3400/user-manager/user';

export interface LoginProps {
  username: string;
  password: string;
}

export interface OtpProps {
  otp: string;
}

/**
 * Logs in the user
 * @param loginData -
 * @returns 
 */
export const loginUser = async (loginData: LoginProps) => {
  const response = await axios.post(`${API_BASE_URL}/login`, loginData);
  return response.data;
};

/**
 * Verifies the OTP
 * @param otpData 
 * @returns 
 */
// export const verifyOtp = async (otpData: OtpProps) => {
//   const response = await axios.post(`${API_BASE_URL}/checkOTP`, otpData);
//   return response.data;
// };


export const verifyOtp = async ({ otp }: { otp: string }): Promise<any> => {
  const response = await axios.post(`${API_BASE_URL}/checkOTP`, { otp });
  return response.data;
};

