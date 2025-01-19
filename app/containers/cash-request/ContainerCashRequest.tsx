"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import ContentHeader from "./ContentHeader";
import TransactionTable from "./TransactionTable";

const ContainerCashRequest = () => {
  const router = useRouter();
  const params = useParams(); // Use params from the router

  const handleRoute = () => {
    // Use `params.id` or replace it with a new ID dynamically
    const id = params?.id || "default-id"; // Fallback if `id` isn't provided
    router.push(`/dashboard/cash-request/${id}`);
  };

  return (
    <div className="w-full">
      <ContentHeader title="CASH REQUEST" handleRoute={handleRoute} />
      <TransactionTable />
    </div>
  );
};

export default ContainerCashRequest;
