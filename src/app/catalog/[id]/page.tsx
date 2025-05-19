import { ItemInfo } from '@/components/widgets/item-info'
import { ItemSwiper } from '@/components/widgets/item-swiper'

import { NextPage } from 'next'

type ProductPageProps = {
	params: { id: string }
	searchParams?: { [key: string]: string | string[] | undefined }
}

const ProductPage: NextPage<ProductPageProps> = ({ params }) => {
	const { id } = params
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

export default ProductPage
