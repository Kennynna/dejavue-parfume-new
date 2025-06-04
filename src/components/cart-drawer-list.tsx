import { Cart } from '@/types/cart'
import { CartItem } from './shared'
import { useCart } from '@/hooks/api-hooks/useTelegramCart'

interface CartDrawerListProps {
	userId: number
}

export const CartDrawerList = ({ userId }: CartDrawerListProps) => {
	const { data: cart } = useCart(userId)

	// Форматирование общей суммы
	const formattedTotal = cart?.total
		? new Intl.NumberFormat('ru-RU', {
				style: 'currency',
				currency: 'RUB',
				maximumFractionDigits: 0,
		  }).format(cart.total)
		: '0 ₽'

	return (
		<div className='flex-1 overflow-y-auto px-4 pb-4'>
			{/* Общая сумма */}
			{cart && cart.items.length > 0 && (
				<div className='sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-3 mb-4 border-b'>
					<div className='flex justify-between items-center'>
						<span className='text-sm font-medium'>Общая сумма:</span>
						<span className='text-lg font-bold text-primary'>
							{formattedTotal}
						</span>
					</div>
					<div className='text-xs text-muted-foreground'>
						{cart.items.length} {cart.items.length === 1 ? 'товар' : 'товаров'}
					</div>
				</div>
			)}

			{/* Список товаров */}
			<div className='space-y-3'>
				{cart && cart.items.length > 0 ? (
					cart.items.map(item => (
						<CartItem
							key={`${item.parfumeId}-${item.volumeId}`} // Уникальный ключ
							item={item}
							userId={userId}
						/>
					))
				) : (
					<div className='text-center py-8'>
						<p className='text-muted-foreground'>Корзина пуста</p>
					</div>
				)}
			</div>
		</div>
	)
}
