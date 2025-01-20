"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import ContentHeader from "../cash-request/ContentHeader";
import TransactionTable from "./TransactionTable";



const ContainerCashEvacuation = () => {
  const router = useRouter();
  const params = useParams(); 

  const handleRoute = () => {
    
    const id = params?.id || "default-id"; 
    router.push(`/dashboard/cash-evacuation/${id}`);
  };

  return (
    <div className="w-full">
      <ContentHeader title="Cash Evacuation " handleRoute={handleRoute} />
      <TransactionTable />
    </div>
  );
};

export default ContainerCashEvacuation;
