'use client'

import MyList from '@/app/components/MyList'
import MyListStays from '@/app/components/MyListStays';

//useSWR allows the use of SWR inside function components
import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

function Listings() {
  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR('/api/staticdata', fetcher);
  console.log(typeof data)
  
  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

  const filterCategories = data.categories;
  const filterArray = []
  filterCategories.forEach((element) => {
    filterArray.push(element.title);
  });

  const stayListings = data.data;
  const listingArray = []
  stayListings.forEach((element) => {
    listingArray.push(element);
  });

  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <div>
      <div><MyList items={filterArray}/></div>
      <div className='pt-24'><MyListStays items={listingArray}/></div>
    </div>
  );
}

export default Listings