export interface Parfume {
	id: number
	name: string
	brand: string | null
	price: number
	createdAt: string
	imgUrl: string
	ml: string
}

export interface CartItem {
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
	id: number
	userId: number
	items: CartItem[]
	user: TelegramUser
}

export interface CartResponse {
	message?: string
	cart?: Cart
	totalItems?: number
	totalPrice?: number
}
