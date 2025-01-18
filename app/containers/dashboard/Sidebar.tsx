"use client";

import React from "react";
import { navData } from "./sidebarData";


import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { useSidebar } from "@/app/hooks/useSideBar";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const { openDropdown, toggleDropdown, isActive } = useSidebar(navData);
  const router = useRouter()

  const handleNavigate = (path: string) => {
    if (path) {
      router.push(path);
    }
  };

  return (
    <div
      className="flex flex-col bg-grey-100 
         max-w-[240px] w-full align-middle items-center min-h-screen"
    >
      <div>
        {navData.map((data) => (
          <ul
            key={data.id}
            className="flex flex-col gap-y-2 justify-center align-middle w-full"
          >
            {/* Parent Item */}
            <div
              className={`w-full flex flex-row gap-2 text-[16px] leading-[18.5px] text-grey_100 py-4 hover:bg-white hover:text-grey_100 rounded-br-full rounded-tr-full p-2 cursor-pointer ${
                isActive(data.path) ? "bg-blue-500 text-white" : "text-gray-700"
              }`}
              onClick={() =>
                data.items?.length ? toggleDropdown(data.id) : handleNavigate(data.path)
              }
            >
              <p>{data.icon}</p>
              <p>{data.name}</p>
              {data.items?.length ? (
                openDropdown === data.id ? (
                  <RiArrowDownSFill className="ml-auto" />
                ) : (
                  
				  <RiArrowUpSFill className="ml-auto" />
                )
              ) : null}
            </div>

            {/* Dropdown Items */}
            {data.items && openDropdown === data.id && (
              <ul className="pl-6 space-y-2">
                {data.items.map((subItem) => (
                  <li
                    key={subItem.id}
                    className={`p-2 rounded-lg cursor-pointer ${
                      isActive(subItem.path)
                        ? "bg-blue-500 text-white"
                        : "text-gray-600 hover:bg-blue-100"
                    }`}
                    onClick={() => handleNavigate(subItem.path)}
                  >
                    {subItem.name}
                  </li>
                ))}
              </ul>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
