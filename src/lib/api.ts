import { Parfume } from '@/types/cart'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

if (!API_BASE_URL) {
	throw new Error('NEXT_PUBLIC_API_URL не определен в переменных окружения')
}

export const catalogApi = {
	getItemById: async (productId: number): Promise<Parfume> => {
		const response = await fetch(
			`${API_BASE_URL}/parfume/products/${productId}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
				// Добавляем cache для оптимизации
				cache: 'force-cache',
				next: { revalidate: 3600 }, // Кэш на 1 час
			}
		)

		if (!response.ok) {
			if (response.status === 404) {
				throw new Error('Продукт не найден')
			}
			throw new Error(`Ошибка получения продукта: ${response.status}`)
		}

		return response.json()
	},
}
