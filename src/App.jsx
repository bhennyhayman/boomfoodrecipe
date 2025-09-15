import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Recipe from './components/Recipe';
import { useState } from 'react';


function App() {
   const [dishes, setDishes] = useState([]);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home dishes={dishes} setDishes={setDishes}/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/recipe" element={<Recipe dishes={dishes}/>}/>
      </Routes>
    </>
  )
}

export default App
