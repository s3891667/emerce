import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
import logo from '../img/logo.png'
import user from '../img/user.png'
import cart from '../img/cart.png'

import more from '../img/more.png'

export default function Nav() {
	function onToggleMenu(e) {
		const navLinks = document.querySelector('.nav-links') as HTMLElement;
		e.name = e.name === 'menu' ? 'close' : 'menu';
		navLinks.classList.toggle('top-[6%]');
	}
	return (
		<>
			<style jsx>{`
				@media only screen and (max-width: 768px) {
          				.nav-links {
            				z-index: -1; 
          				}
				}
			}
			`}</style>
			<div className="  h-[60px] md:h-[80px] sm:h-[50]  container mx-auto justify-center md:container md:mx-auto md:justify-center bg-white">
				<nav className="h-[60px] md:h-[80px]  flex justify-between items-center w-[92%]  mx-auto">
					<div>
						<Image className=' w-20 md:w-28 sm:w-28 h-auto' src={logo} alt='Website logo' />
					</div>
					<div
						className="overflow-y-auto nav-links pl-6 sm:pl-20 md:pl-28 my-14 duration-500 md:static absolute bg-white md:min-h-fit min-h-[40vh] left-0 top-[-1000%] md:w-auto  w-full flex items-center px-5">
						<ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
							<li>
								<a className="hover:text-gray-500" href="#">Products</a>
							</li>
							<li>
								<a className="hover:text-gray-500" href="#">Solution</a>
							</li>
							<li>
								<a className="hover:text-gray-500" href="#">Resource</a>
							</li>
							<li>
								<a className="hover:text-gray-500" href="#">Developers</a>
							</li>
							<li>
								<a className="hover:text-gray-500" href="#">Pricing</a>
							</li>
						</ul>
					</div>
					<div className="flex items-center gap-6">
						<Link href='/'>
							<Image className='w-auto h-6 hover:mt-gray-500' src={user} alt='account icon' />
						</Link>
						<Link href='/'>
							<Image className='w-auto h-6 hover:mt-gray-500' src={cart} alt='cart icon' />
						</Link>
						<button className='md:hidden' name="menu" onClick={onToggleMenu}>

							<Image className='w-auto h-6' src={more} alt='more  icon' />

						</button>
					</div>

				</nav>
			</div>
		</>
	)
}
