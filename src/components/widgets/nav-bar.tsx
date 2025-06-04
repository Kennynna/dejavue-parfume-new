import { NavDrawer } from '../shared/nav-drawer'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { Button } from '../ui/button'
import { ArrowLeftToLine } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
	const isVisible = useScrollDirection()
	const pathname = usePathname()
	const isOnCatalogPage = pathname.startsWith('/catalog/')
	return (
		<nav
			className={`fixed left-1/2 -translate-x-1/2 z-10 flex justify-between w-full max-w-[1280px] items-center  px-5 py-4 bg-[#dfd5d5b2] backdrop-blur-md backdrop-saturate-150 transition-transform duration-300 ${
				isVisible ? 'translate-y-0' : '-translate-y-full'
			}`}
		>
			{isOnCatalogPage && (
				<Link href='/catalog'>
					<Button
						variant='outline'
						size='lg'
						className='flex gap-2 items-center'
					>
						<ArrowLeftToLine />
						<p>Каталог</p>
					</Button>
				</Link>
			)}

			<NavDrawer />
		</nav>
	)
}
