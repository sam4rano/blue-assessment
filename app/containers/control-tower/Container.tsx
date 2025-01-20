import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import BranchCard from "./BranchCard";
import CashCard from "./CashCard";
import CashPositionCard from "./CashPositionCard";
import OperationCard from "./OperationCard";
import CashAnalytics from "./CashAnalytics";
import RequestFilter from "./RequestFilter";
import { TableContainer } from "./TableContainer";

const Container = () => {
  const cards = Array(5).fill("No operation actions for today");

  const branchId = "201";
  return (
    <div className="w-full flex flex-row h-min-screen py-5 bg-color_off_white">
      <div className="w-[270px] pr-5">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        <div className="w-full flex flex-row gap-2 py-4 px-2">
          <BranchCard branchId={branchId} />
          <div className="w-full flex flex-col gap-4">
            <CashCard
              type="withdrawal"
              amount="₦117,420,000"
              percentage={2.5}
              count={11201}
              countType="Cr Count"
            />
            <CashCard
              type="deposit"
              amount="₦117,420,000"
              percentage={-0.5}
              count={10201}
              countType="Dr Count"
            />
          </div>
          <div className="w-full ">
            <CashPositionCard
              position="₦620,510,000"
              change={2.5}
              vaultBalance="₦140,990,000"
              tellerBalance="₦14,040,000"
            />
          </div>
        </div>
        <div className="p-2">
          <h1 className="text-bold text-[32px] font-roboto">Operation Action</h1>
          <div className="grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-5 gap-2 ">
            {cards.map((message, index) => (
              <OperationCard key={index} message={message} />
            ))}
          </div>
        </div>
        <CashAnalytics />
        <div className="flex flex-col px-4 py-4 gap-y-4">
            <h1 className=" font-medium text-[20px] leading-[23px] font-roboto">Approve Request status</h1>
            <RequestFilter />
            <TableContainer />
          </div>

      </div>
    </div>
  );
};

export default Container;
