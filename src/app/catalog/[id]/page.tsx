import { ProductPageClient } from '@/components/widgets/product-page'
type ProductPageProps = {
	params: Promise<{ id: string }>
	searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ProductPage(props: ProductPageProps) {
	const { id } = await props.params

	return (
		<div className='p-4 mx-auto my-0 max-w-[1260px] pt-[70px]'>
			<ProductPageClient />
		</div>
	)
}
