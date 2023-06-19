import React from 'react';
import { LuSettings2 } from 'react-icons/lu'
import { FiChevronRight } from 'react-icons/fi'
import { FiChevronLeft } from 'react-icons/fi'
import './list.css'

const MyList = ({ items }) => {
  return (
    <div className='bg-white flex gap-4 items-center mx-auto'>
        <button className='border-2 hidden sm:block rounded-full p-2 bg-white'><FiChevronLeft /></button>
        <div className='horizontal-grid--scroll text-gray-500'>
            {items.map((item, index) => (
                <label key={index} className='text-[14px] font-semibold whitespace-nowrap'>
                    <button className='hover:text-black'>{item}</button>
                </label>
            ))}
        </div>
        <button className='border-2 hidden sm:block rounded-full p-2 bg-white'><FiChevronRight className='' /></button>
        <button className='border-2 hidden sm:flex rounded-xl p-2 flex flex-nowrap items-center gap-2 bg-white'><LuSettings2 className='fill-gray-500 w-[16px] h-[16px]' />Filter</button>
    </div>
    );
};

export default MyList;
