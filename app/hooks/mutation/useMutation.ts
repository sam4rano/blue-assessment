/* eslint-disable @typescript-eslint/no-explicit-any */
import { createCashRequestOpsHead, loginUser, verifyOtp } from "@/app/config";
import { LoginProps, OtpProps } from "@/app/types/type";
import { useMutation } from "@tanstack/react-query";



// Auth Mutations
export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: LoginProps) => loginUser(data),
  });
};

export const useVerifyOtpMutation = () => {
  return useMutation({
    mutationFn: (data: OtpProps) => verifyOtp(data),
  });
};

// Cash Request Mutations
export const useCreateCashRequestMutation = () => {
  return useMutation({
    mutationFn: (data: any) => createCashRequestOpsHead(data),
  });
};
