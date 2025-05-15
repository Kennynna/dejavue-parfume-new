'use client'
import { cn } from '@/lib/utils'
import '@/styles/item/item-swiper.css'
import { useState } from 'react'

const imgUrls = [
	'https://cdn2.randewoo.ru/img/67372/z_w/1',
	'https://i.ytimg.com/vi/r_La1m45e-M/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4Ac4FgALQBYoCDAgAEAEYYSBhKGEwDw==&amp;rs=AOn4CLB7g2wdx2X9y4lAaVfGicNgHR6c0A',
	'https://enigme.ru/images/catalog-texts/burberry-woman_4.jpg',
]
export const ItemSwiper = () => {
	const [active, setActive] = useState(imgUrls[0])
	return (
		<div className='item-swiper'>
			<div className='main-img flex w-full items-center justify-center'>
				<img src={active} alt='' />
			</div>

			<div className='grid mt-2'>
				{imgUrls.map((item, index) => (
					<img
						key={index}
						src={item}
						alt='Item 2'
						className={cn(active === item && 'active')}
						onClick={() => setActive(item)}
					/>
				))}
			</div>
		</div>
	)
}
