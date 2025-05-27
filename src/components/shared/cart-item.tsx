'use client'

import Image from 'next/image'
import { Plus, Minus, Trash2 } from 'lucide-react'
import { useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const  CartItem = () => {
	const [quantity, setQuantity] = useState(1)

	const increaseQuantity = () => setQuantity(prev => prev + 1)
	const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

	return (
		<div className='max-w-md mx-auto p-4'>
			<Card className='overflow-hidden'>
				<CardContent className='p-3'>
					<div className='flex gap-3'>
						<div className='flex-shrink-0'>
							<Image
								src='/placeholder.svg?height=80&width=80'
								alt='iPhone 15 Pro'
								width={80}
								height={80}
								className='w-20 h-20 object-cover rounded-md'
							/>
						</div>

						<div className='flex-1 min-w-0'>
							<h3 className='font-medium text-sm mb-1 line-clamp-2'>
								iPhone 15 Pro Max 256GB
							</h3>

							<div className='text-lg font-bold text-primary mb-2'>$1,199</div>

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
										{quantity}
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
									className='h-8 w-8 text-red-500 hover:text-red-700'
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
