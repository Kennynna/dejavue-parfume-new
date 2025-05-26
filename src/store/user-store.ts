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
	setUser: (user: TelegramWebAppUser) => void
}

export const useTelegramStore = create<TelegramStore>(set => ({
	user: null,
	setUser: user => set({ user }),
}))
