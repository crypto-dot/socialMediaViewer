import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import SocialMediaViewerReact from './SocialMediaViewerReact';
import '../styles/global.css';
import '../styles/spinner.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// This component wraps everything in a single React tree to avoid hydration issues
const ReactApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SocialMediaViewerReact />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactApp; 