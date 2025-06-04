
// Основной тип парфюма (возвращается из ParfumeService)
export interface Parfume {
	id: number
	name: string
	brand: string | null
	createdAt: string
	imgUrl: string
	volumes: ParfumeVolume[] // Добавляем volumes, так как они включаются в ответ
	description?: ParfumeDescription // Опционально, так как может быть не у всех парфюмов
}
// Тип для объема парфюма
export interface ParfumeVolume {
	id: number
	parfumeId: number
	volume: number
	price: number
	imgUrls: string[]
	createdAt: string
	updatedAt: string
}

// Тип для описания парфюма
export interface ParfumeDescription {
	id: number
	parfumeId: number
	topNotes: string[]
	middleNotes: string[]
	baseNotes: string[]
	gender: string
	occasion: string[]
	season: string[]
	createdAt: string
	updatedAt: string
}

// Тип для элемента корзины (возвращается из TelegramService)
export interface CartItemType {
	id: number
	cartId: number
	parfumeId: number
	volumeId: number
	quantity: number
	parfume: Parfume // Включает основную информацию о парфюме
	volume: ParfumeVolume // Включает информацию об объеме
}

// Тип для пользователя Telegram
export interface TelegramUser {
	id: number
	login: string
	chatId: string | null
}

// Тип для корзины (возвращается из TelegramService)
export interface Cart {
	id: number
	userId: number
	items: CartItemType[] // Массив элементов корзины
	total: number // Общая сумма корзины
}


