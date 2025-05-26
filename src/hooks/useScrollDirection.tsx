import { useEffect, useState } from 'react'

export function useScrollDirection({ threshold = 50, mobileOnly = true } = {}) {
	const [isVisible, setIsVisible] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			const isMobile = window.innerWidth <= 768

			if (!mobileOnly || isMobile) {
				if (currentScrollY > lastScrollY && currentScrollY > threshold) {
					setIsVisible(false) // Скролл вниз
				} else {
					setIsVisible(true) // Скролл вверх
				}
			} else {
				setIsVisible(true) // Десктоп — всегда видно
			}

			setLastScrollY(currentScrollY)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [lastScrollY, threshold, mobileOnly])

	return isVisible
}
