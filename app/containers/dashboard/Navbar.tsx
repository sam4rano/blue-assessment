"use client";

import Image from "next/image";
import React from "react";
import {
  RiMenuLine,
  RiMessage2Fill,
  RiNotification3Fill,
} from "react-icons/ri";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b-[1px] border-[#E5E5E5]">
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200">
          <RiMenuLine className="w-6 h-6 text-gray-700" />
        </button>

        <div className="flex flex-row gap-2 divide-x-2 justify-center align-middle items-center">
          <div>
            <Image
              src={"/svg/CashDark.svg"}
              width={95}
              height={95}
              alt="logo image"
              priority
            />
          </div>
          <div className="flex flex-col pl-2">
            <p className="text-sm text-gray-500">Branch</p>
            <p className="font-medium text-gray-700">Adeyemo Alakija</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200">
          <RiMessage2Fill className="w-5 h-5 text-brand_primary" />
          <span className="absolute top-0 right-0 w-4 h-4 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">
            2
          </span>
        </div>

        <div className="relative flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200">
          <RiNotification3Fill className="w-5 h-5 text-brand_primary" />
          <span className="absolute top-0 right-0 w-4 h-4 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">
            2
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
            <span className="text-lg font-bold text-gray-700">OE</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Olamide Eniola</p>
            <p className="text-xs text-gray-500">Cash Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
