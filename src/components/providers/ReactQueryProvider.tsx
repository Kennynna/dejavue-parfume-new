'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
export function ReactQueryProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [queryClient] = React.useState(() => new QueryClient())
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			{children}
		</QueryClientProvider>
	)
}
