import { create } from 'zustand'

type TelegramWebAppUser = {
	id: string
	first_name: string
	last_name?: string
	username?: string
	photo_url?: string
	language_code?: string
	is_premium?: boolean
	// ...доп. поля
}

type TelegramStore = {
	user: TelegramWebAppUser | null
	chatId: string | null
	setUser: (user: TelegramWebAppUser) => void
	setChatId: (chatId: string) => void
}

export const useTelegramStore = create<TelegramStore>(set => ({
	chatId: null,
	user: null,
	setChatId: chatId => set({ chatId }),
	setUser: user => set({ user }),
}))
