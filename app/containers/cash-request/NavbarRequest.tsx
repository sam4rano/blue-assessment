"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarRequest: React.FC = () => {
  return (
    <div className="flex flex-row justify-between px-10 py-4 bg-white shadow-sm border-b-[1px] border-[#E5E5E5]">
      <div>
        <Image
          src={"/svg/CashDark.svg"}
          width={95}
          height={95}
          alt="logo image"
          priority
        />
      </div>
      <Link href={"/dashboard/cash-request"}>
        <button className="flex flex-row align-middle justify-center items-center  rounded-full gap-2 text-border_grey border-[1px] border-border_grey p-2 w-[98px] h-[44px]">
          <X />
          <p>Exit</p>
        </button>
      </Link>
    </div>
  );
};

export default NavbarRequest;
