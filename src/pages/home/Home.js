import React from 'react';
import InfiniteScrollAdvertisements from '../../infiniteScroll/InfiniteScrollAdvertisements';

const Home = ({goToDealConfirmation, goToSuggesting}) => {
    
  return (
    <div>
        <InfiniteScrollAdvertisements goToDealConfirmation = {goToDealConfirmation} my = {false} suggesting = {false} goToSuggesting = {goToSuggesting}/>
      {/* <Advertisement {...advertisementData} /> */}
      {/* Other content goes here */}
    </div>
  );
};

export default Home;