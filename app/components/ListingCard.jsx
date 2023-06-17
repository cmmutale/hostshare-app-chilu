import React from 'react'
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai'

function ListingCard({image, link, title, distance, availability, price, rating}) {
  return (
    <div className='card max-w-[400px] mx-auto relative'>
        <label className=''>
            <a href={link} target='_blank' className='space-y-4'>
                <Image 
                    src={image}
                    alt='image'
                    width={275}
                    height={275}
                    className='max-h-[325px] aspect-square rounded-xl w-full object-cover'
                />
                <div className='relative'>
                    <p className='font-bold'>{title}</p>
                    <p className='text-gray-500'>{distance}</p>
                    <p className='text-gray-500'>{availability}</p>
                    <p className='text-gray-500'><span className='font-bold text-black'>${price}</span> night</p>
                    <p className='text-gray-500 flex items-center absolute right-0 top-0'><AiFillStar className='fill-black'/> {rating}</p>
                </div>
            </a>
        </label>
    </div>
  )
}

export default ListingCard