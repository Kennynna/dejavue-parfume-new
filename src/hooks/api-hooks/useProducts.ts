'use client'

import { useQuery } from '@tanstack/react-query'

const API_URL = process.env.NEXT_PUBLIC_API_URL 
export function useProducts() {
	return useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			const response = await fetch(`${API_URL}/parfume/products`)
			if (!response.ok) {
				throw new Error('Не удалось загрузить продукты')
			}
			return response.json()
		},
		staleTime: 0,
		refetchOnWindowFocus: false, // Отключить обновление при фокусе окна
	})
}
