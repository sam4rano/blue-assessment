"use client";

import React from "react";
import { RiWallet2Line } from "react-icons/ri";

interface CashPositionCardProps {
  position: string;
  change: number;
  vaultBalance: string;
  tellerBalance: string;
}

const CashPositionCard: React.FC<CashPositionCardProps> = ({
  position,
  change,
  vaultBalance,
  tellerBalance,
}) => {
  const isPositive = change > 0;

  return (
    <div className="bg-white rounded-lg flex flex-col gap-2 w-full">
     
      <div className="flex items-center bg-blue-50 p-4 rounded-lg">
       
        <div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full">
          <RiWallet2Line className="text-blue-600 w-6 h-6" />
        </div>
        {/* Info Section */}
        <div className="flex-grow">
          <h4 className="text-sm font-medium text-gray-500">Cash Position</h4>
          <p className="text-2xl font-bold text-gray-800">{position}</p>
          <div
            className={`flex items-center space-x-1 text-sm ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            <span>{isPositive ? `▲${change}` : `▼${change}`}</span>
            <span className="text-gray-500">
              {isPositive
                ? "Higher than last week"
                : "Less than last week"}
            </span>
          </div>
        </div>
      </div>

      {/* Balance Section */}
      <div className="grid grid-cols-2 gap-4">
        {/* Vault Balance */}
        <div className="flex flex-col items-center justify-center bg-blue-100 rounded-lg p-4">
          <p className="text-sm text-blue-800 font-medium">Vault Balance</p>
          <p className="text-lg font-bold text-blue-900">{vaultBalance}</p>
        </div>
        {/* Teller Till Balance */}
        <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-800 font-medium">Teller Till Balance</p>
          <p className="text-lg font-bold text-gray-900">{tellerBalance}</p>
        </div>
      </div>
    </div>
  );
};

export default CashPositionCard;
