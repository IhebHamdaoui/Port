import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container w-[80%] mx-auto flex flex-wrap p-5 py-8 flex-col md:flex-row items-center">
    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl text-bold"></span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href='/' className="mr-5 hover:text-gray-900">Accueil</Link>
      <Link href='/pages/project1' className="mr-5 hover:text-gray-900">Projet 1</Link>
      <Link href='/pages/project2' className="mr-5 hover:text-gray-900">Projet 2</Link>
    </nav>
    <Link href="/pages/contact" className="flex md:my-0 my-4 items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contactez moi
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
</header>

  )
}

export default Navbar