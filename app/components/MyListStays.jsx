import React from 'react';
import ListingCard from '@/app/components/ListingCard';


const MyList = ({ items }) => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12'>
        {
            items.map((item, index) => (
                <ListingCard
                    link={item.ref}
                    image={item.info.mainImage.url}
                    title={`${item.info.location.city}, ${item.info.location.country.title}`}
                    distance="100 miles"
                    availability="Jun 24 - 27"
                    price={item.info.price}
                    rating={item.info.ratings.guestSatisfactionOverall}
                />
            ))
        }
        {/* <ListingCard
            image="/images/default_listing.jpg"
            title="Clayton, Oklahoma"
            distance="95 miles"
            availability="Jul 9 - 10"
            price="$220"
            rating="4.9"
        /> */}
    </div>
    );
};

export default MyList;
