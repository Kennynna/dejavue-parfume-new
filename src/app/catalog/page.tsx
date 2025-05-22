'use client'

import './catalog.css'
import { CategoryTab } from '@/components/widgets/category-tab'
import { TitleV1 } from '@/components/ui/title'
import { PaginationCatalog } from '@/components/widgets/pagination'
import { useTelegramUser } from '@/hooks/useTelegramUser'
const CatalogMainPage = () => {
	const telegramUser = useTelegramUser()
	return (
		<div className='p-4 relative bg-[#f2f2f2] grid grid-raw-[auto_1fr_auto] h-full'>
			<TitleV1 />
			<CategoryTab />
			<PaginationCatalog />
		</div>
	)
}

export default CatalogMainPage
