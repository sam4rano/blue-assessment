"use client";

import React from "react";
import { RiBankLine, RiMoneyDollarCircleLine } from "react-icons/ri";

interface CashCardProps {
  type: "withdrawal" | "deposit";
  amount: string;
  percentage: number;
  count: number;
  countType: "Cr Count" | "Dr Count";
}

const CashCard: React.FC<CashCardProps> = ({ type, amount, percentage, count, countType }) => {
  const isPositive = percentage > 0;
  const isWithdrawal = type === "withdrawal";

  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 space-x-4 max-w-md">
      {/* Icon Section */}
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full ${
          isWithdrawal ? "bg-green-100" : "bg-red-100"
        }`}
      >
        {isWithdrawal ? (
          <RiMoneyDollarCircleLine className="text-green-500 w-6 h-6" />
        ) : (
          <RiBankLine className="text-red-500 w-6 h-6" />
        )}
      </div>

      {/* Info Section */}
      <div className="flex-grow">
        <h4 className="text-gray-700 text-sm font-medium">
          {isWithdrawal ? "Cash Withdrawal" : "Cash Deposit"}
        </h4>
        <p className="text-2xl font-bold text-gray-800">{amount}</p>
        <p
          className={`text-sm ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? `▲${percentage}` : `▼${percentage}`}{" "}
          <span className="text-gray-500">
            {isPositive ? "Higher than last week" : "Less than last week"}
          </span>
        </p>
      </div>

      {/* Count Section */}
      <div className="flex flex-col items-end border-l pl-4 border-gray-200">
        <p className="text-gray-500 text-sm">{countType}</p>
        <p className="text-lg font-bold text-gray-800">{count.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CashCard;
