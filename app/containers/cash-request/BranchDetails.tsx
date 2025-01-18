'use client'
import React, { useEffect } from "react";
import { useBranchQuery } from "@/app/hooks/useBranchQuery";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";

const BranchDetails: React.FC<{ branchId: number }> = ({ branchId }) => {
  const { data, isLoading, isError, error } = useBranchQuery(branchId);

  console.log("data list", data)

  useEffect(() => {
    if (data) {
      toast.success(data.message || 'Successfully loaded branch details');
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <AiOutlineLoading3Quarters className="animate-spin text-blue-500 text-4xl" />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px] text-red-500">
        <RiErrorWarningFill className="text-4xl mb-2" />
        <p className="text-lg">Failed to load branch details.</p>
        {error.message && <p className="text-sm text-gray-500">{error.message}</p>}
      </div>
    );
  }


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Branch Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="font-semibold text-gray-600">Branch ID</h2>
          <p className="text-gray-800">{data?.response.id}</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-600">Capital name</h2>
          <p className="text-gray-800">{data?.response.state.capital}</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-600">Location</h2>
          <p className="text-gray-800">{data?.response.location}</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-600">Manager</h2>
          <p className="text-gray-800">{data?.response.manager}</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-600">Phone Number</h2>
          <p className="text-gray-800">{data?.response.phoneNumber}</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-600">state name</h2>
          <p className="text-gray-800">{data?.response.state.name}</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-600">Created At</h2>
          <p className="text-gray-800">{new Date(data?.response.createdAt).toLocaleDateString()}</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-600">Updated At</h2>
          <p className="text-gray-800">{new Date(data?.response.updatedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default BranchDetails;
