import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [term,setTerm] = useState("");

  const navigate = useNavigate();
  
  function handleSearch(){
    if(!term) return;
    navigate(`/search?for=${term}`);
  }

  return (
    <div>
        <div className="flex justify-center items-center  mt-4">
        <input className="w-[50vw] border-1 border-gray-200 px-2 focus:outline-0 py-1.5" 
        type="text" 
        onChange={(e)=>setTerm(e.target.value)}
        value={term}
        placeholder=" Enter food here"/>
      <button 
      className="bg-cyan-800 text-white h-9 p-1.5 px-2.5 hover:bg-blue-900 cursor-pointer" onClick={handleSearch}>Search</button>
      </div>
    
    </div>
  )
}

export default SearchBar