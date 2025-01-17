"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { RiLockPasswordLine, RiUser3Line } from "react-icons/ri";


const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

	router.push('/otp')
    console.log("Form Data:", formData);
    // Perform login logic here
  };

  return (
    <div className="flex flex-col gap-y-4 items-center justify-center w-full">
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
        className="max-w-[470px] w-full flex flex-col gap-y-6 bg-white rounded-[15px] shadow-lg p-10"
      >
        <h2 className="text-[32px] leading-[44.8px] font-bold  text-brand_dark">
          Log In
        </h2>
        {/* Username Field */}
        <div className="">
          <label
            htmlFor="username"
            className="block text-base font-bold text-grey_100"
          >
            Username
          </label>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-2 flex items-center text-gray-500">
              <RiUser3Line className="w-6 h-6" />
            </span>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Your email address or Username"
              className="block w-full pl-10 px-4 h-12 py-2 border-[1px] rounded-[5px] border-border_grey focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="">
          <label
            htmlFor="password"
            className="block text-base font-bold text-grey_100"
          >
            Password
          </label>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-2 flex items-center text-gray-500">
              <RiLockPasswordLine 
			  className="w-5 h-5" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="block w-full pl-10 pr-10 px-4 py-2 h-12 border-[1px] border-border_grey rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500 focus:outline-none"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className="w-5 h-5" />
              ) : (
                <AiOutlineEye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="">
          <button
            type="submit"
            className="w-full px-8 py-3 text-white bg-brand_primary rounded-[15px] hover:bg-[#055DB4] focus:outline-none"
          >
            Log In
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-sm text-center text-gray-600">
          <Link href="/forgot-password" className="">
            Forgot your Password? <span className="pr-1 text-brand_primary underline">Get Help</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
