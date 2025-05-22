'use client'
import { NavBar } from '@/components/widgets/nav-bar'
import Script from 'next/script'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='relative'>
			<Script
				src='https://telegram.org/js/telegram-web-app.js?57'
				strategy='beforeInteractive'
			/>
			<NavBar />
			{children}
		</div>
	)
}
