"use client";
import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../img/logo.png'
import user from '../img/user.png'
import cart from '../img/cart.png'
import facebook from '../img/facebook.png'
import linkedin from '../img/linkedin.png'
import instagram from '../img/instagram.png'
import plus from '../img/plus-sign.png'


import {useEffect} from 'react';

export default function Footer() {
	const [isRegionVisible, setIsRegionVisible] = useState(false);
	const [isContactVisible, setIsContactVisible] = useState(false);

	function onToggleFooter(e) {
		const targetName = e.currentTarget.name;

		if (targetName === 'regionButton') {
			setIsRegionVisible(!isRegionVisible);
		} else if (targetName === 'contactButton') {
			setIsContactVisible(!isContactVisible);
		}
	}

	return (
		<>
			<style jsx>  {`
			 .mobi {
			    display: none;
			  }

			  @media only screen and (max-width: 768px) {
			    .mobi {
			      display: block;
			    }

			  }
			  @media only screen and (max-width: 1199px) {
			    .mobi {
			      display: block;
			    }

			  }

		`}
			</style>
			<div className=' bg-white'>
				<footer className='lg:px-0  lg:py-0 py-4 px-4 '>
					<div className=' h-fit lg:h-60 lg:grid '>
						<div className=' lg:flex lg:flex-col lg:grid bg-white lg:grid-cols-4 lg:gap-10 lg:justify-between items-center lg:px-[20rem] '>
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
								</ul>
							</div>
							<div className='mobi my-2 lg:my-0'><hr></hr></div>
							<div className='flex  flex-row lg:hidden '>
								<label className='font-medium'> More Region Information </label>
								<div className='flex-grow flex justify-end'>
									<button name="regionButton" onClick={onToggleFooter}>
										<Image className=' w-4 h-auto' src={plus} alt='plus icon' />
									</button>
								</div>
							</div>
							<div className={`region flex flex flex-col transition-all duration-300 mt-2 lg:h-auto lg:max-h-full ${isRegionVisible ? 'overflow-y-auto max-h-[8rem]' : 'max-h-0 overflow-hidden'}`}>

								<Link href='/'>Vietnam</Link>
								<Link href='/'>Australia</Link>
								<Link href='/'>Malaysia</Link>
								<Link href='/'>United States</Link>
								<Link href='/'>Canada</Link>

								<div className='mobi my-2 lg:my-0'><hr></hr></div>
							</div>
							<div className=' contact flex  flex-row lg:hidden lg:mt-0 mt-6 '>
								<label className='font-medium'> More Contact Information </label>
								<div className='flex-grow flex justify-end'>
									<button name="contactButton" onClick={onToggleFooter} >
										<Image className=' w-4 h-auto' src={plus} alt='plus icon' />
									</button>
								</div>
							</div>
							<div className={`contact flex flex-col transition-all duration-300 lg:mb-0 mb-6 mt-2 lg:h-auto ${isContactVisible ? 'overflow-y-auto h-20' : 'h-0 overflow-hidden '}`}>
								<h1> CONTACT US</h1>
								<h2> Live Chat </h2>
								<p> 50 Barry st </p>
								<div className='mobi my-2 lg:my-0'><hr></hr></div>
							</div>
							<div className='flex lg:flex-col lg:justify-center justify-start lg:my-0 my-2'>
								<div className='flex lg:items-center space-x-3 lg:justify-end '>
									<Image className=' w-8 lg:w-10 h-auto' src={facebook} alt='facebook logo' />
									<Image className='w-8  lg:w-10 h-auto' src={instagram} alt='instagram logo' />
									<Image className='w-8 lg:w-10 h-auto' src={linkedin} alt='linkedin logo' />
								</div>
								<div className='flex lg:mt-2 '>
									<form action="/" method="post">
										<div className=''>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className=' lg:mt-0 mt-6 flex lg:flex-col  bg-white justify-start flex-row lg:justify-center h-full lg:px-[20rem]'>
							<div className='lg:flex  flex-grow  justify-between items-center'>
								<div>
									<span>© 2023 Emerce, Inc. All Rights Reserved</span>
								</div >
								<div className='lg:mt-0 mt-3'>
									<ul className='lg:flex lg:flex-row  lg:space-x-5 lg:space-y-0 space-y-3'>
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
					</div>


				</footer>
			</div >
		</>
	)
}
