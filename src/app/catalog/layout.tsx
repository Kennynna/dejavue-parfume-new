'use client'
import Script from 'next/script'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Script
				src='https://telegram.org/js/telegram-web-app.js?57'
				strategy='beforeInteractive'
			/>
			{children}
		</>
	)
}
