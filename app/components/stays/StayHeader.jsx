import React from 'react';
import { AiFillStar } from 'react-icons/ai'
import { BiMedal } from 'react-icons/bi'
import { FiHeart, FiShare } from 'react-icons/fi'
import GalleryGrid from '@/app/components/gallery/Grid'


function ListingHeader({title, rating, reviews, hostType, location, images}) {
  return (
    <div className="listing__header">
      <h1 className="font-semibold text-[26px]">{title}</h1>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <AiFillStar /> {rating}
          </span>
          <span className="w-[2px] h-[2px] bg-black rounded-full"></span>
          <span className="underline">{reviews} reviews</span>
          <span className="w-[2px] h-[2px] bg-black rounded-full"></span>
          <span className="flex items-center gap-1">
            <BiMedal /> {hostType}
          </span>
          <span className="w-[2px] h-[2px] bg-black rounded-full"></span>
          <span className="underline">{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center p-2 rounded-md gap-1 hover:bg-gray-100 bg-white ease-in-out duration-300">
            <FiShare /> Share
          </button>
          <button className="flex items-center p-2 rounded-md gap-1 hover:bg-gray-100 bg-white ease-in-out duration-300">
            <FiHeart /> Save
          </button>
        </div>
      </div>
      <div className="listing__images pt-4">
        <GalleryGrid />
      </div>
    </div>
  );
}

export default ListingHeader