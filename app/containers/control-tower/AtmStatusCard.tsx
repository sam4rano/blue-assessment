"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ATMStatusCardProps {
  atmBalance: string;
  dailyData: {
    withdrawal: string;
    withdrawalLimit: string;
    spending: string;
    spendingLimit: string;
  };
  chartData: {
    atmStatus: Array<{ name: string; value: number }>;
    cashStatus: Array<{ name: string; value: number }>;
  };
  onViewDetail: () => void;
}

const COLORS = ["#007bff", "#ff9800", "#4caf50", "#9e9e9e"];

const ATMStatusCard: React.FC<ATMStatusCardProps> = ({
  atmBalance,
  dailyData,
  chartData,
  onViewDetail,
}) => {
  return (
    <div className="bg-white rounded-lg border-[1px] gap-2 flex flex-col ">
      {/* Header Section */}
      <div className="flex justify-between items-center px-2">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Current ATM Balance</h2>
          <p className="text-3xl font-bold text-gray-900">{atmBalance}</p>
        </div>
        <button
          onClick={onViewDetail}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          View Detail
        </button>
      </div>

      {/* Daily Summary Section */}
      <div className="flex flex-row justify-between px-2 gap-4 text-sm text-gray-700">
        <div>
          <p className="font-medium">Today Withdrawal</p>
          <p className="text-gray-900 font-bold">{dailyData.withdrawal}</p>
        </div>
        <div>
          <p className="font-medium">Daily Withdrawal Limit</p>
          <p className="text-gray-900 font-bold">{dailyData.withdrawalLimit}</p>
        </div>
        <div>
          <p className="font-medium">Today Spendings</p>
          <p className="text-gray-900 font-bold">{dailyData.spending}</p>
        </div>
        <div>
          <p className="font-medium">Daily Spending Limit</p>
          <p className="text-gray-900 font-bold">{dailyData.spendingLimit}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-4">
        {/* ATM Status */}
        <div className="bg-gray-50 p-4 rounded-xl border-[1px] flex-col gap-4">
          <h3 className="text-sm font-medium text-gray-700 mb-4">ATM Status</h3>
		  <div className="flex flex-row gap-2 px-2">

          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={chartData.atmStatus}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
                label
              >
                {chartData.atmStatus.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {chartData.atmStatus.map((item) => (
              <div key={item.name} className="flex flex-col justify-between">
                <span>{item.name}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
		  </div>
        </div>

        {/* Cash Status */}
        <div className="bg-gray-50 p-4 rounded-xl border-[1px] flex-col gap-4">
          <h3 className="text-sm font-medium text-gray-700 mb-4">Cash Status</h3>
		  <div className="flex flex-row gap-2">

          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={chartData.cashStatus}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
                label
              >
                {chartData.cashStatus.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {chartData.cashStatus.map((item) => (
              <div key={item.name} className="flex flex-col justify-between">
                <span>{item.name}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
		  </div>
        </div>
      </div>
    </div>
  );
};

export default ATMStatusCard;
