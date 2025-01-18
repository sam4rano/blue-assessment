import { useQuery } from "@tanstack/react-query";
import { fetchBranchById } from "../config";

/**
 * Hook to fetch branch data by ID
 * @param id - The branch ID
 * @returns Query object containing the branch data and query state
 */
export const useBranchQuery = (id: number) => {
  return useQuery({
    queryKey: ["branch", id],
    queryFn: () => fetchBranchById(id),
    enabled: !!id, 
	// staleTime: 5 * 60 * 1000, 
    refetchOnWindowFocus: false,
    refetchOnReconnect: false, 
    retry: 1, 
  });
};
