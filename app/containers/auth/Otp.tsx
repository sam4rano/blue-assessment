/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


import { verifyOtp } from "@/app/config";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Otp: React.FC = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const { mutateAsync, isError, isSuccess, isPending } = useMutation({
    mutationKey: ["otp-submit"],
    mutationFn: verifyOtp,
    onSuccess: (data) => {
      router.push("/dashboard");
      console.log("OTP verified successfully:", data);
    },
    onError: (error: any) => {
      console.error("OTP verification failed:", error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutateAsync({ otp }); 
  };

  return (
    <div className="flex flex-col gap-y-4 items-center justify-center">
      <div className="mb-8">
        <Image
          src={"/svg/CashDark.svg"}
          alt="logo image"
          className=" w-auto h-auto"
          width={120}
          height={70}
          priority
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-[470px] w-full flex flex-col gap-y-4 bg-white rounded-[15px] shadow-lg p-6"
      >
        <h2 className="text-xl font-bold  text-brand_dark">Enter your OTP</h2>
        <div className="mb-4">
          <div className="relative mt-1">
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={handleChange}
              placeholder="Enter your OTP"
              maxLength={6}
              className="block w-full pl-10 pr-10 px-4 py-2 h-12 border-[1px] border-border_grey rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {isError && (
          <p className="text-sm text-red-500">
            Failed to verify OTP. Please try again.
          </p>
        )}

        
        {isSuccess && (
          <p className="text-sm text-green-500">
            OTP verified successfully! Redirecting...
          </p>
        )}

        <div className="mb-4">
          <button
            type="submit"
            disabled={isPending}
            className={`w-full px-8 py-3 text-white bg-brand_primary rounded-[15px] hover:bg-[#055DB4] focus:outline-none ${
              isPending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isPending ? "Verifying..." : "Verify OTP"}
          </button>
        </div>

        
        <div className="text-sm text-center text-gray-600">
          Didn’t receive the code?{" "}
          <Link href="#" className="text-blue-500 hover:underline">
            Resend OTP
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Otp;
