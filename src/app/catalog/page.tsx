'use client'

import './catalog.css'
import { CategoryTab } from '@/components/widgets/category-tab'
import { TitleV1 } from '@/components/ui/title'
import { PaginationCatalog } from '@/components/widgets/pagination'
import { useEffect, useState } from 'react'
const CatalogMainPage = () => {
	const [telegramData, setTelegramData] = useState<TelegramWebAppUser | null>(
		null
	)
	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			window.Telegram?.WebApp?.initDataUnsafe?.user
		) {
			window.Telegram.WebApp.ready()
			setTelegramData(window.Telegram.WebApp.initDataUnsafe.user)
		}
	}, [])
	return (
		<div className='p-4 relative bg-[#f2f2f2]'>
			<TitleV1 />
			<CategoryTab />
			<PaginationCatalog />
			{telegramData && telegramData ? (
				<h1>{telegramData.id}</h1>
			) : (
				<h1>Пока никого</h1>
			)}
			<p>kakak</p>
		</div>
	)
}

export default CatalogMainPage
