import React from "react";
import Image from "next/image";
import ListingHeader from '@/app/components/Listings/ListingHeader';
import ListingHost from '@/app/components/Listings/ListingHost';
import ListingAmenities from '@/app/components/Listings/ListingAmenities';
import ListingStory from '@/app/components/Listings/ListingStory';
import ImageSlider from '@/app/components/gallery/Slide';
import ListingReview from '@/app/components/Listings/ListingReview'

function ViewListing() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="listing">
        <ListingHeader
          title="Scenic Mountain Lodge on Sardis Lake, Clayton Ok."
          rating="4.91"
          reviews="242"
          hostType="SuperHost"
          location="Clayton, Oklahoma, United States"
        />
        <div className="listing__desc">
          <ListingHost 
            hostName="Carolyn"
            guests="6"
            bedrooms="4"
            beds="2"
            baths="3"
          />
          <hr />
          <div className="listing__attr">
            <ListingAmenities 
              featured={true}
            />
          </div>
          <hr />
          <div className="listing__story">
            <ListingStory />
          </div>
          <hr />
          <div className="listing__more-pics">
            <h2>Where you'll sleep</h2>
            <div>
              <ImageSlider />
            </div>
          </div>
          <hr />
          <div className="listing__offers">
            <h2 className="text-[24px] font-semibold text-gray-500">What this place offers</h2>
            <ListingAmenities 
              featured={false}
            />
          </div>
          <hr />
          <div className="listing__calendar">
            <h2>Nights in Clayton</h2>
            <span>Jul 9, 2023 - Jul 14, 2023</span>
            <div className="listing__calendar-view"></div>
            <button>Clear dates</button>
          </div>
        </div>
        <hr />
        <div className="listing__review">
          <ListingReview />
        </div>
        <div className="listing__card">
          <div className="listing__card-pricing">
            <span>$220 night</span>
            <span>4.91</span>
            <span>242 reviews</span>
          </div>
          <div>
            <div className="listing__card-subcard"></div>
            <button>Reserve</button>
            <span>You won't be charged yet</span>
          </div>
          <div>
            <span>discription $1,100</span>
            <span>discription $1,100</span>
            <span>discription $1,100</span>
          </div>
          <hr />
          <div>
            <span>Totoal before taxes $1,369</span>
          </div>
          <button>Report this listing</button>
        </div>
      </div>
    </div>
  );
}

export default ViewListing;
