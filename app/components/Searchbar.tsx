import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'



function Searchbar() {

  return (
    <div className="search-bar border-2 rounded-full p-2  flex hover:drop-shadow-lg bg-white ease-in-out duration-300">
      <input
        type="text"
        className="search-bar--location flex-1 relative w-full text-center px-4 
        focus:w-[200px] focus:text-left focus:outline-none 
        active:text-left active:outline-none active:w-[200px] 
        border-none bg-transparent !outline-none 
        transition-all duration-500 ease-in-out"
        placeholder="Anywhere"
      />
      <label htmlFor="">
        <input
          type="date"
          className="search-bar--date flex-1 border-l-2 border-r-2 relative w-full px-4 text-center bg-transparent focus:outline-none active:outline-none"
          placeholder="Any week"
        />
      </label>
      <button className="search-bar--guest flex-1 relative w-full text-center px-4 border-none bg-transparent whitespace-nowrap focus:outline-none active:outline-none">
        Add guest
      </button>
      <button className="bg-[#329a9a] rounded-full p-2">
        <BiSearch className="fill-white" />
      </button>
    </div>
  );
}

export default Searchbar