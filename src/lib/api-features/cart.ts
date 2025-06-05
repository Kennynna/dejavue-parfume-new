import type { Cart, CartItemType } from '@/types/cart'

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

	addToCart: async (data: {
		userId: number
		parfumeId: number
		volumeId: number
		quantity?: number
	}) => {
		const response = await fetch(`${API_BASE_URL}/telegram/cart/add`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		if (!response.ok) {
			throw new Error(`Ошибка добавления в корзину: ${response.status}`)
		}

		return response.json()
	},

	incrementQuantity: async (
		userId: number,
		parfumeId: number,
		volumeId: number
	) => {
		const response = await fetch(
			`${API_BASE_URL}/telegram/cart/${userId}/parfume/${parfumeId}/volume/${volumeId}/increment`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)

		if (!response.ok) {
			throw new Error(`Ошибка увеличения количества: ${response.status}`)
		}

		return response.json()
	},

	decrementQuantity: async (
		userId: number,
		parfumeId: number,
		volumeId: number
	) => {
		const response = await fetch(
			`${API_BASE_URL}/telegram/cart/${userId}/parfume/${parfumeId}/volume/${volumeId}/decrement`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)

		if (!response.ok) {
			throw new Error(`Ошибка уменьшения количества: ${response.status}`)
		}

		return response.json()
	},

	removeFromCart: async (
		userId: number,
		itemId: number
	) => {
		const response = await fetch(
			`${API_BASE_URL}/telegram/cart/${userId}/item/${itemId}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)

		if (!response.ok) {
			throw new Error(`Ошибка удаления из корзины: ${response.status}`)
		}

		return response.json()
	},

	clearCart: async (userId: number) => {
		const response = await fetch(
			`${API_BASE_URL}/telegram/cart/clear/${userId}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)

		if (!response.ok) {
			throw new Error(`Ошибка очистки корзины: ${response.status}`)
		}

		return response.json()
	},
}
