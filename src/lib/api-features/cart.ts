import type { Cart, CartResponse } from '@/types/cart'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const cartApi = {
	getCart: async (userId: number): Promise<Cart> => {
		const response = await fetch(`${API_BASE_URL}/telegram/cart/${userId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		if (!response.ok) {
			throw new Error(`Ошибка получения корзины: ${response.status}`)
		}

		return response.json()
	},

	addToCart: async (userId: number, parfumeId: number, quantity = 1) => {
		const response = await fetch(
			`${API_BASE_URL}/telegram/cart/${userId}/add`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ parfumeId, quantity }),
			}
		)

		if (!response.ok) {
			throw new Error(`Ошибка добавления в корзину: ${response.status}`)
		}

		return response.json()
	},

	updateCartItem: async (
		userId: number,
		parfumeId: number,
		quantity: number
	) => {
		const response = await fetch(
			`${API_BASE_URL}/telegram/cart/${userId}/update`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ parfumeId, quantity }),
			}
		)

		if (!response.ok) {
			throw new Error(`Ошибка обновления корзины: ${response.status}`)
		}

		return response.json()
	},

	removeFromCart: async (userId: number, parfumeId: number) => {
		const response = await fetch(`${API_BASE_URL}/cart/${userId}/remove`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ parfumeId }),
		})

		if (!response.ok) {
			throw new Error(`Ошибка удаления из корзины: ${response.status}`)
		}

		return response.json()
	},
}
