"use client";

import React, { FC } from "react";
import { HiOutlineFilter } from "react-icons/hi";

interface titleProps {
	title:string
	handleRoute: () => void
  }

const ContentHeader:FC<titleProps > = ({title, handleRoute}) => {
  return (
    <div className="flex flex-row justify-between items-center w-full h-[100px] px-4">
      {/* Title */}
      <h1 className="text-4xl font-bold text-brand_dark font-roboto">{title}</h1>

      {/* Actions */}
      <div className="flex gap-4">
        {/* Filter Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-[15px] text-gray-700 hover:bg-gray-100"
        >
          <HiOutlineFilter className="w-5 h-5" />
          Filter
        </button>
        <button
		onClick={handleRoute}
          className="px-4 py-2 bg-brand_primary text-white rounded-[15px] hover:bg-blue-400"
        >
          New Request
        </button>
      </div>
    </div>
  );
};

export default ContentHeader;
