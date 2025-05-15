import '@/styles/item/item-info.css'
import { ItemInfoTab } from '../item-info-tab'

export const ItemInfo = () => {
	return (
		<div className='mt-4'>
			<p className='text-center title'>Armaf</p>
			<div className='item-price'>
				<p>
					Объем <span>50 ml</span> <span>100 ml</span>
				</p>
				<p>
					Цена <span>1200 Р</span>
				</p>
			</div>
			<ItemInfoTab />
		</div>
	)
}
