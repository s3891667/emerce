"use client";
import Nav from '../components/nav'
import Footer from '../components/footer'
import {useState, useEffect} from 'react';

export default function MainLayout({children}) {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [isVisible, setIsVisible] = useState(true);

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
			<div className=" bg-grey flex flex-col h-screen justify-between">

				<header className={`fixed top-0 left-0 w-full bg-white shadow-lg transition duration-300 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
					<Nav />
				</header>
				<main className=" flex min-h-screen flex-col items-center justify-between p-24">{children}</main>
				<Footer />
			</div>

		</>
	)
}
