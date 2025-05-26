'use client'

import { useTelegramStore } from '@/store/user-store'
import { useEffect } from 'react'

export const useInitTelegram = () => {
	const setUser = useTelegramStore(state => state.setUser)
	const setChatId = useTelegramStore(state => state.setChatId)
	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			window.Telegram?.WebApp?.initDataUnsafe?.user
		) {
			window.Telegram.WebApp.ready()
			setUser(window.Telegram.WebApp.initDataUnsafe.user)
			setChatId(window.Telegram.WebApp.initDataUnsafe.chat.id)
		}
	}, [setUser, setChatId])
}
