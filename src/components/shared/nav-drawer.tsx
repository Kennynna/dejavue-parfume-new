'use client'

import { ShoppingBag } from 'lucide-react'
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
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

			<SheetContent className='flex flex-col h-full'>
				<SheetHeader className='flex-shrink-0'>
					<SheetTitle>
						<div className='flex items-center gap-4 h-[72px] border-b border-b-gray-200 px-4'>
							<UserAvatar />
							{user ? <p>Пользователь: {user.username}</p> : <p>Гость</p>}
						</div>
					</SheetTitle>
				</SheetHeader>

				{/* Заголовок корзины */}
				<div className='flex-shrink-0 px-4 py-4'>
					<h1 className='text-center text-2xl font-bold'>Корзина</h1>
				</div>

				{/* Прокручиваемая область с товарами */}
				<div className='flex-1 overflow-y-auto px-4 pb-4'>
					<div className='space-y-3'>
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
					</div>
				</div>

				<SheetFooter className='flex-shrink-0 px-4 pb-4'>
					<SheetClose asChild>
						<div>
							<div className='flex justify-between w-full border-b border-dashed'>
								<p>ИТОГО</p>
								<p>1000Р</p>
							</div>
							<Button className='w-full mt-4'>Оформить заказ</Button>
						</div>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
