import { ItemInfo } from '@/components/widgets/item-info'
import { ItemSwiper } from '@/components/widgets/item-swiper'

export default function ProductPage({ params }: { params: { id: string } }) {
	const { id } = params
	return (
		<div className='p-4 mx-auto my-0 w-max-[1260px]'>
			<ItemSwiper />
			<ItemInfo />

			<div className='flex flex-col gap-6 mt-10'>
				<button className='px-[50px] py-[16px] bg-[#DFD5D5] text-black min-w-[280px] font-bold'>
					Оформить как подарок
				</button>
				<button className='px-[50px] py-[16px] bg-[#DFD5D5] text-black min-w-[280px] font-bold'>
					Оформить для себя
				</button>
			</div>
		</div>
	)
}
