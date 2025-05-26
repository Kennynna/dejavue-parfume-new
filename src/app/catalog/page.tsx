'use client'

import './catalog.css'
import { CategoryTab } from '@/components/widgets/category-tab'
import { TitleV1 } from '@/components/ui/title'
import { PaginationCatalog } from '@/components/widgets/pagination'
const CatalogMainPage = () => {
	return (
		<div className='p-4 relative bg-[#f2f2f2] grid grid-rows-[auto_1fr_auto]  max-w-[1280px] mx-auto my-0 min-h-screen'>
			<TitleV1 className='max-h-[50px] mt-14' />
			<CategoryTab className='flex flex-col justify-between h-full' />
			<PaginationCatalog />
		</div>
	)
}

export default CatalogMainPage
