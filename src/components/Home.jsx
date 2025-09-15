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


  useEffect(()=>{
    sessionStorage.removeItem('meal');
    sessionStorage.removeItem('results');
  },[]);



    
  return (
    <div>
      <Navbar />
      <SearchBar/>
       

       {/* {error && <div>{error}</div>} */}

       {dishes.length > 0 ? <>
       <h3 className='text-center m-5 text-2xl'>Popular Menu and their Recipe</h3>
        {dishes.map((food) => <React.Fragment key={food.idMeal}>
        <Foodcard food={food}/>
        </React.Fragment>)}
       </>: <div className='min-h-screen'>
       <div className='text-red-500 text-2xl text-center my-10'>Error fetching meals</div>
       <div className='mx-auto w-fit p-5 mt-5 text-2xl text-cyan-950'>Please try again later</div>
       </div>}

       <Footer />

    </div>
  )
}

export default Home