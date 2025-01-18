export const API_ENDPOINTS = {
	BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
	USER: {
	  BASE: `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_USER_MANAGER_PATH}`,
	  LOGIN: '/login',
	  CHECK_OTP: '/checkOTP',
	},
	CONFIG: {
	  BRANCH: `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_CONFIG_PATH}/branch`,
	  CURRENCY: `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_CONFIG_PATH}/currency/get_currency_by_number`,
	},
	ORDER_DELIVERY: {
	  CASH_REQUEST: `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_ORDER_DELIVERY_PATH}/cash-request`,
	  CASH_EVACUATION: `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_ORDER_DELIVERY_PATH}/cash-evacuation`,
	},
  };