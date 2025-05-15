'use client'
import { useState } from 'react'

export const Description = ({text}: {text: string}) => {
	const [full, setFull] = useState(false)
	return (
		<div className='px-4'>
			<div className={`text-gray-700 ${!full ? 'line-clamp-12' : ''}`}>
				{text}
			</div>
			<button
				onClick={() => setFull(!full)}
				className='mt-2 text-blue-500 hover:underline focus:outline-none'
			>
				{full ? 'Скрыть' : 'Показать больше'}
			</button>
		</div>
	)
}
