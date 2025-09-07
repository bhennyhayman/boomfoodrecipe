import React from 'react'
import { Link } from 'react-router-dom'


const Foodcard = ({food}) => {

 
  return (
    <div className='w-vw mx-[15%] mb-5'>
       <div className="bg-gray-100 flex flex-col">
        <div className="p-2 text-[18px] text-center font-medium text-fuchsia-800">{food.strMeal}</div>
        <img className="h-70 w-70 p-1 mb-2 rounded-[10px] mx-auto" src={food.strMealThumb} alt="img"/>

        <div className='flex items-center gap-5 mx-auto max-sm:text-[15px]'>
           <div className=''> <span className='text-red-600'>Type: </span>{food.strArea}</div>
        <div><span className='text-red-600'>Category: </span> {food.strCategory}</div>
        <div className='text-blue-800 '><Link to={food.strSource}>Source</Link></div>
        </div>
        <div className='text-center'> <Link to={food.strYoutube}>Watch video</Link></div>
        <div className='my-2 px-2 text-center text-blue-900 font-bold cursor-pointer'><Link to={`/recipe?mealId=${food.idMeal}`}>Check out recipe and ingredients</Link></div>
      </div>

    </div>
  )
}

export default Foodcard