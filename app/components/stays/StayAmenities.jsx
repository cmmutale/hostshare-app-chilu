import React from 'react'
import { SiSmartthings } from 'react-icons/si'

function ListingAmenities({featured}) {
    const amenities = [
      {
        icon: <SiSmartthings />,
        title: "Dedicated workspace",
        description: "A room with wifi that's well-suited for working.",
      },
      {
        icon: <SiSmartthings />,
        title: "Dedicated workspace",
        description: "A room with wifi that's well-suited for working.",
      },
      {
        icon: <SiSmartthings />,
        title: "Dedicated workspace",
        description: "A room with wifi that's well-suited for working.",
      },
      {
        icon: <SiSmartthings />,
        title: "Dedicated workspace",
        description: "A room with wifi that's well-suited for working.",
      },
      {
        icon: <SiSmartthings />,
        title: "Dedicated workspace",
        description: "A room with wifi that's well-suited for working.",
      },
    ];
  return (
    <div className="amenities">
      {featured ? (
        <>
          <div className="amenities--featured">
            <ul>
              {amenities.map((item, index) => (
                <li className="flex items-center gap-4">
                  <span>{item.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-[18px] font-semibold">
                      {item.title}
                    </span>
                    <span className="text-[18px]">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="amenities--not-featured">
            <ul>
              {amenities.map((item, index) => (
                <li className='flex gap-4 items-center text-gray'>
                  <SiSmartthings className='fill-black'/>
                  {item.title}
                </li>
              ))}
            </ul>
            <button>Show all amenities</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ListingAmenities