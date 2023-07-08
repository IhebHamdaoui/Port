import React from 'react'

const page = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex md:w-[80%] w-[90%] flex-col px-5 md:py-24 py-10 justify-center items-center">
    
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">CitéQuiz</h1>
      <p className="mb-8 leading-relaxed">CiteQuiz est une plateforme de quiz en ligne qui permet aux étudiants de réviser pour leurs examens. Les professeurs peuvent créer des questions pour les étudiants à répondre. CiteQuiz comprend un système dauthentification pour permettre aux utilisateurs de se connecter. Les étudiants peuvent suivre leurs statistiques et leurs notes sur le site. Les professeurs peuvent également accéder aux statistiques et aux notes des étudiants pour évaluer leur performance.</p>
      
      
      <div className="flex">
        
      </div>
    </div>
    <div className='flex flex-col items-center justify-center text-center'>

    <img className=" w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/image1.jpg" />
    <img className=" w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/image2.jpg" />
    <img className=" w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/image3.jpg" />
    </div>
  </div>
</section>

  )
}

export default page