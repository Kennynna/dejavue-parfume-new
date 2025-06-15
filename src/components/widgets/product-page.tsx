'use client'
import { ItemSwiper } from './item-swiper'
import { ItemInfo } from './item-info'
import { CartButtonVariants } from '../ui/cart-button'
import { Parfume } from '@/types/cart'
import { useAddItemToCart } from '@/hooks/api-hooks/useTelegramCart'
import { useAppLoading } from '@/hooks/useApiLoading'
import { useState } from 'react'

export const ProductPageClient = ({ product }: { product: Parfume }) => {
	const { mutate } = useAddItemToCart()
	const isLoading = useAppLoading()

	const handleAddToCart = () => {
		mutate({
			userId: 2,
			parfumeId: product.id,
			quantity: 1,
			volumeId: product.volumes[currentVolume].id,
		})
	}
	const [currentVolume, serCurrentVolume] = useState(0)
	function changeVolume(index: number) {
		serCurrentVolume(index)
	}
	return (
		<>
			<ItemSwiper /* product={...} */ />
			<ItemInfo
				product={product}
				currentVolume={currentVolume}
				changeVolume={changeVolume}
			/>
			<div className='flex flex-col gap-6 mt-10'>
				<div className='space-y-4'>
					<CartButtonVariants
						isLoading={isLoading}
						onClick={handleAddToCart}
						variant='default'
					/>
				</div>
			</div>
		</>
	)
}
