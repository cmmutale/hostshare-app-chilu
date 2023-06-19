import React from 'react'
import Image from 'next/image'

function Grid() {
  const images = [
    "/images/default_listing.jpg",
    "/images/default_listing.jpg",
    "/images/default_listing.jpg",
  ];

  // function currentDiv(n) {
  //   showDivs((slideIndex = n));
  // }

  // function showDivs(n) {
  //   var i;
  //   var x = document.getElementsByClassName("mySlides");
  //   var dots = document.getElementsByClassName("demo");
  //   if (n > x.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = x.length;
  //   }
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  //   }
  //   x[slideIndex - 1].style.display = "block";
  //   dots[slideIndex - 1].className += " w3-opacity-off";
  // }

  return (
    <div className="">
      <Image
        src="/images/default_listing.jpg"
        alt="image"
        fill={true}
        className="mySlides object-cover !relative"
      />
      {/* {images.map((image, index) => (
        <Image
          src="/images/default_listing.jpg"
          alt="image"
          fill={true}
          className="mySlides object-cover !relative"
        />
      ))}
      <div className='p-2'>
        <div className='flex gap-2 justify-around'>
          {images.map((image, index) => (
            <Image
              src="/images/default_listing.jpg"
              alt="image"
              fill={true}
              className="demo opacity-50 hover:opacity-100 object-cover max-w-[200px] cursor-pointer !relative"
              onClick={currentDiv(index)}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Grid