import { NavDrawer } from '../nav-drawer'

export const NavBar = () => {
	return (
		<nav className='fixed bottom-[30px]  right-0  z-1 flex w-full items-center justify-end  px-4 py-4'>
			<NavDrawer />
		</nav>
	)
}
