import Navbar from "@/app/containers/dashboard/Navbar";
import Sidebar from "@/app/containers/dashboard/Sidebar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-row h-min-screen bg-color_off_white py-10">
        <div className="w-[270px] pr-5">
          <Sidebar />
        </div>
        <div className=" w-full pt-2">cash evacuation container</div>
      </div>
    </>
  );
};

export default page;
