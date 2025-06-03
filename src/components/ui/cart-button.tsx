'use client'

import { Button } from '@/components/ui/button'
import { Loader2, ShoppingCart, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface CartButtonVariantsProps {
	isLoading?: boolean
	disabled?: boolean
	onClick?: () => void
	className?: string
	variant?: 'default' | 'success' | 'outline'
}

export function CartButtonVariants({
	isLoading = false,
	disabled = false,
	onClick,
	className,
	variant = 'default',
}: CartButtonVariantsProps) {
	const [isAdded, setIsAdded] = useState(false)

	const handleClick = async () => {
		if (onClick) {
			onClick()
			setIsAdded(true)
			setTimeout(() => setIsAdded(false), 2000) // Сброс через 2 секунды
		}
	}

	const baseClasses = cn(
		'px-[50px] py-[16px] w-full font-bold',
		'transition-all duration-300 ease-in-out',
		'hover:shadow-lg hover:scale-105 active:scale-95',
		'disabled:opacity-50 disabled:cursor-not-allowed',
		'disabled:hover:scale-100 disabled:hover:shadow-none',
		className
	)

	// Default variant
	return (
		<Button
			onClick={handleClick}
			disabled={disabled || isLoading}
			className={cn(
				baseClasses,
				'bg-[#DFD5D5] text-black border-0',
				'hover:bg-[#C8BABA]'
			)}
		>
			{isLoading ? (
				<div className='flex items-center gap-2'>
					<Loader2 className='h-4 w-4 animate-spin' />
					<span>Добавление...</span>
				</div>
			) : isAdded ? (
				<div className='flex items-center gap-2 text-green-600'>
					<Check className='h-4 w-4' />
					<span>Добавлено!</span>
				</div>
			) : (
				<div className='flex items-center gap-2'>
					<ShoppingCart className='h-4 w-4' />
					<span>Добавить в корзину</span>
				</div>
			)}
		</Button>
	)
}
