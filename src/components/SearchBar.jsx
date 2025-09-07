import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <div className="flex justify-center items-center  mt-4">
        <input className="w-[50vw] border-1 border-gray-200 px-2 focus:outline-0 py-1.5" type="text" placeholder=" Enter food here"/>
      <button 
      className="bg-blue-950 text-white h-9 p-1.5 hover:bg-blue-900 cursor-pointer">Search</button>
      </div>
    
    </div>
  )
}

export default SearchBar