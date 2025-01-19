"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiMoreLine } from "react-icons/ri";

const Header: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("1month");

  const filters = [
    { label: "24hrs", value: "24hrs" },
    { label: "1week", value: "1week" },
    { label: "1month", value: "1month" },
    { label: "1year", value: "1year" },
    { label: "All", value: "all" },
  ];

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
  };

  return (
    <div className="flex flex-row items-center justify-between px-4 ">
      <h1 className="font-bold text-[36px] leading-[42.19px] font-roboto">
        Control Tower
      </h1>
      <div className="flex flex-row gap-2">
        <div className="flex flex-row gap-x-[1px] justify-between align-middle border-[2px] rounded-[15px] divide-x-[1px] ">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => handleFilterChange(filter.value)}
              className={`px-4 text-sm font-semibold transition-colors duration-150 ${
                activeFilter === filter.value
                  ? " text-brand_primary"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-gray-500 hover:text-gray-700">
              <RiMoreLine className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
