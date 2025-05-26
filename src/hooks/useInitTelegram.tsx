'use client'

import { useTelegramStore } from '@/store/user-store'
import { useEffect } from 'react'

export const useInitTelegram = () => {
	const setUser = useTelegramStore(state => state.setUser)

	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			window.Telegram?.WebApp?.initDataUnsafe?.user
		) {
			window.Telegram.WebApp.ready()
			setUser(window.Telegram.WebApp.initDataUnsafe.user)
			console.log(window.Telegram.WebApp.initDataUnsafe)
		}
	}, [setUser])
}
