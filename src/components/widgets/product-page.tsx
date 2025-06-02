'use client'
import { ItemSwiper } from './item-swiper'
import { ItemInfo } from './item-info'
import { CartButtonVariants } from '../ui/cart-button'
import { useState } from 'react'

export const ProductPageClient = () => {
	const [isLoading3, setIsLoading3] = useState(false)

	const handleAddToCart = async (setLoading: (loading: boolean) => void) => {
		setLoading(true)
		// Имитация API запроса
		await new Promise(resolve => setTimeout(resolve, 2000))
		setLoading(false)
	}
	return (
		<>
			<ItemSwiper /* product={...} */ />
			<ItemInfo /* product={...} */ />
			<div className='flex flex-col gap-6 mt-10'>
				<div className='space-y-4'>
					<CartButtonVariants
						isLoading={isLoading3}
						onClick={() => handleAddToCart(setIsLoading3)}
						variant='default'
					/>
				</div>
			</div>
		</>
	)
}
