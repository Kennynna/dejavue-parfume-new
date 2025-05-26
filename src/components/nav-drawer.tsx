'use client'

import { ShoppingBag } from 'lucide-react'
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetFooter,
	SheetClose,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useTelegramStore } from '@/store/user-store'
import { useInitTelegram } from '@/hooks/useInitTelegram'

export function NavDrawer() {
	// инициализируем Telegram WebApp
	useInitTelegram()

	// читаем из хранилища
	const user = useTelegramStore(state => state.user)
	const chatId = useTelegramStore(state => state.chatId)

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='outline' size='lg'>
					<ShoppingBag className='h-6 w-6' />
				</Button>
			</SheetTrigger>

			<SheetContent>
				<SheetHeader>
					<SheetTitle>
						{user ? (
							<>
								<p>Пользователь: {user.username}</p>
								<p>Chat ID: {chatId}</p>
							</>
						) : (
							<p>Гость</p>
						)}
					</SheetTitle>
					<SheetDescription>{/* Здесь ваш текст */}</SheetDescription>
				</SheetHeader>
				<SheetFooter>
					<SheetClose asChild>
						<Button>Save changes</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
