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
				<footer className='md:px-0 px-4'>
					<div className=' h-fit md:h-60 md:grid '>
						<div className=' md:flex md:flex-col md:grid  md:grid-cols-4 md:gap-10 md:justify-between items-center md:px-[20rem] '>
							<div className='flex flex-col'>
								<ul>
									<li>
										<Link href='/'>MEAL PLANS</Link>
									</li>
									<li>
										<Link href='/'>FAQ</Link>
									</li>
									<li>
										<Link href='/'>SERVICE & DELIVERY</Link>
									</li>

									<li>
										<Link href='/'>WHOLESALE</Link>

									</li>
									<li>
										<Link href='/'>PRIVACY STATEMENT</Link>

									</li>
									<li>

										<Link href='/'>TERMS AND CONDITIONS</Link>
									</li>
								</ul>
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
							<div className='flex md:flex-col justify-center'>

								<div className='flex md:items-center space-x-3 md:justify-end '>
									<Image className=' w-8 md:w-11 h-auto' src={facebook} alt='facebook logo' />
									<Image className='w-7 md:w-10 h-auto' src={instagram} alt='instagram logo' />
									<Image className='w-7 md:w-10 h-auto' src={linkedin} alt='linkedin logo' />
								</div>
								<div className='flex md:mt-2 '>
									<form action="/" method="post">
										<div className=''>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className='flex flex-col justify-center h-full md:px-[20rem]'>
							<div className='flex flex-grow justify-between items-center'>
								<div className=''>
									<span>© 2023 Emerce, Inc. All Rights Reserved</span>
								</div>
								<ul className='flex md:flex-row space-x-5'>
									<li>
										<button>
											Guides
										</button>
									</li>
									<li>
										<button>
											Terms of Sale
										</button>
									</li>
									<li>
										<button>
											Terms of Use
										</button>
									</li>
									<li>
										<button>
											Emerce Privacy Policy
										</button>
									</li>

								</ul>
							</div>
						</div>
					</div>


				</footer>
			</div >
		</>
	)
}
