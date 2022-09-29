import Link from "next/link";
const Footer = () => {
	const data = {
		home: "/",
		why: "/why",
		services: "/services",
		samples: "/samples",
		testimonials: "/testimonials"
	}
    return (
        <>
   <footer className="px-4 py-8 dark:bg-gray-800 bg-gray-700 dark:text-gray-400 text-white">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
			
			</div>
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<Link href={data.home}>Home</Link>
				</li>
                <li>
				<Link href={data.why}>Why me?</Link>
				</li>
                <li>
				<Link href={data.services}>Services</Link>
				</li>
				<li>
				<Link href={data.samples}>Writing samples</Link>
				</li>
				<li>
				<Link href={data.testimonials}>Testimonials</Link>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a rel="noopener noreferrer" href="#">Instagram</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Facebook</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Twitter</a>
			</li>
		</ul>
	</div>
</footer>
        </>
    )
}
export default Footer;