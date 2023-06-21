'use client'
import useSWR from 'swr'
import Image from "next/image";
import ListingHeader from '@/app/components/stays/StayHeader';
import ListingHost from '@/app/components/stays/StayHost';
import ListingAmenities from '@/app/components/stays/StayAmenities';
import ListingStory from '@/app/components/stays/StayStory';
import StayCard from '@/app/components/stays/StayCard';
import ListingReview from '@/app/components/stays/StayReview'
import ImageSlider from '@/app/components/gallery/Slide';
import { BiBed } from 'react-icons/bi'
import { LuBedDouble } from 'react-icons/lu'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page({ params }) {
  const { data, error } = useSWR(`/api/staticdata`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const listings = data.data;
  const listingArray = []

  listings.forEach((element) => {
    if(element.info.id === params.stay){
      listingArray.push(element);
    }
  });
  const stayItem = listingArray[0].info;
  const stayAmenities = stayItem.amenities.data;
  const stayAmenitiesArray = [];
  stayAmenities.forEach((element) => {
    stayAmenitiesArray.push(element);
  });
  const sleepingArrangements = stayItem.sleepingArrangements.data
  const sleepingArrangementsArray = []
  sleepingArrangements.forEach((element) => {
    sleepingArrangementsArray.push(element);
  })

  const stayItemInfo = [
    {
      "title": stayItem.title,
      "rating": stayItem.ratings.accuracy,
      "reviews": stayItem.visibleReviewCount,
      "hostType": stayItem.isSuperhost,
      "location": {
        "long": stayItem.location.long,
        "lat": stayItem.location.lat,
        "city": stayItem.location.city,
        "address": stayItem.location.address,
        "country": stayItem.location.country.title,
        "code": stayItem.location.country.code,
      },
      "hostName": stayItem.host.name,
      "hostAvatar": stayItem.host.avatar.url,
      "guests": stayItem.maxGuestCapacity,
      "bedrooms": stayItem.details.data[1].value,
      "beds": stayItem.details.data[2].value,
      "baths": stayItem.details.data[3].value,
      "amenities": stayItem.amenities.data,
      "description": stayItem.description,
    }
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="listing">
        <ListingHeader
          title={stayItem.title}
          rating={stayItem.ratings.accuracy}
          reviews={stayItem.visibleReviewCount}
          hostType={stayItem.host.isSuperhost}
          location={stayItem.location.city}
        />
        <div className='flex items-stretch gap-4 pt-8'>
          <div className="listing__desc pt-8 w-[65%]">
            <ListingHost
              hostName={stayItem.host.name}
              guests={stayItem.maxGuestCapacity}
              bedrooms={stayItem.details.data[1].value}
              beds={stayItem.details.data[2].value}
              baths={stayItem.details.data[3].value}
            />
            <hr />
            <div className="listing__attr">
              {stayAmenitiesArray.slice(0, 3).map((items, index) => (
                <div key={index}>{items.title}</div>
              ))}
            </div>
            <hr />
            <div className="listing__story">
              <p className="max-h-[100px] overflow-hidden">
                {stayItem.description}
              </p>
              <ListingStory text={stayItemInfo.description} />
            </div>
            <hr />
            <div className="listing__more-pics">
              <h2>Where you'll sleep</h2>
              <div className="flex gap-4">
                {/* <ImageSlider /> */}
                {sleepingArrangementsArray.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col border-2 rounded-lg p-4"
                  >
                    <span className="text-[32px]">
                      {item.icons[0] === "SYSTEM_BED_KING" ? (
                        <BiBed />
                      ) : (
                        <LuBedDouble />
                      )}
                    </span>
                    <span className="font-bold">{item.title}</span>
                    <span>{item.subTitle}</span>
                  </div>
                ))}
              </div>
            </div>
            <hr />
            <div className="listing__offers">
              <h2 className="text-[24px] font-semibold text-gray-500">
                What this place offers
              </h2>
              {stayAmenitiesArray.slice(0, 4).map((items, index) => (
                <div key={index} className="">
                  <span>{items.title}</span>
                </div>
              ))}
              <button>Show all {stayAmenitiesArray.length} amenities</button>
            </div>
            <hr />
            <div className="listing__calendar">
              <h2>Nights in {stayItem.location.city}</h2>
              <span>Jul 9, 2023 - Jul 14, 2023</span>
              <div className="listing__calendar-view"></div>
              <button>Clear dates</button>
            </div>
          </div>
          <div className="listing__card w-[35%]">
            <StayCard 
            price= {`${stayItem.currency.symbol}${stayItem.price}`}
            checkIn='7/22/2023'
            checkOut='7/22/2023'
            reviews='1'
            guests='1'
            />
          </div>
        </div>
        {/* <div className="listing__review">
          <ListingReview />
        </div> */}
      </div>
    </div>
  );
}
