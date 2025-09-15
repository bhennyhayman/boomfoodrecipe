import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import React from "react";

export default function SearchPage() {

  const location = useLocation();
  const term = location.search.split("=")[1];

  const [results,setResults] = useState([]);

  useEffect(()=>{

    const cached = sessionStorage.getItem("results");
    if(cached){
      return setResults(JSON.parse(cached));
    }

    async function fetchSearchResults(){
      const meal = await axios.get(`${import.meta.env.VITE_MEAL_SEARCH}${term}`);
      const data = meal.data.meals;
      setResults(data);
      sessionStorage.setItem("results", JSON.stringify(data));
    }
    fetchSearchResults();
  },[])

  console.log(results)

  return (
    <div>
      <Navbar/>
      <div className="text-2xl text-center mt-3">Search Results for {term}</div>

      {results.length > 0 ? <div className="md:grid-cols-2 grid lg:grid-cols-3">
      {results.map((item)=> <React.Fragment key={item.idMeal}>
        <div className="mx-auto border-1 border-gray-200 p-1 m-1 rounded bg-gray-200 w-90 mb-5">
        <div className="text-[18px] text-center py-2 text-cyan-900 font-extrabold">{item.strMeal}</div>
        <div className="flex items-center justify-center"><img className="w-80" src={item.strMealThumb} alt="photo"/></div>
        <div className="flex justify-around text-red-600 font-bold">
          <div>{item.strArea}</div>
          <div>{item.strCategory}</div>
        </div>
        <div className="text-center my-2 font-bold italic text-blue-600"><Link to={`/recipe?mealId=${item.idMeal}`}>Check out Ingredients and recipe</Link></div>

        <div className="text-red-600 font-extrabold text-center"><Link to={item.strSource}>Source</Link></div>
        
        </div>
        </React.Fragment>)}
      </div>: "No results"}

      <div className=" text-[16px] px-3 my-2 py-1 rounded bg-black text-white w-fit mx-auto"><Link to={'/'}>Go back</Link> </div>
    </div>
  );
}