'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useState } from 'react'
import { CatalogCards } from './catalog-cards'
import { cn } from '@/lib/utils'

export const CategoryTab = ({ className }: { className?: string }) => {
	const [tabValue, setTabValue] = useState('every')

	return (
		<Tabs value={tabValue} onValueChange={setTabValue} className={cn('w-full mt-5 ', className)}>
			<TabsList className='bg-white'>
				<TabsTrigger className='tab-catalog' value='every'>
					Все
				</TabsTrigger>
				<TabsTrigger className='tab-catalog ' value='woman'>
					Женские
				</TabsTrigger>
				<TabsTrigger className='tab-catalog' value='man'>
					Мужские
				</TabsTrigger>
			</TabsList>



      {/* Content */}
			<TabsContent value={tabValue} className='mt-5 content-center'>
				<CatalogCards categoryValue={tabValue} />
			</TabsContent>
		</Tabs>
	)
}
