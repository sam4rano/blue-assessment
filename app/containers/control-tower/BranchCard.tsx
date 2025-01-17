/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useBranchDetailsQuery } from "@/app/hooks/queries/useQuery";
import React, { FC } from "react";
import { BsBank2 } from "react-icons/bs"; // Bank icon for the card


interface BranchCardProps {
	branchId: string;
  }

const BranchCard: FC<BranchCardProps> = ({branchId }) => {
  
	const { data, isLoading, isError, error } = useBranchDetailsQuery(branchId);

	if (isLoading) {
	  return <div>Loading...</div>;
	}
  
	if (isError) {
	  return (
		<div className="text-red-500">
		  Failed to load branch data: {error instanceof Error ? error.message : "Unknown error"}
		</div>
	  );
	}
  
	if (!data) {
	  return <div>No branch data available.</div>;
	}

	console.log("data",data)
	console.log("data message",data.message)
	console.log("data response",data.response[0].address)
  


  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden font-roboto">
      {/* Top Section */}
      <div className="bg-blue-100 p-4 flex items-center space-x-4">
        <BsBank2 className="text-blue-500 w-24 h-20" />
        <div>
          <p className="text-sm text-color-grey-light">Tier {}</p>
          <h2 className="text-2xl font-medium text-brand_dark ">{data.response[0].name}</h2>
        </div>
      </div>
	  
      <div className="p-4 grid grid-cols-2 gap-y-2 text-sm text-gray-700">
        <div>
          <p className=" text-color-grey-light">Address</p>
          <p className="text-body_text_dark text-xs">{data.response[0].address}</p>
        </div>
        <div>
          <p className=" text-sm text-color-grey-light">Region</p>
          <p className="text-body_text_dark text-xs">{data.response[0].region.name}</p>
        </div>
        <div>
          <p className="text-sm text-color-grey-light">Branch Code</p>
          <p className="text-body_text_dark text-base">{data.response[0].code}</p>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;
