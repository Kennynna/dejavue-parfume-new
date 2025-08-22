'use client'
import { useProducts } from '@/hooks/api-hooks/useProducts'
import { CatalogCard } from '../ui/catalog-card'
import {  Parfume } from '@/types/cart'

interface CatalogCardsProps {
	categoryValue: string
}

export const CatalogCards = ({ categoryValue }: CatalogCardsProps) => {
	const { data: products, isLoading, error } = useProducts()
	console.log(products)
	// const filteredContent =
	// 	categoryValue === 'every'
	// 		? content
	// 		: content.filter(item => item.category === categoryValue)

	return (
		<div className='w-full flex flex-wrap gap-1 gap-y-4 items-center justify-between  h-full'>
			{products?.map((item: Parfume) => (
				<CatalogCard key={item.id} item={item} />
			)) || <p>Товара нет</p>}
		</div>
	)
}
