import { ItemInfo } from "@/components/widgets/item-info"
import { ItemSwiper } from "@/components/widgets/item-swiper"

type ProductPageProps = {
	params: { id: string }
	searchParams?: { [key: string]: string | string[] | undefined }
}

// Серверный компонент — может быть async, если вы делаете fetch внутри
export default async function ProductPage({ params }: ProductPageProps) {
	const { id } = params

	return (
		<div className='p-4 mx-auto my-0 max-w-[1260px]'>
			<ItemSwiper /* product={product} */ />
			<ItemInfo /* product={product} */ />
			<div className='flex flex-col gap-6 mt-10'>
				<button className='px-[50px] py-[16px] bg-[#DFD5D5] text-black min-w-[280px] font-bold'>
					Оформить
				</button>
			</div>
		</div>
	)
}
