interface TelegramWebAppUser {
	id: string
	is_bot: boolean
	first_name: string
	last_name?: string
	username?: string
	language_code?: string
}

interface TelegramWebApp {
	initData: string
	initDataUnsafe: {
		user?: TelegramWebAppUser
		chat?: any
	}
	ready(): void
}

interface Telegram {
	WebApp: TelegramWebApp
}

interface Window {
	Telegram: Telegram
}

