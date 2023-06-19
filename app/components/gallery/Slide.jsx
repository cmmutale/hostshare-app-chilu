import React from 'react'
import Image from 'next/image'

function Slide() {
  return (
    <div className='relative'>
      <Image
        src="/images/default_listing.jpg"
        alt="image"
        fill={true}
        className="mySlides object-cover !relative"
      />
    </div>
  );
}

export default Slide