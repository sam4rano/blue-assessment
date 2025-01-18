/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchBranchById, fetchBranchDetails, fetchCashEvacuationById, fetchCashEvacuations, fetchCashRequestById, fetchCashRequests, fetchCurrencyById } from "@/app/config";
import { useQuery } from "@tanstack/react-query";


interface CashEvacuationParams {
  offset?: number;
  limit?: number;
  branch_code?: string;
}

interface Filters {
  [key: string]: any;
}

const queryDefaults = {
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  retry: 1,
};

// Branch Queries
export const useBranchQuery = (id: number) => {
  return useQuery({
    queryKey: ["branch", id],
    queryFn: () => fetchBranchById(id),
    enabled: !!id,
    ...queryDefaults,
  });
};

export const useBranchDetailsQuery = (id: number) => {
  return useQuery({
    queryKey: ["branchDetails", id],
    queryFn: () => fetchBranchDetails(id),
    enabled: !!id,
    ...queryDefaults,
  });
};

// Cash Requests Queries
export const useCashRequestsQuery = (filters: Filters = {}) => {
  const serializedFilters = JSON.stringify(filters);

  return useQuery({
    queryKey: ["cashRequests", serializedFilters],
    queryFn: () => fetchCashRequests(filters),
    ...queryDefaults,
  });
};

export const useCashRequestByIdQuery = (id: number) => {
  return useQuery({
    queryKey: ["cashRequest", id],
    queryFn: () => fetchCashRequestById(id),
    enabled: !!id,
    ...queryDefaults,
  });
};

// Currency Queries
export const useCurrencyQuery = (id: number) => {
  return useQuery({
    queryKey: ["currency", id],
    queryFn: () => fetchCurrencyById(id),
    enabled: !!id,
    ...queryDefaults,
  });
};

// Cash Evacuation Queries
export const useCashEvacuationsQuery = (params: CashEvacuationParams = {}) => {
  const serializedParams = JSON.stringify(params);

  return useQuery({
    queryKey: ["cashEvacuations", serializedParams],
    queryFn: () => fetchCashEvacuations(params),
    ...queryDefaults,
  });
};

export const useCashEvacuationByIdQuery = (id: number) => {
  return useQuery({
    queryKey: ["cashEvacuation", id],
    queryFn: () => fetchCashEvacuationById(id),
    enabled: !!id,
    ...queryDefaults,
  });
};
