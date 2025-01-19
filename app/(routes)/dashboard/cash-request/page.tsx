"use client"
import ContainerCashRequest from "@/app/containers/cash-request/ContainerCashRequest";
import Navbar from "@/app/containers/control-tower/Navbar";
import Sidebar from "@/app/containers/control-tower/Sidebar";


import React from "react";

const page = () => {
 
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-row h-min-screen bg-color_off_white">
        <div className="w-[270px] pr-5">
          <Sidebar />
        </div>
        <ContainerCashRequest />
      </div>
    </>
  );
};

export default page;
