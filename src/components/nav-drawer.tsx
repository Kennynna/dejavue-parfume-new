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

export function NavDrawer({ children }: { children?: React.ReactNode }) {
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
					</SheetTitle>
					<SheetDescription>
						Make changes to your profile here. Click save when you're done.
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
