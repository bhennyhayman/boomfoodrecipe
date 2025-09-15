import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Recipe from './components/Recipe';
import { useState } from 'react';
import SearchPage from './components/SearchPage';


function App() {
   const [dishes, setDishes] = useState([]);
   
  return (
    <>
      <Routes>
        <Route path='/' element={<Home dishes={dishes} setDishes={setDishes}/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/recipe" element={<Recipe dishes={dishes}/>}/>
        <Route path='/search' element={<SearchPage />}/>
      </Routes>
    </>
  )
}

export default App
