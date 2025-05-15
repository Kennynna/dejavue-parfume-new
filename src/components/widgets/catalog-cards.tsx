'use client'
import { useProducts } from '@/lib/hooks/useProducts'
import { CatalogCard } from '../ui/catalog-card'
import { Item } from '@/dto/item'

interface CatalogCardsProps {
	categoryValue: string
}

const Fakecontent: Item[] = [
	{
		id: 'perfume1',
		name: 'Ocean Breeze',
		price: 120,
		description:
			'A fresh and invigorating scent with notes of sea salt and citrus, perfect for a day by the beach.',
		category: 'eau de toilette',
		image: 'ocean_breeze.jpg',
		forEvent: 'daytime',
		structure: {
			top: 'bergamot, lemon',
			mid: 'sea salt, lavender',
			base: 'cedarwood, amber',
		},
	},
	{
		id: 'perfume2',
		name: 'Midnight Elegance',
		price: 180,
		description:
			'A sophisticated blend of dark florals and spices, ideal for evening wear and formal occasions.',
		category: 'eau de parfum',
		image: 'midnight_elegance.jpg',
		forEvent: 'evening',
		structure: {
			top: 'black pepper, saffron',
			mid: 'rose, jasmine',
			base: 'oud, vanilla',
		},
	},
	{
		id: 'perfume3',
		name: 'Citrus Burst',
		price: 90,
		description:
			'A zesty and uplifting fragrance with bright citrus notes, perfect for a casual day out.',
		category: 'eau de cologne',
		image: 'citrus_burst.jpg',
		forEvent: 'daytime',
		structure: {
			top: 'grapefruit, orange',
			mid: 'green tea, mint',
			base: 'musk, vetiver',
		},
	},
	{
		id: 'perfume4',
		name: 'Floral Whisper',
		price: 150,
		description:
			'A delicate and romantic scent with soft floral notes, suitable for weddings and special occasions.',
		category: 'eau de parfum',
		image: 'floral_whisper.jpg',
		forEvent: 'formal',
		structure: {
			top: 'peony, lily',
			mid: 'rose, violet',
			base: 'sandalwood, musk',
		},
	},
	{
		id: 'perfume5',
		name: 'Spice Trail',
		price: 130,
		description:
			'A warm and exotic fragrance with spicy and woody undertones, great for adventurous evenings.',
		category: 'eau de toilette',
		image: 'spice_trail.jpg',
		forEvent: 'evening',
		structure: {
			top: 'cinnamon, clove',
			mid: 'cardamom, nutmeg',
			base: 'patchouli, amber',
		},
	},
	{
		id: 'perfume6',
		name: 'Fresh Linen',
		price: 75,
		description:
			'A clean and crisp scent reminiscent of freshly laundered clothes, perfect for everyday wear.',
		category: 'eau de cologne',
		image: 'fresh_linen.jpg',
		forEvent: 'daytime',
		structure: {
			top: 'cotton, aldehydes',
			mid: 'lavender, jasmine',
			base: 'musk, cedar',
		},
	},
	{
		id: 'perfume7',
		name: 'Woody Essence',
		price: 160,
		description:
			'A rich and earthy fragrance with deep woody notes, ideal for a sophisticated evening look.',
		category: 'eau de parfum',
		image: 'woody_essence.jpg',
		forEvent: 'evening',
		structure: {
			top: 'bergamot, pine',
			mid: 'cedar, sandalwood',
			base: 'vetiver, leather',
		},
	},
	{
		id: 'perfume8',
		name: 'Summer Breeze',
		price: 100,
		description:
			'A light and airy scent with hints of tropical fruits and flowers, perfect for warm weather.',
		category: 'eau de toilette',
		image: 'summer_breeze.jpg',
		forEvent: 'daytime',
		structure: {
			top: 'mango, coconut',
			mid: 'hibiscus, frangipani',
			base: 'vanilla, musk',
		},
	},
	{
		id: 'perfume9',
		name: 'Mystic Noir',
		price: 200,
		description:
			'A mysterious and alluring fragrance with dark and smoky notes, perfect for a night out.',
		category: 'eau de parfum',
		image: 'mystic_noir.jpg',
		forEvent: 'evening',
		structure: {
			top: 'blackcurrant, incense',
			mid: 'tobacco, leather',
			base: 'amber, patchouli',
		},
	},
	{
		id: 'perfume10',
		name: 'Citrus Spice',
		price: 110,
		description:
			'A vibrant and spicy scent with a citrus twist, suitable for both day and night.',
		category: 'eau de toilette',
		image: 'citrus_spice.jpg',
		forEvent: 'daytime',
		structure: {
			top: 'lemon, ginger',
			mid: 'coriander, basil',
			base: 'amber, musk',
		},
	},
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
			{Fakecontent && Fakecontent.map((item: Item) => <CatalogCard key={item.id} />)}
		</div>
	)
}
