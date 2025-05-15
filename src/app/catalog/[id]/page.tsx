import { ItemInfo } from '@/components/widgets/item-info'
import { ItemSwiper } from '@/components/widgets/item-swiper'


type ProductPageProps = {
	params: { id: string }
	searchParams?: { [key: string]: string | string[] | undefined }
}

export default function ProductPage({ params }: ProductPageProps) {
	const { id } = params as { id: string }
	return (
		<div className='p-4 mx-auto my-0 w-max-[1260px]'>
			<ItemSwiper />
			<ItemInfo />

			<div className='flex flex-col gap-6 mt-10'>
				<button className='px-[50px] py-[16px] bg-[#DFD5D5] text-black min-w-[280px] font-bold'>
					Оформить
				</button>
			</div>
		</div>
	)
}
