import React from 'react'

function ListingStory({text}) {
  return (
    <div>
      <p>{text}</p>
      <button className="underline">See more</button>
    </div>
  );
}

export default ListingStory