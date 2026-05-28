'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function ClientSideFetchingLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen pt-12 m:pt-8 bg-black">{children}</main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
