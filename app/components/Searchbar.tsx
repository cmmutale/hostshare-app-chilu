import React from 'react'
import {BiSearch} from 'react-icons/bi'

function Searchbar() {
  return (
    <div className='search-bar border-2 rounded-full p-2  flex hover:drop-shadow-lg bg-white ease-in-out duration-300'>
      <button className='search-bar--location flex-1 relative w-full text-center px-4 border-none bg-transparent focus:outline-none active:outline-none'>Anywhere</button>
      <button className='search-bar--date flex-1 border-l-2 border-r-2 relative w-full px-4 text-center bg-transparent focus:outline-none active:outline-none'>Any week</button>
      <button className='search-bar--guest flex-1 relative w-full text-center px-4 border-none bg-transparent whitespace-nowrap focus:outline-none active:outline-none'>Add guest</button>
      <button className='bg-[#329a9a] rounded-full p-2'><BiSearch className='fill-white'/></button>
    </div>
  )
}

export default Searchbar