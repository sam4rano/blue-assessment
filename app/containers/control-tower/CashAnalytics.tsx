"use client";
import React from "react";
import ATMStatusCard from "./AtmStatusCard";
import ErrorCard from "./ErrorCard";

const CashAnalytics = () => {
  const atmBalance = "₦420,000,000,000";

  const dailyData = {
    withdrawal: "₦6,110,000",
    withdrawalLimit: "₦36,110,000",
    spending: "₦3,110,000",
    spendingLimit: "₦36,110,000",
  };

  const chartData = {
    atmStatus: [
      { name: "In service", value: 20 },
      { name: "Out of service", value: 20 },
      { name: "Switch Dis", value: 20 },
      { name: "Unknown", value: 20 },
    ],
    cashStatus: [
      { name: "Cash low", value: 20 },
      { name: "Cash out", value: 20 },
      { name: "Available", value: 20 },
      { name: "Unknown", value: 20 },
    ],
  };

  const handleViewDetail = () => {
    console.log("View detail clicked");
  };

  const handleRefresh = () => {
    console.log("welcome to refresh");
  };

  return (
    <div className="flex flex-row gap-2 max-h-[401px] h-full justify-center items-center px-2 bg-gray-100 w-full ">
      <div className="w-[65%]">
        <ATMStatusCard
          atmBalance={atmBalance}
          dailyData={dailyData}
          chartData={chartData}
          onViewDetail={handleViewDetail}
        />
      </div>
      <div className="w-[35%] h-full py-8">
        <ErrorCard onRefresh={handleRefresh} />
      </div>
    </div>
  );
};

export default CashAnalytics;
