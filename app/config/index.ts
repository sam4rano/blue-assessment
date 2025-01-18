/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { API_ENDPOINTS } from "./api";
import { LoginProps, OtpProps } from "../types/type";



// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: API_ENDPOINTS.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (loginData: LoginProps) => {
  const response = await apiClient.post(
    `${API_ENDPOINTS.USER.BASE}${API_ENDPOINTS.USER.LOGIN}`,
    loginData
  );
  return response.data;
};

export const verifyOtp = async ({ otp }: OtpProps) => {
	const response = await apiClient.post(
	  `${API_ENDPOINTS.USER.BASE}${API_ENDPOINTS.USER.CHECK_OTP}`, 
	  { otp }
	);
	return response.data;
  };
  

export const fetchBranchById = async (id: number) => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.CONFIG.BRANCH}/get_branch/${id}`
  );
  return response.data;
};

export const fetchBranchDetails = async (id: number) => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.CONFIG.BRANCH}/get_branch_details/${id}`
  );
  return response.data;
};

export const fetchCashRequests = async (filters: Record<string, any> = {}) => {
  const queryString = new URLSearchParams(filters).toString();
  const response = await apiClient.get(
    `${API_ENDPOINTS.ORDER_DELIVERY.CASH_REQUEST}/filter?${queryString}`
  );
  return response.data;
};

export const fetchCashRequestById = async (id: number) => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.ORDER_DELIVERY.CASH_REQUEST}/get_by_id/${id}`
  );
  return response.data;
};

export const createCashRequestOpsHead = async (data: any) => {
  const response = await apiClient.post(
    `${API_ENDPOINTS.ORDER_DELIVERY.CASH_REQUEST}/create/opshead`,
    data
  );
  return response.data;
};

export const fetchCurrencyById = async (id: number) => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.CONFIG.CURRENCY}/get_currency_by_number/${id}`
  );
  return response.data;
};

export const fetchCashEvacuations = async (params: {
  offset?: number;
  limit?: number;
  branch_code?: string;
}) => {
  const queryParams = new URLSearchParams({
    offset: params.offset?.toString() || "0",
    limit: params.limit?.toString() || "1000",
    ...(params.branch_code && { branch_code: params.branch_code }),
  });

  const response = await apiClient.get(
    `${
      API_ENDPOINTS.ORDER_DELIVERY.CASH_EVACUATION
    }/get_all?${queryParams.toString()}`
  );
  return response.data;
};

export const fetchCashEvacuationById = async (id: number) => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.ORDER_DELIVERY.CASH_EVACUATION}/get_by_id/${id}`
  );
  return response.data;
};
