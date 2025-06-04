'use client'
import { ItemSwiper } from './item-swiper'
import { ItemInfo } from './item-info'
import { CartButtonVariants } from '../ui/cart-button'
import { Parfume } from '@/types/cart'
import { useAddItemToCart } from '@/hooks/api-hooks/useTelegramCart'
import { useAppLoading } from '@/hooks/useApiLoading'

export const ProductPageClient = ({ product }: { product: Parfume }) => {
	const { mutate } = useAddItemToCart()
	const isLoading = useAppLoading()

	const handleAddToCart = () => {
		mutate({ userId: 2, parfumeId: product.id, quantity: 1 })
	}
	return (
		<>
			<ItemSwiper /* product={...} */ />
			<ItemInfo price={product.volumes[0].price} ml={product.volumes[0].volume} name={product.name} />
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
