import React from "react";
import { RiFileSearchLine } from "react-icons/ri";

interface ErrorCardProps {
  onRefresh: () => void;
}

const ErrorCard: React.FC<ErrorCardProps> = ({ onRefresh }) => {
  return (
    <div className=" w-full bg-white rounded-lg flex flex-col items-center h-full">
      {/* Icon Section */}
      <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
        <RiFileSearchLine className="text-gray-500 w-10 h-10" />
      </div>

      {/* Text Section */}
      <h3 className="text-lg font-semibold text-gray-800 mt-4">Something went wrong</h3>
      <p className="text-sm text-gray-500 text-center mt-2">
        This board can’t be shown right now. Try refreshing this page.
      </p>

      {/* Refresh Button */}
      <button
        onClick={onRefresh}
        className="mt-6 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none"
      >
        Refresh
      </button>
    </div>
  );
};

export default ErrorCard;
