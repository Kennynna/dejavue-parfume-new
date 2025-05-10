

import './catalog.css'
import { CategoryTab } from '@/components/widgets/category-tab'
import { TitleV1 } from '@/components/ui/title'
import { PaginationCatalog } from '@/components/widgets/pagination'
const CatalogMainPage = () => {
	return (
			<div className='p-4 relative bg-[#f2f2f2]'>
				<TitleV1 />
				<CategoryTab />
				<PaginationCatalog />
			</div>
	)
}

export default CatalogMainPage
