import Image from 'next/image'
import Link from 'next/link'
import logo from '../img/logo.png'
import user from '../img/user.png'
import cart from '../img/cart.png'

export default function Nav() {
	return (
		<>
			<div className="md:container md:mx-auto md:justify-center">
				<nav className='static md:py-4 '>
					<div className='flex items-center'>
						<div className='flex-shrink-0'>
							<Image className='md:w-28 h-auto' src={logo} alt='Website logo' />
						</div>
						<div className='flex-grow '>
							<div className='flex md:justify-end md:pr-24'>
								<div className='space-x-5'>
									<Link href='/'>MEAL PLANS</Link>
									<Link href='/'>GUEST CHEF SERIES</Link>
									<Link href='/'>HOW IT WORKS</Link>
									<Link href='/'>DELIVERY</Link>
									<Link href='/'>ABOUT US</Link>
									<Link href='/'>SUPPORT</Link>
								</div>
								<div className='flex space-x-5 md:ml-20'>
									<Link href='/'>
										<Image className='w-auto h-6' src={user} alt='account icon' />
									</Link>
									<Link href='/'>
										<Image className='w-auto h-6' src={cart} alt='cart icon' />
									</Link>
								</div>
							</div>
						</div>
					</div>

				</nav>
			</div>
		</>
	)
}
