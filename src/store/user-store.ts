import { create } from 'zustand'

export type TelegramWebAppUser = {
	id: string
	first_name: string
	last_name?: string
	username?: string
	photo_url?: string
	language_code?: string
	is_premium?: boolean
}

type TelegramStore = {
	user: TelegramWebAppUser | null
	chatId: string | null
	setUser: (user: TelegramWebAppUser) => void
	setChatId: (chatId: string) => void
}

export const useTelegramStore = create<TelegramStore>(set => ({
	user: null,
	chatId: null,
	setUser: user => set({ user }),
	setChatId: chatId => set({ chatId }),
}))
