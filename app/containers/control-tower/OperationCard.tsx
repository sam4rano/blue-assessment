import React from "react";
import { RiQuestionLine } from "react-icons/ri";

interface OperationCardProps {
  message: string;
}

const OperationCard: React.FC<OperationCardProps> = ({ message }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-row py-8 items-center justify-center w-full max-w-xs gap-2 ">
      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
        <RiQuestionLine className="text-gray-500 w-6 h-6" />
      </div>
      <p className="text-gray-500 text-sm mt-4 text-center">{message}</p>
    </div>
  );
};

export default OperationCard;
