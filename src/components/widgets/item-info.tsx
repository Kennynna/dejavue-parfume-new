import '@/styles/item/item-info.css'
import { ItemInfoTab } from '../shared'

interface ItemInfoProps {
	ml: string
	price: number
	name: string
}

export const ItemInfo = ({ ml, price, name }: ItemInfoProps) => {
	return (
		<div className='mt-4'>
			<p className='text-center title'>{name}</p>
			<div className='item-price'>
				<p>
					Объем <span>{ml}</span> <span>100 ml</span>
				</p>
				<p>
					Цена <span>{price} Р</span>
				</p>
			</div>
			<ItemInfoTab />
		</div>
	)
}
