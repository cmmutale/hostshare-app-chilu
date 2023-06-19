import React, { useState } from 'react'
import Image from 'next/image'
import Searchbar from './Searchbar'
import {TbWorld} from 'react-icons/tb'
import { BiMenu } from 'react-icons/bi'
import { HiUserCircle } from 'react-icons/hi2'

function Navbar() {
  return (
    <div className="navbar bg-white z-[999] flex items-center fixed w-full top-0 justify-center md:justify-between px-4 border-b-[2px]">
      <div className="md:block hidden logo">
        <a href="/">
          <Image
            src="/images/Hostshare-Logo-green.png"
            alt="host logo"
            width={200}
            height={100}
          />
        </a>
      </div>
      <div className="navbar--middle my-2">
        <Searchbar />
      </div>
      <div className="md:block hidden">
        <div className="navbar--last flex items-center gap-4">
          <button className="rounded-full p-2 hover:bg-gray-100 bg-white ease-in-out duration-300">
            Host your home
          </button>
          <button className="rounded-full hover:bg-gray-100 p-2  bg-white ease-in-out duration-300">
            <TbWorld className="w-[24px] h-[24px]" />
          </button>
          <button className="rounded-full p-2 hover:drop-shadow-lg bg-white ease-in-out duration-300 flex items-center gap-2 border-2">
            <BiMenu className="w-[24px] h-[24px] fill-gray-600" />
            <HiUserCircle className="w-[36px] h-[36px] fill-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar