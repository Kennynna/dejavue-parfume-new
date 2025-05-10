'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useState } from 'react'
import { CatalogCards } from './catalog-cards'

export const CategoryTab = () => {
	const [tabValue, setTabValue] = useState('every')

	return (
		<Tabs value={tabValue} onValueChange={setTabValue} className='w-full mt-5'>
			<TabsList className='bg-white'>
				<TabsTrigger className='tab-catalog' value='every'>
					Все
				</TabsTrigger>
				<TabsTrigger className='tab-catalog' value='woman'>
					Женские
				</TabsTrigger>
				<TabsTrigger className='tab-catalog' value='man'>
					Мужские
				</TabsTrigger>
			</TabsList>



      {/* Content */}
			<TabsContent value={tabValue} className='mt-5'>
				<CatalogCards categoryValue={tabValue} />
			</TabsContent>
		</Tabs>
	)
}
