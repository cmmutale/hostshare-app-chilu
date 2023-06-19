import React from 'react'
import { HiUserCircle } from 'react-icons/hi2'

function ListingHost({ hostName, guests, bedrooms, beds, baths }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="font-semibold text-[24px]">
          Entire cabin hosted by {hostName}
        </h2>
        <div className="flex items-center gap-2">
          <span>{guests} guests</span>
          <span className="w-[2px] h-[2px] bg-black rounded-full"></span>
          <span>{bedrooms} bedrooms</span>
          <span className="w-[2px] h-[2px] bg-black rounded-full"></span>
          <span>{beds} beds</span>
          <span className="w-[2px] h-[2px] bg-black rounded-full"></span>
          <span>{baths} baths</span>
        </div>
      </div>
      <HiUserCircle className="h-[36px] w-[36px] fill-gray" />
      {/* <Image /> */}
    </div>
  );
}

export default ListingHost