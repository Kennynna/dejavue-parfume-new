'use client'
import { Navbar } from '@/components/widgets/nav-bar'
import Script from 'next/script'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='relative max-w-[1280px] mx-auto'>
			<Script
				src='https://telegram.org/js/telegram-web-app.js?57'
				strategy='beforeInteractive'
			/>
			<Navbar />
			{children}
		</div>
	)
}
