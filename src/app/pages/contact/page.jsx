import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'


const Contact = () => {
  return (
   <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-4xl text-2xl font-bold title-font mb-4 text-gray-900">Formulaire de contact</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">N'hésitez pas à me contacter .</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nom complet</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Courriel</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Laissez moi un message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Envoyer</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500">ihebklai007@gmail.com</a>
          <p className="leading-normal my-5">55 Bédard St.
            <br />Gatineau, QC J8Y 6A2
          </p>
          <span className="inline-flex">
          <a className="ml-4 text-gray-500" href='https://www.facebook.com/Iheb.klai07/' target="_blank">
            <FaFacebookF/>
            </a>
            <a className="ml-4 text-gray-500" href='https://github.com/IhebHamdaoui' target="_blank">
            <FaGithub/>
            </a>
            <a className="ml-4 text-gray-500" href='https://www.instagram.com/ihebkl.exe/' target="_blank">
            <FaInstagramSquare/>
            </a>
            <a className="ml-4 text-gray-500" href='https://www.linkedin.com/in/iheb-hamdaoui-56120522a/' target="_blank">
            <FaLinkedin/>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact
