import { Parfume } from '@/types/cart'
import { CartItem } from './shared'
import { useCart } from '@/hooks/api-hooks/useTelegramCart'

interface CartDrawerListProps {
	userId: number
}
export const CartDrawerList = ({ userId }: CartDrawerListProps) => {
	const { data } = useCart(userId)
	console.log(data)
	return (
		<div className='flex-1 overflow-y-auto px-4 pb-4'>
			<div className='space-y-3'>
				{data && data?.map(item => <CartItem key={item.id} item={item} />)}
			</div>
		</div>
	)
}
