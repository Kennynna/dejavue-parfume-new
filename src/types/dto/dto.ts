// Типы для DTO (для отправки данных на сервер)
export interface AddToCartDto {
	parfumeId: number
	volumeId: number
	quantity?: number
}

export interface CreateProductDto {
	name: string
	brand?: string
	imgUrl: string
}

export interface AddVolumeDto {
	volume: number
	price: number
	imgUrls: string[]
}

export interface AddDescriptionDto {
	topNotes: string[]
	middleNotes: string[]
	baseNotes: string[]
	gender: string
	occasion: string[]
	season: string[]
}

export interface UpdateProductDto {
	name?: string
	brand?: string
	imgUrl?: string
}
