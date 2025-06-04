'use client'

import Image from 'next/image'
import { Plus, Minus, Trash2 } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartItemType } from '@/types/cart'
import {
	useIncrementQuantity,
	useRemoveFromCart,
	useDecrementQuantity
} from '@/hooks/api-hooks/useTelegramCart'
import { cn } from '@/lib/utils'
import { useAppLoading } from '@/hooks/useApiLoading'

interface CartItemProps {
	item: CartItemType
	userId: number // Добавляем userId как проп
}

export const CartItem = ({ item, userId }: CartItemProps) => {
	const incrementMutation = useIncrementQuantity()
	const decrementMutation = useDecrementQuantity()
	const { mutate: removeItem } = useRemoveFromCart()
	const isLoading = useAppLoading()

	const handleIncrement = () => {
		incrementMutation.mutate({
			userId,
			parfumeId: item.parfumeId,
			volumeId: item.volumeId,
		})
	}

	const handleDecrement = () => {
		decrementMutation.mutate({
			userId,
			parfumeId: item.parfumeId,
			volumeId: item.volumeId,
		})
	}

	const handleRemove = () => {
		removeItem({
			userId,
			parfumeId: item.parfumeId,
			volumeId: item.volumeId,
		})
	}

	// Форматирование цены в рублях (теперь берем из volume)
	const formattedPrice = new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
		maximumFractionDigits: 0,
	}).format(item.volume.price)

	// Общая стоимость этого товара
	const totalItemPrice = new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
		maximumFractionDigits: 0,
	}).format(item.volume.price * item.quantity)



	return (
		<div
			className={cn('max-w-md mx-auto', isLoading && 'opacity-50 select-none')}
		>
			<Card className='overflow-hidden'>
				<CardContent className='p-3'>
					<div className='flex gap-3 items-center'>
						{/* Изображение товара */}
						<div className='flex-shrink-0 w-20 h-20'>
							<img
								src='https://avatars.mds.yandex.net/i?id=163f15bafbf4aba058f9f37f84dde54b_l-4964301-images-thumbs&n=13'
								alt={`${item.parfume.brand} ${item.parfume.name} ${item.volume.volume}мл`}
								width={80}
								height={80}
								className='w-full h-full object-cover rounded-md'
								onError={e => {
									// Fallback на основное изображение парфюма при ошибке
									e.currentTarget.src =
										item.parfume.imgUrl || '/placeholder.svg'
								}}
							/>
						</div>

						<div className='flex-1 min-w-0'>
							{/* Информация о товаре */}
							<div className='flex flex-col mb-2'>
								<h3 className='font-medium text-sm mb-0.5 line-clamp-1'>
									{item.parfume.name}
								</h3>
								<p className='text-xs text-muted-foreground mb-1'>
									{item.parfume.brand}
								</p>

								{/* Объем */}
								<div className='flex items-center gap-2 mb-1'>
									<Badge variant='outline' className='text-xs px-2 py-0'>
										{item.volume.volume} мл
									</Badge>
								</div>
							</div>

							{/* Цены */}
							<div className='mb-2'>
								<div className='text-sm font-semibold text-primary'>
									{formattedPrice} за шт.
								</div>
								{item.quantity > 1 && (
									<div className='text-xs text-muted-foreground'>
										Итого: {totalItemPrice}
									</div>
								)}
							</div>

							{/* Управление количеством и удаление */}
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-1'>
									<Button
										variant='outline'
										size='icon'
										className='h-6 w-6'
										onClick={handleDecrement}
										disabled={item.quantity <= 1 || isLoading}
									>
										<Minus className='h-3 w-3' />
									</Button>
									<span className='w-8 text-center text-sm font-medium'>
										{item.quantity}
									</span>
									<Button
										variant='outline'
										size='icon'
										className='h-6 w-6'
										onClick={handleIncrement}
										disabled={isLoading}
									>
										<Plus className='h-3 w-3' />
									</Button>
								</div>

								<Button
									variant='ghost'
									size='icon'
									className='h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50'
									onClick={handleRemove}
									disabled={isLoading}
								>
									<Trash2 className='h-4 w-4' />
								</Button>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
