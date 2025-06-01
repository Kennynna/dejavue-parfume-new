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
		staleTime: 60000, // Данные устаревают через 1 минуту, уменьшая повторные запросы
		refetchOnWindowFocus: false, // Отключить обновление при фокусе окна
		retry: 1, // Ограничить попытки повтора до 1 для ненадежных API
	})
}
