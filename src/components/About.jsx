import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div>
      <Navbar />
    <div className="min-h-screen w-vw border-1 mx-8 my-5 border-gray-200 rounded shadow-[1px_1px_8px_#C9B8B7]">
    <h2 className="text-2xl text-center m-5 animate-bounce">About Boom Food Recipe</h2>
    <p class="mx-[8%] leading-10">
      Boom Food Recipe is your go-to destination for discovering delicious recipes from around the world. Whether you're a beginner or a seasoned chef, our platform offers a wide variety of meals, from quick breakfasts to hearty dinners.
    </p>
    <ul className="mx-[8%] leading-8">
      <li className='bg-gray-100 italic px-2 my-2'>Browse and search for recipes by category or ingredient.</li>
      <li className='bg-gray-100 my-2 italic  px-2'>View detailed instructions and ingredient lists for each meal.</li>
      <li className='bg-gray-100 my-2 italic  px-2'>Get inspired by cuisines from different countries and cultures.</li>
      <li className='bg-gray-100 my-2 italic px-2'>Contact us for suggestions, feedback, or to share your own recipes!</li>
    </ul>
    <h3 className="mx-[8%] mt-10 mb-5 text-center bg-cyan-700 px-2 py-2 text-white">
      Our mission is to make cooking fun, easy, and accessible for everyone. Happy cooking!
    </h3>
  </div>
  <Footer/>
  </div>
  )
}

export default About