import { ItemInfo } from '@/components/widgets/item-info'
import { ItemSwiper } from '@/components/widgets/item-swiper'

type ProductPageProps = {
	params: Promise<{ id: string }>
	searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ProductPage(props: ProductPageProps) {
	// await the params/searchParams before using
	const { id } = await props.params
	// if you need searchParams:
	// const sp = await props.searchParams
	
	return (
		<div className='p-4 mx-auto my-0 max-w-[1260px]'>
			<ItemSwiper /* product={...} */ />
			<ItemInfo /* product={...} */ />
			<div className='flex flex-col gap-6 mt-10'>
				<button className='px-[50px] py-[16px] bg-[#DFD5D5] text-black min-w-[280px] font-bold'>
					Оформить
				</button>
			</div>
		</div>
	)
}
