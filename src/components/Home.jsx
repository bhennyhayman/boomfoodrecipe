import React, { useEffect } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import Foodcard from './Foodcard'
import Footer from './Footer'
import getUniqueRandomMeals from '../utils/fetchMeals'

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
    
    getUniqueRandomMeals(10, setDishes);
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