import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-vw h-60 mt-10 bg-cyan-800 text-white'>
      <footer className='flex flex-col text-center'>
      <div className="mt-20">Copyright @2025</div> 
      <p>A food recipe website</p>
      <h4 className="">Ben - Boom projects</h4>
      <h5>Data provided by <Link to="https://www.themealdb.com/"></Link>TheMealDB</h5>
    </footer>
    </div>
  )
}

export default Footer