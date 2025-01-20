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
	console.log("data",data.response[0])


  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden">
      {/* Top Section */}
      <div className="bg-blue-100 p-4 flex items-center space-x-4">
        <BsBank2 className="text-blue-500 w-10 h-10" />
        <div>
          <p className="text-sm text-gray-500">Tier {}</p>
          {/* <h2 className="text-lg font-bold text-blue-900">name {data.response}</h2> */}
        </div>
      </div>
	  {data?.response.map((data:any) => (
		<div key={data.id}>
			<li>{data.message}</li>

		</div>
	  ))}

      {/* Bottom Section */}
      {/* <div className="p-4 grid grid-cols-2 gap-y-2 text-sm text-gray-700">
        <div>
          <p className="font-medium">Address</p>
          <p>{}</p>
        </div>
        <div>
          <p className="font-medium">Region</p>
          <p>{}</p>
        </div>
        <div>
          <p className="font-medium">Branch Code</p>
          <p>{}</p>
        </div>
      </div> */}
    </div>
  );
};

export default BranchCard;
