'use client'
import { useProducts } from '@/lib/hooks/useProducts'
import { CatalogCard } from '../ui/catalog-card'

interface CatalogCardsProps {
	categoryValue: string
}

const Fakecontent = [
	{ id: 1, name: 'Item 1', category: 'man' },
	{ id: 2, name: 'Item 2', category: 'woman' },
	{ id: 3, name: 'Item 3', category: 'man' },
	{ id: 4, name: 'Item 1', category: 'man' },
	{ id: 5, name: 'Item 2', category: 'woman' },
	{ id: 7, name: 'Item 3', category: 'man' },
]


export const CatalogCards = ({ categoryValue }: CatalogCardsProps) => {
	const { data: products, isLoading, error } = useProducts()
	console.log(products)
	// const filteredContent =
	// 	categoryValue === 'every'
	// 		? content
	// 		: content.filter(item => item.category === categoryValue)

	return (
		<div className='w-full flex flex-wrap gap-1 justify-between'>
			{products && products.map(item => <CatalogCard key={item.id} />)}
		</div>
	)
}
