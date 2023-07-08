import React from 'react'

const page = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex md:w-[80%] w-[90%] flex-col px-5 md:py-24 py-10  justify-center items-center">
    
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">GAP-Parking </h1>
      <p className="mb-8 leading-relaxed">L'application comporte plusieurs sections : détails, réserver, voir les réservations, besoin de conducteur, retours et une section date. Une base de données pour pouvoir stocker les informations saisies par les utilisateurs. Un système dauthentification pour se connecter.</p>
      
      
      <div className="flex">
        
      </div>
    </div>
    <div className='flex flex-col items-center justify-center text-center'>

    <img className="md:w-2/6 w-3/4 mb-10 object-cover object-center rounded" alt="hero" src="/p1.jpg" />
    <p className="mb-8 leading-relaxed">________________________________________________________________________</p>
    <img className=" md:w-2/6 w-3/4 mb-10 object-cover object-center rounded" alt="hero" src="/p2.jpg" />
    <p className="mb-8 leading-relaxed">________________________________________________________________________</p>
    <img className="md:w-2/6 w-3/4 mb-10 object-cover object-center rounded" alt="hero" src="/p3.jpg" />
    </div>
  </div>
</section>

  )
}

export default page