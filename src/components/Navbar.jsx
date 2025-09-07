import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <>
       <nav className='v-vw bg-cyan-800 h-20 flex justify-between items-center text-white md:justify-center'>
          <div className=" flex items-center gap-2 ml-5 md:mr-50">
            <img className="h-10 bg-amber-50 rounded-full" src="imgs/dish.png" alt="Logo"/>
            <h3 className='text-[18px] font-extrabold'><NavLink to={'/'}>Food Recipe</NavLink></h3>
          </div>
        
        <div className="mx-10">
          <NavLink to={'/about'}>About</NavLink>
          </div>
     </nav>

    </>
  )
}

export default Navbar