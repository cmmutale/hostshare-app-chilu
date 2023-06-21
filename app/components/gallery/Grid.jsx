import React from 'react'
import Image from 'next/image'

function Grid() {
  return (
    <div className="max-h-[50vh]">
      <Image
        src="/images/default_listing.jpg"
        alt="image"
        fill={true}
        className="mySlides object-cover !relative max-h-[50vh] rounded-xl"
      />
    </div>
  );
}

export default Grid