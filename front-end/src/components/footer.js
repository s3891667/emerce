"use client";
import Image from 'next/image'
import Link from 'next/link'
import logo from '../img/logo.png'
import user from '../img/user.png'
import cart from '../img/cart.png'
import facebook from '../img/facebook.png'
import linkedin from '../img/linkedin.png'
import instagram from '../img/instagram.png'


import {useEffect} from 'react';

export default function Footer() {
	return (
		<>
			<div className=' bg-white'>
				<footer className=' md:container md:mx-auto'>
					<div className=' h-60 grid justify-center'>
						<div className='grid grid-cols-4 md:gap-20 justify-center items-center '>
							<div className='flex flex-col'>
								<Link href='/'>MEAL PLANS</Link>
								<Link href='/'>FAQ</Link>
								<Link href='/'>SERVICE & DELIVERY</Link>
								<Link href='/'>WHOLESALE</Link>
								<Link href='/'>PRIVACY STATEMENT</Link>
								<Link href='/'>TERMS AND CONDITIONS</Link>
							</div>
							<div className='flex flex-col'>
								<Link href='/'>BLOG</Link>
								<Link href='/'>VIETNAM</Link>
								<Link href='/'>AUSTRALIA</Link>
								<Link href='/'>MALAYSIA</Link>
								<Link href='/'>UNITED STATES</Link>
								<Link href='/'>CANADA</Link>
							</div>
							<div className='flex flex-col'>
								<h1> CONTACT US</h1>
								<h2> Live Chat </h2>
								<p> 50 Barry st </p>
							</div>
							<div className='flex flex-col'>
								<div className='flex md:items-center md:space-x-3'>
									<Image className='md:w-11 h-auto' src={facebook} alt='facebook logo' />
									<Image className='md:w-10 h-auto' src={instagram} alt='instagram logo' />
									<Image className='md:w-10 h-auto' src={linkedin} alt='linkedin logo' />
								</div>
								<Link href='/'>BLOG</Link>
								<Link href='/'>VIETNAM</Link>
								<Link href='/'>AUSTRALIA</Link>
								<div className='flex md:mt-2 '>
									<form action="/" method="post">
										<div className=''>
											<input className='border-solid border-2 border-grey-600 md:h-8' type="text" placeholder="Leave your email here..." />
											<button className='md:h-8 md:w-16 md:bg-blue-500' type="submit">Send</button>
										</div>
									</form>

								</div>
							</div>
						</div>
					</div>

				</footer>
			</div >
		</>
	)
}
