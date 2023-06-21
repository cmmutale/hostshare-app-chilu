'use client'
import React, {useState} from 'react';
import ListingCard from '@/app/components/card/ListingCard';
import Searchbar from "./Searchbar";


const MyList = ({ items }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTerm = (data) => {
        setSearchTerm(data);
    }

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        className="border-2"
      />
      <div className="grid grid-flow-dense gap-2 auto-rows-min auto-rows-max sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {items
          .filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (
              value.info.location.city
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item, index) => (
            <ListingCard
              key={index}
              link={`/listing/${item.info.id}`}
              image={item.info.mainImage.url}
              title={`${item.info.location.city}, ${item.info.location.country.title}`}
              distance="100 miles"
              availability="Jun 24 - 27"
              price={item.info.price}
              rating={item.info.ratings.guestSatisfactionOverall}
            />
          ))}
      </div>
    </>
  );
};

export default MyList;
