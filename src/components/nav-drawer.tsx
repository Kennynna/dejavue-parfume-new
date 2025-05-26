'use client'

import { ShoppingBag } from 'lucide-react'

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from './ui/button'
import { useTelegramStore } from '@/store/user-store'
import { useInitTelegram } from '@/hooks'

export function NavDrawer({ children }: { children?: React.ReactNode }) {
	useInitTelegram()
	const { user, chatId } = useTelegramStore()

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='outline' size={'lg'}>
					<ShoppingBag className='h-10 w-4' />
				</Button>
			</SheetTrigger>

			<SheetContent>
				<SheetHeader>
					<SheetTitle>
						{user !== null && <p>{user.username}</p> && chatId && (
							<p>{chatId}</p>
						)}
						<p>Гость</p>
					</SheetTitle>
					<SheetDescription>

					</SheetDescription>
				</SheetHeader>
				<SheetFooter>
					<SheetClose asChild>
						<Button type='submit'>Save changes</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
