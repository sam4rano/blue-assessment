"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ClientSideToastContainer from "./ClientSideToastContainer";


const queryClient = new QueryClient();

interface ProvidersProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ClientSideToastContainer />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
