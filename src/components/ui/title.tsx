'use client'
import { cn } from '@/lib/utils'

export const TitleV1 = ({ className }: { className?: string }) => {
	return (
		<h1 className={cn('catalog-text text-3xl text-center', className)}>
			Каталог
		</h1>
	)
}
