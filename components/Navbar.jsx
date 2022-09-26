import { useState } from "react"
import Link from "next/link";
const Navbar = () => {
  //const myName = "Bonface Thuranira";
  const navData = {
    name: "BONFACE THURANIRA",
    intro: "Online Writer",
    home: "Home",
    why: "Why Me?",
    services: "Services",
    samples: "Writing Samples",
    testimonials: "Testimonials",
    contact: "Contact Me"
  }
    const [navbar, setNavbar] = useState(false);
    return (
        <>
           <nav className="w-full bg-gray-700 shadow fixed-top">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="https://flowbite.com/" class="flex items-center space-x-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
</svg>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white font-serif display-4">{navData.name }
        <p class="text-sm text-center italic">{navData.intro}</p></span>
    </a>
            
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                                  </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href="/">
                    <a>{navData.home}</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/why">
                    <a>{navData.why}</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/blogs">
                    <a>{navData.services}</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/blogs">
                    <a>{navData.samples}</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/blogs">
                    <a>{navData.testimonials}</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/about">
                  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{navData.contact}</button>
                  </Link>
                  </li>
          
              </ul>
            </div>
          </div>
        </div>
      </nav>
        </>
    )
}
export default Navbar;