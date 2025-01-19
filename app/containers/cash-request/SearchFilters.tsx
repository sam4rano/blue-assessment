"use client"
import { useState } from "react";
import { Calendar, Search } from "lucide-react";


type DateRange = {
  startDate: Date | null;
  endDate: Date | null;
};

const SearchFilterBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });
  const [selectedType, setSelectedType] = useState("");

  const handleDateChange = (start: Date, end: Date) => {
    setDateRange({ startDate: start, endDate: end });
  };

  return (
    <div className="flex flex-row justify-between items-center p-4 bg-white shadow rounded-lg">
     
	  <div className="relative flex items-center w-[370px]">
        <Search className="absolute left-3 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search for Amount, Code or Branch name"
		  value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-10 py-2 text-sm text-gray-700 bg-gray-100 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Date Picker */}

	  <div className="flex flex-row gap-4 justify-center align-middle items-center">

      <div className="relative">
        <button
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onClick={() => {
            // Open date picker logic here
          }}
        >
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700">
            {dateRange.startDate && dateRange.endDate
              ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
              : "Select Date Range"}
          </span>
        </button>
       
      </div>


	  
      <div className="relative">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">Type</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
	  </div>
    </div>
  );
};

export default SearchFilterBar;
