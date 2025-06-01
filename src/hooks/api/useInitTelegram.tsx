'use client'

import { useEffect } from 'react'
import { useTelegramStore } from '@/store/user-store'

export const useInitTelegram = () => {
	const setUser = useTelegramStore(s => s.setUser)
	const setChatId = useTelegramStore(s => s.setChatId)

	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			window.Telegram?.WebApp?.initDataUnsafe
		) {
			window.Telegram.WebApp.ready()
			const data = window.Telegram.WebApp.initDataUnsafe
			if (data.user) setUser(data.user)
			if (data.chat?.id) setChatId(data.chat.id.toString())
		}
	}, [setUser, setChatId])
}
