"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const Otp: React.FC = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("OTP Submitted:", otp);
   
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
        <h2 className="text-xl font-bold  text-brand_dark">
          Enter the OTP sent to your email
        </h2>

        {/* OTP Field */}
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

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full px-8 py-3 text-white bg-brand_primary rounded-[15px] hover:bg-[#055DB4] focus:outline-none"
          >
            Verify OTP
          </button>
        </div>

        {/* Resend OTP */}
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
