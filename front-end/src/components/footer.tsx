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
		console.log(targetName)

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
			    .scroll {
				  overflow-y: scroll; /* Enable vertical scrolling */
				  max-height: 9rem; /* Set a maximum height for the scrollable area */
					
				}

			  }

		`}
			</style>
			<div className=' bg-white'>
				<footer className='md:px-0 md:py-0 py-4 px-4 '>
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
							<div className='mobi my-2 md:my-0'><hr></hr></div>
							<div className='flex  flex-row md:hidden '>
								<label> More Region Information </label>
								<div className='flex-grow flex justify-end'>
									<button name="regionButton" onClick={onToggleFooter}>
										<Image className=' w-4 h-auto' src={plus} alt='plus icon' />
									</button>
								</div>
							</div>
							<div className={`region flex flex flex-col transition-all duration-300 mt-2 md:h-auto ${isRegionVisible ? 'overflow-y-auto h-36' : 'h-0 overflow-hidden'}`}>

								<Link href='/'>BLOG</Link>
								<Link href='/'>VIETNAM</Link>
								<Link href='/'>AUSTRALIA</Link>
								<Link href='/'>MALAYSIA</Link>
								<Link href='/'>UNITED STATES</Link>
								<Link href='/'>CANADA</Link>

								<div className='mobi my-2 md:my-0'><hr></hr></div>
							</div>
							<div className=' contact flex  flex-row md:hidden md:mt-0 mt-6 '>
								<label> More Contact Information </label>
								<div className='flex-grow flex justify-end'>
									<button name="contactButton" onClick={onToggleFooter} >
										<Image className=' w-4 h-auto' src={plus} alt='plus icon' />
									</button>
								</div>
							</div>
							<div className={`contact flex flex-col transition-all duration-300 md:mb-0 mb-6 mt-2 md:h-auto ${isContactVisible ? 'overflow-y-auto h-20' : 'h-0 overflow-hidden '}`}>
								<h1> CONTACT US</h1>
								<h2> Live Chat </h2>
								<p> 50 Barry st </p>
								<div className='mobi my-2 md:my-0'><hr></hr></div>
							</div>
							<div className='flex md:flex-col md:justify-center justify-start md:my-0 my-2'>
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
						<div className=' md:mt-0 mt-6 flex md:flex-col  justify-start flex-row md:justify-center h-full md:px-[20rem]'>
							<div className='md:flex  flex-grow  justify-between items-center'>
								<div>
									<span>© 2023 Emerce, Inc. All Rights Reserved</span>
								</div >
								<div className='md:mt-0 mt-3'>
									<ul className='md:flex md:flex-row  md:space-x-5 md:space-y-0 space-y-3'>
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
