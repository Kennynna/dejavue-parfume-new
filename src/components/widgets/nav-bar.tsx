import { NavDrawer } from '../shared/nav-drawer'
import { useScrollDirection } from '@/hooks/useScrollDirection'

export const Navbar = () => {
	const isVisible = useScrollDirection()

	return (
		<nav
			className={`fixed left-1/2 -translate-x-1/2 z-10 flex w-full max-w-[1280px] items-center justify-end px-4 py-4 bg-[#dfd5d5b2] backdrop-blur-md backdrop-saturate-150 transition-transform duration-300 ${
				isVisible ? 'translate-y-0' : '-translate-y-full'
			}`}
		>
			<NavDrawer />
		</nav>
	)
}
