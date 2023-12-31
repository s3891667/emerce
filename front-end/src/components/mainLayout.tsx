"use client";
import Nav from '../components/nav'
import Footer from '../components/footer'
import {useState, useEffect, useInsertionEffect} from 'react';
import axios from 'axios';
import {SessionProvider, useSession} from 'next-auth/react';

export default function MainLayout({children}) {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [isVisible, setIsVisible] = useState(true);

	const session_api = 'http://localhost:5000/api/users/session';


	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;

			if (prevScrollPos > currentScrollPos) {
				setIsVisible(true);
			} else {

				setIsVisible(false);
			}

			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos]);
	return (
		<>
			<div className=" bg-white/30  flex flex-col h-screen justify-between font-sans ">
				<header className={`z-20 fixed top-0 left-0 w-full bg-white shadow-lg transition duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>

					<Nav />
				</header>
				<div className='blurring '>
					<main className="flex min-h-screen flex-col items-center justify-between p-24">{children}</main>
				</div>

				<div className=''>


					<Footer />
				</div>
			</div>

		</>
	)
}
