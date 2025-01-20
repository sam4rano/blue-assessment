"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import ContentHeader from "../cash-request/ContentHeader";
import TransactionTable from "./TransactionTable";



const ContainerCashEvacuation = () => {
  const router = useRouter();
  const params = useParams(); // Use params from the router

  const handleRoute = () => {
    // Use `params.id` or replace it with a new ID dynamically
    const id = params?.id || "default-id"; // Fallback if `id` isn't provided
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
