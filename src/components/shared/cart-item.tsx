'use client'

import Image from 'next/image'
import { Plus, Minus, Trash2 } from 'lucide-react'
import { useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartItemType } from '@/types/cart'
import { useRemoveFromCart } from '@/hooks/api-hooks/useTelegramCart'
import { cn } from '@/lib/utils'
import { useAppLoading } from '@/hooks/useApiLoading'

interface CartItemProps {
	item: CartItemType
}

export const CartItem = ({ item }: CartItemProps) => {
	const [quantity, setQuantity] = useState(1)

	const increaseQuantity = () => setQuantity(prev => prev + 1)
	const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

	// Форматирование цены в рублях
	const formattedPrice = new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
		maximumFractionDigits: 0,
	}).format(item.parfume.price)

	const isLoading = useAppLoading()
	const { mutate } = useRemoveFromCart()

	const handleRemove = () => {
		mutate({ userId: 2, itemId: item.id })
	}


	return (
		<div
			className={cn('max-w-md mx-auto', isLoading && 'opacity-50 select-none')}
		>
			<Card className='overflow-hidden'>
				<CardContent className='p-3'>
					<div className='flex gap-3 items-center'>
						<div className='flex-1'>
							<img
								src='https://avatars.mds.yandex.net/i?id=05077726d32931211dd5fd900bf94149_l-5139440-images-thumbs&n=13'
								alt={`${item.parfume.brand} ${item.parfume.name}`}
								width={100}
								height={100}
								className='w-full h-full object-cover rounded-md'
							/>
						</div>

						<div className='flex-1 min-w-0'>
							<div className='flex flex-col'>
								<h3 className='font-medium text-sm mb-0.5 line-clamp-1'>
									{item.parfume.name}
								</h3>
								<p className='text-xs text-muted-foreground mb-1'>
									{item.parfume.brand}
								</p>
								<p>{item.id}</p>
								<div className='flex items-center gap-2 mb-1.5'>
									<Badge variant='outline' className='text-xs px-2 py-0'>
										{item.parfume.ml} мл
									</Badge>
								</div>
							</div>

							<div className='text-lg font-bold text-primary mb-2'>
								{formattedPrice}
							</div>

							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-1'>
									<Button
										variant='outline'
										size='icon'
										className='h-6 w-6'
										onClick={decreaseQuantity}
										disabled={quantity <= 1}
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
										onClick={increaseQuantity}
									>
										<Plus className='h-3 w-3' />
									</Button>
								</div>

								<Button
									variant='ghost'
									size='icon'
									className='h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50'
									onClick={handleRemove}
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
