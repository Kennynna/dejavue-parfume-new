'use client'

import { useEffect } from 'react'
import { useTelegramStore } from '@/store/user-store'

export const useInitTelegram = () => {
	const setUser = useTelegramStore(s => s.setUser)
	const setChatId = useTelegramStore(s => s.setChatId)

	useEffect(() => {
		// Функция инициализации
		const initTelegram = () => {
			if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
				console.log('Telegram WebApp доступен, инициализация...')
				window.Telegram.WebApp.ready()
				const data = window.Telegram.WebApp.initDataUnsafe

				console.log('Данные Telegram:', data)

				if (data?.user) {
					console.log('Пользователь найден:', data.user)
					setUser(data.user)
				} else {
					console.warn('Пользователь не найден в данных')
				}

				if (data?.chat?.id) {
					console.log('ID чата найден:', data.chat.id)
					setChatId(data.chat.id.toString())
				} else {
					console.warn('ID чата не найден в данных')
				}

				return true
			}
			return false
		}

		// Пробуем инициализировать сразу
		if (!initTelegram()) {
			console.log('Telegram WebApp не готов, ждем...')

			// Если не получилось, пробуем через интервал
			const intervalId = setInterval(() => {
				if (initTelegram()) {
					clearInterval(intervalId)
					console.log('Telegram WebApp успешно инициализирован')
				}
			}, 100)

			// Очистка интервала
			return () => clearInterval(intervalId)
		}
	}, [setUser, setChatId])
}