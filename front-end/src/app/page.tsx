import Image from 'next/image'
import Nav from '../components/nav.js'
//import Footer from '../components/footer.js'

export default function Home() {
  return (
	<>
	<header>
		<Nav/>
	</header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  )
}
