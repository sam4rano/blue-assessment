import React from "react";
import { RiFileSearchLine } from "react-icons/ri";
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
    <div className="flex flex-row  gap-4 w-full font-roboto">
      <div className="flex flex-col gap-4 w-[65%]  ">
        <h1 className="font-medium text-xl">ATM Health Monitor</h1>
        <div className="bg-white p-4 drop-shadow-md rounded-lg">
          <div className="flex flex-col gap-4 p-2">
            <div className="flex flex-col gap-2 justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  Current ATM Balance
                </h2>
                <p className="text-3xl font-bold text-gray-900">{atmBalance}</p>
              </div>
              <div className="flex flex-row gap-2 justify-between">
                <div className="flex flex-wrap gap-4 justify-between text-sm text-gray-700">
                  <div>
                    <p className="font-medium">Today Withdrawal</p>
                    <p className="text-gray-900 font-bold">
                      {dailyData.withdrawal}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Daily Withdrawal Limit</p>
                    <p className="text-gray-900 font-bold">
                      {dailyData.withdrawalLimit}
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p className="font-medium">Today Spendings</p>
                    <p className="text-gray-900 font-bold">
                      {dailyData.spending}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Daily Spending Limit</p>
                    <p className="text-gray-900 font-bold">
                      {dailyData.spendingLimit}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onViewDetail}
                  className="px-4 py-2 bg-brand_primary italic font-roboto text-sm font-extralight text-white rounded-full hover:bg-blue-700"
                >
                  View Detail
                </button>
              </div>
            </div>

            
          </div>
          <div className="grid grid-cols-2 gap-4 py-4">
           
            <div className="bg-white p-4 rounded-lg border-[1px] border-border_light">
              <h3 className="text-sm  font-bold text-gray-700 mb-4">
                ATM Status
              </h3>
              <div className="flex items-center gap-4">
                <ResponsiveContainer width="50%" height={150}>
                  <PieChart>
                    <Pie
                      data={chartData.atmStatus}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      labelLine={false}
                    >
                      {chartData.atmStatus.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {chartData.atmStatus.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col  justify-between"
                    >
                      <span className="text-xs">{item.name}</span>
                      <span className="font-bold text-base">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-[1px] border-border_light">
              <h3 className="text-sm font-bold text-gray-700 mb-4">
                Cash Status
              </h3>
              <div className="flex items-center gap-4">
                <ResponsiveContainer width="50%" height={150}>
                  <PieChart>
                    <Pie
                      data={chartData.cashStatus}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      labelLine={false}
                    >
                      {chartData.cashStatus.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {chartData.cashStatus.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col justify-between"
                    >
                      <span className="text-xs">{item.name}</span>
                      <span className="font-bold text-base">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cash Health Section */}
      <div className="w-[35%] flex flex-col gap-4 p-4 rounded-lg text-center">
        <h1 className="font-medium text-xl">Cash Health</h1>
        <div className="flex flex-col gap-y-8 bg-white py-4">
          <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mx-auto">
            <RiFileSearchLine className="text-gray-500 w-10 h-10" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              Something went wrong
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              This board can’t be shown right now. Try refreshing this page.
            </p>
            <button className="mt-4 px-6 py-2 bg-brand_primary text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none">
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATMStatusCard;
