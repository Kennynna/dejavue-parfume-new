import { Parfume } from '@/types/cart'
import Link from 'next/link'

interface CatalogCardProps {
	item: Parfume
}
export const CatalogCard = ({ item }: CatalogCardProps) => {
	return (
		<Link href={`/catalog/${item.id}`}>
			<div className='border border-2-black border-opacity-50 rounded-[7px] p-2 bg-[#fff] catalog-card'>
				<img
					src={
						'https://res.cloudinary.com/dyt4v0agm/image/upload/v1748205783/nest-parfume/wslzgzus806ncwfc5ri4.webp'
					}
					height={100}
					width={130}
					className=' rounded-[7px] object-contain max-h-[120px] w-full'
				/>
				<div className='mt-2 space-y-1'>
					<p className='text-[12px] font-bold'>{item.volumes[0].price}</p>
					<h3 className='text-[12px]  font-semibold'>{item.name}</h3>
					{/* <p className='text-[12px] text-gray-600'>Артикул: {article}</p> */}
				</div>
			</div>
		</Link>
	)
}
