"use client";

import React, { useState } from "react";

import { ChevronDown, Calendar as CalendarIcon, Search } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const RequestFilter = () => {
	const [request, setRequest] = useState("All");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [searchTerm, setSearchTerm] = useState("");
  
	const handleRequestChange = (value: string) => {
		setRequest(value);
		setIsDropdownOpen(false); // Close dropdown after selection
	  };
	const handleDateChange = (date: Date | undefined) => setSelectedDate(date || null);
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
	  setSearchTerm(e.target.value);

  return (
    <div className="w-full flex flex-row justify-between items-center gap-4">
      {/* Request Dropdown */}
	  <div className="flex flex-row gap-4">

      <div className="relative">
        <button
          className="flex items-center justify-between w-36 px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 hover:bg-gray-200 border-[1px] border-border_grey"
        >
          {request}
          <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
        </button>
        {isDropdownOpen && ( // Conditionally render dropdown
          <ul className="absolute mt-1 bg-white border rounded-md shadow-lg w-36 text-sm text-gray-700 z-10">
            {["All", "Pending", "Approved", "Rejected"].map((option) => (
              <li
                key={option}
                onClick={() => handleRequestChange(option)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Date Picker */}
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex items-center justify-between w-36 px-4 py-2 bg-gray-100 rounded-md  border-[1px] border-border_grey text-sm text-gray-700 hover:bg-gray-200">
            {selectedDate ? selectedDate.toDateString() : "All time"}
            <CalendarIcon className="w-4 h-4 ml-2 text-gray-500" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-2">
          <Calendar
            mode="single"
			selected={selectedDate || undefined}
            onSelect={(date) => handleDateChange(date)}

          />
        </PopoverContent>
      </Popover>
	  </div>

      {/* Search Input */}
      <div className="relative flex items-center w-80">
        <Search className="absolute left-3 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Find Package ID"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-10 py-2 text-sm text-gray-700 bg-gray-100 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default RequestFilter;
