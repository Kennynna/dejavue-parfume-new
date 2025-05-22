'use client'

import { useEffect, useState } from 'react'

export const useTelegramUser = () => {
	const [telegramData, setTelegramData] = useState<TelegramWebAppUser | null>(
		null
	)
	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			window.Telegram?.WebApp?.initDataUnsafe?.user
		) {
			window.Telegram.WebApp.ready()
			setTelegramData(window.Telegram.WebApp.initDataUnsafe.user)
		}
	}, [])
	return { telegramData }
}
