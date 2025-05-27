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
import { CartItem, UserAvatar } from '.'

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
				<SheetHeader className='p-0'>
					<SheetTitle>
						<div className='flex items-center gap-4 h-[72px] border-b border-b-gray-200 px-4'>
							<UserAvatar />
							{user ? (
								<>
									<p>Пользователь: {user.username}</p>
								</>
							) : (
								<p>Гость</p>
							)}
						</div>
					</SheetTitle>
					<SheetDescription>
						<h1 className='text-center text-2xl font-bold'>
							Корзина
						</h1>

						<CartItem />
					</SheetDescription>
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
