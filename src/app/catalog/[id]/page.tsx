import { ProductPageClient } from '@/components/widgets/product-page'
import { catalogApi } from '@/lib/api'
import { Parfume } from '@/types/cart'
import { notFound } from 'next/navigation'

type ProductPageProps = {
	params: Promise<{ id: string }>
	searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ProductPage(props: ProductPageProps) {
	const { id } = await props.params

	// Валидация ID
	const productId = Number(id)
	if (isNaN(productId) || productId <= 0) {
		notFound()
	}

	let product: Parfume

	try {
		product = await catalogApi.getItemById(productId)
	} catch (error) {
		console.error('Ошибка загрузки продукта:', error)
		notFound()
	}

	return (
		<div className='p-4 mx-auto my-0 max-w-[1260px] pt-[70px]'>
			<ProductPageClient product={product} />
		</div>
	)
}

// Генерация метаданных для SEO
export async function generateMetadata(props: ProductPageProps) {
	const { id } = await props.params
	const productId = Number(id)

	if (isNaN(productId)) {
		return {
			title: 'Продукт не найден',
		}
	}

	try {
		const product = await catalogApi.getItemById(productId)
		return {
			title: `${product.name} - ${product.brand}`,
			description: `${product.name} от ${product.brand}. Цена: ${product.volumes[0].price} руб.`,
			openGraph: {
				title: product.name,
				description: `${product.brand} - ${product.volumes[0].price} руб.`,
				images: [product.imgUrl],
			},
		}
	} catch {
		return {
			title: 'Продукт не найден',
		}
	}
}
