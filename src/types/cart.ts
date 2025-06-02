export interface Parfume {
	id: number
	name: string
	brand: string | null
	price: number
	createdAt: string
	imgUrl: string
	ml: string
}

export interface CartItemType {
	id: number
	cartId: number
	parfumeId: number
	quantity: number
	parfume: Parfume
}

export interface TelegramUser {
	id: number
	login: string
	chatId: string | null
}

export interface Cart {
	items: CartItemType[]
}

export interface CartResponse {
	message?: string
	cart?: Cart
	totalItems?: number
	totalPrice?: number
}
