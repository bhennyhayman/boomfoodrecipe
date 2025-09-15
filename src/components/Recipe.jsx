import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useLocation,Link } from 'react-router-dom'
import getIngredientsWithMeasures from '../utils/ingredients'
import Footer from './Footer'
import axios from 'axios'

const Recipe = () => {

  const location = useLocation();
  const mealId = location.search.slice(1).split("=")[1];
  const [mealDetails,setMealDetails] = useState(null);

  useEffect(()=>{

    const cached = sessionStorage.getItem("meal");
    if(cached) return setMealDetails(JSON.parse(cached));

    async function getFoodDetails(){
      const meal = await axios.get(`${import.meta.env.VITE_MEAL_ID}${mealId}`)
      const data = meal.data.meals;
      sessionStorage.setItem("meal",JSON.stringify(data));
      setMealDetails(data);
    }
    getFoodDetails();

  },[]);

  return (
    <div>
      <Navbar/>

       {mealDetails && <div key={mealDetails[0].idMeal}>
        <div className='flex items-center justify-center'>
           <div className='text-2xl text-center text-cyan-900'>{mealDetails[0].strMeal}</div>
        <div className='text-[16px] m-2 mx-10 bg-amber-500 w-fit text-white px-2 py-1'>{mealDetails[0].strCategory}</div>
        </div>
       
        <div className='w-90 h-90 mx-auto bg-gray-100
        '><img className='mx-auto w-80 py-5 rounded hover:scale-[110%_110%] transition-all' src={mealDetails[0].strMealThumb}/></div>

        <h3 className='text-2xl text-center bg-cyan-800 text-white p-2'>Ingredients</h3>
        <ul className='flex flex-col mb-5 justify-center max-sm:mx-[20%] mx-[40%] p-2'>
          {getIngredientsWithMeasures(mealDetails[0]).map((item, idx) => (
            <li className='flex' key={idx}>
              <div className={`${idx % 2 === 0 ? "bg-gray-100 w-90 m-1 p-1 ": ""} px-5`}>{item}</div>
            </li>
          ))}
      </ul>
        <h3 className='text-2xl text-center bg-cyan-800 text-white p-2'>Instructions</h3>
      <div className='mx-[8%] leading-10 my-3 shadow-[1px_1px_15px_gray] border-1 border-gray-200 px-5'>{mealDetails[0].strInstructions}</div>
      </div>}

      <div className='bg-blue-500 w-fit mx-auto px-3 py-1.5 text-white'> 
        <Link to={'/'} onClick={()=>{
          sessionStorage.removeItem("meal");
        }}>Home</Link></div>

      <Footer />
      
    </div>
  )
}

export default Recipe