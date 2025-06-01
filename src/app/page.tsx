'use client'
import { FlowerLeft, FlowerRight } from '@/components/ui/svg/flower'
import { WhiteShadowEffect } from '@/components/ui/white-cirlce-effect'
import { SocialLinks } from '@/components/widgets/social-links'
import { Montserrat_Alternates } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const montserrat = Montserrat_Alternates({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700'],
})
export default function Home() {

	return (
		<div className='hero-section items-center justify-items-center min-h-screen p-4 gap-16 relative'>
			{/* Убрали z-20, чтобы не ограничивать дочерние элементы */}
			<h1 className='hero-title mt-[150px] z-10 relative'>DEJAVUE PARFUME</h1>
			<h1 className='hero-since mt-[20px] z-10 relative'>SICE | 2014</h1>
			<p
				className={`${montserrat.className} mt-[20px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#131313] to-[#FDB147] z-10 relative`}
			>
				оригинальные ароматы от ведущих брендов
			</p>

			<div className='hero-button mt-[60px] z-10 relative cursor-pointer'>
				<Link href={'/catalog'}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='126'
						height='38'
						viewBox='0 0 126 38'
						fill='none'
						textAnchor='middle'
					>
						<foreignObject x='-4' y='-4' width='134' height='46'>
							<p
								className={`${montserrat.className} flex items-center justify-center h-full text-black text-[14px] text-center uppercase font-[700] `}
							>
								каталог
							</p>
						</foreignObject>
						<path
							data-figma-bg-blur-radius='4'
							d='M10 0.5H116C121.247 0.5 125.5 4.7533 125.5 10V28C125.5 33.2467 121.247 37.5 116 37.5H10C4.7533 37.5 0.5 33.2467 0.5 28V10C0.5 4.7533 4.7533 0.5 10 0.5Z'
							fill='white'
							fillOpacity='0.4'
							stroke='url(#paint0_linear_42_40)'
						/>
						<defs>
							<clipPath
								id='bgblur_0_42_40_clip_path'
								transform='translate(4 4)'
							>
								<path d='M10 0.5H116C121.247 0.5 125.5 4.7533 125.5 10V28C125.5 33.2467 121.247 37.5 116 37.5H10C4.7533 37.5 0.5 33.2467 0.5 28V10C0.5 4.7533 4.7533 0.5 10 0.5Z' />
							</clipPath>
							<linearGradient
								id='paint0_linear_42_40'
								x1='0'
								y1='19'
								x2='126'
								y2='19'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#131313' />
								<stop offset='1' stopColor='#FDB147' />
							</linearGradient>
						</defs>
					</svg>
				</Link>
			</div>
			<SocialLinks />
			<FlowerLeft />
			<FlowerRight />
			<WhiteShadowEffect className='z-3' />
		</div>
	)
}
