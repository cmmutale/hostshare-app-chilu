import React from 'react'

import { HiOutlineChevronDown } from "react-icons/hi";
import { AiFillFlag } from "react-icons/ai";

function StayCard({price, checkIn, checkOut, guests,reviews}) {
  return (
    <div className="relative w-full flex flex-col justify-center gap-4">
      <div className="card bg-white rounded-xl border-[1px] border-gray space-y-4 p-4 shadow-xl">
        <div className="flex justify-between items-end">
          <div>
            <span className="font-bold text-[24px]">{price}</span>{" "}
            <span>night</span>{" "}
          </div>
          <span className="underline text-gray">{reviews} review</span>
        </div>
        <div className="check-in-card border-[1px] rounded-lg border-[#222222]">
          <div className="flex">
            <div className="border-r-[1px] border-[#222222] p-2 flex flex-col flex-1">
              <span className="font-bold text-[0.6rem]">CHECK-IN</span>
              <span className="text-[14px] text-gray">{checkIn}</span>
            </div>
            <div className="p-2 flex flex-col flex-1">
              <span className="font-bold text-[0.6rem]">CHECK-OUT</span>
              <span className="text-[14px] text-gray">{checkOut}</span>
            </div>
          </div>
          <div className="border-t-[1px] border-[#222222] p-2 flex flex-col flex-1">
            <span className="font-bold text-[0.6rem]">GUESTS</span>
            <span className="text-[14px] text-gray">{guests} guest(s)</span>
          </div>
        </div>
        <div className="cancellation-policy border-[1px] rounded-lg border-[#222222]">
          <div className="p-2 flex justify-between">
            <span>Non-refundable </span>
            <input type="radio" />
          </div>
          <div className="border-t-[1px] p-2 border-[#222222] flex justify-between">
            <span>Refundable </span>
            <input type="radio" />
          </div>
        </div>
        <button className="font-semibold bg-[#329a9a] text-white p-2 rounded-lg block w-full">
          Reserve
        </button>
        <span className="text-center block">You won't be charged yet</span>
        <div className="listing__card-pricing">
          <button className="font-bold p-2 rounded-lg underline flex items-center gap-2 hover:bg-gray-100 bg-white ease-in-out duration-300">
            Show price details <HiOutlineChevronDown />
          </button>
          <div>
            <div>
              <span>discription</span>
              <span>$1,100</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="font-bold flex justify-between">
          <span>Totoal before taxes</span>
          <span>$1,369</span>
        </div>
      </div>
      <button className='underline flex justify-center items-center gap-2'><AiFillFlag /> Report this listing</button>
    </div>
  );
}

export default StayCard