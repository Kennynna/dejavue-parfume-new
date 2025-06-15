import '@/styles/item/item-info.css'
import { ItemInfoTab } from '../shared'
import { Parfume } from '@/types/cart'

interface ItemInfoProps {
	product: Parfume
	currentVolume: number
	changeVolume: (index: number) => void
}

export const ItemInfo = ({
	product,
	currentVolume,
	changeVolume,
}: ItemInfoProps) => {
	return (
		<div className='mt-4'>
			<p className='text-center title'>{product.name}</p>
			<div className='item-price'>
				<p>
					Объем:
					{product.volumes.map((volume, index) => (
						<span onClick={() => changeVolume(index)}>{volume.volume} ml</span>
					))}
				</p>
				<p>
					Цена <span>{product.volumes[currentVolume].price} Р</span>
				</p>
			</div>
			<ItemInfoTab />
		</div>
	)
}
