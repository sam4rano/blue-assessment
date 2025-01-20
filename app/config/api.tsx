const BASE_PROXY =
  process.env.NODE_ENV === "production"
    ? "/api/proxy"
    : process.env.NEXT_PUBLIC_API_BASE_URL;

export const API_ENDPOINTS = {
  BASE_URL: BASE_PROXY,
  USER: {
    BASE: `${BASE_PROXY}/user-manager/user`,
    LOGIN: "/login",
    CHECK_OTP: "/checkOTP",
  },
  CONFIG: {
    BRANCH: `${BASE_PROXY}/configuration/branch`,
    CURRENCY: `${BASE_PROXY}/configuration/currency/get_currency_by_number`,
  },
  ORDER_DELIVERY: {
    CASH_REQUEST: `${BASE_PROXY}/order-and-delivery/cash-request`,
    CASH_EVACUATION: `${BASE_PROXY}/order-and-delivery/cash-evacuation`,
  },
};
