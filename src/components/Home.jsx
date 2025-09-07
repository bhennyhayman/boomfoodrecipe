import React, { useEffect } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import axios from "axios"
import Foodcard from './Foodcard'
import Footer from './Footer'

const Home = ({dishes,setDishes}) => {
  // const [error,setError] = useState("");

  useEffect(()=>{
    const cached = sessionStorage.getItem("dishes");
    if (cached) {
      try {
        setDishes(JSON.parse(cached));
        return;
      } catch (e) {
        console.log(e);
        sessionStorage.removeItem("dishes");
      }
    }

     const getRandomMeals = async () => {
      try {
        // 10 parallel requests
        const requests = Array.from({ length: 10 }, () =>
          axios.get(import.meta.env.VITE_MEALS_API)
        );
        const responses = await Promise.all(requests);
    
        const data = responses.map(res => res.data?.meals?.[0] ?? res.data);
        setDishes(data);
        sessionStorage.setItem("dishes", JSON.stringify(data));
      } catch (err) {
        console.error("Error fetching meals:", err);
      }
    };

    getRandomMeals();
  },[])

  return (
    <div>
      <Navbar />
      <SearchBar />
       <h3 className='text-center m-5 text-2xl'>Popular Menu and their Recipe</h3>

       {/* {error && <div>{error}</div>} */}

       {dishes.length > 0 && <>
        {dishes.map((food) => <React.Fragment key={food.idMeal}>
        <Foodcard food={food}/>
        </React.Fragment>)}
       </>}

       <Footer />

    </div>
  )
}

export default Home