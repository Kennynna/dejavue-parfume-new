'use client'

import {  Parfume } from '@/types/cart'
import { useQuery } from '@tanstack/react-query'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const productKeys = {
	all: ['products'] as const,
	byId: (id: number) => [...productKeys.all, id] as const,
}

export function useProducts() {
	return useQuery({
		queryKey: productKeys.all,
		queryFn: async () => {
			const response = await fetch(`${API_URL}/parfume/products`)
			if (!response.ok) {
				throw new Error('Не удалось загрузить продукты')
			}
			const data = await response.json()
			return data as Parfume[]
		},
		staleTime: 0,
		refetchOnWindowFocus: false,
	})
}
