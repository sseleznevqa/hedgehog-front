import React from 'react';
import InfiniteScrollAdvertisements from '../../infiniteScroll/InfiniteScrollAdvertisements';

const MyAds = ({goToDealConfirmation, goToAdvertisementCreationWizard}) => {
    
  return (
    <div>
        <InfiniteScrollAdvertisements goToDealConfirmation = {goToDealConfirmation} my = {true}
        suggesting = {false} goToAdvertisementCreationWizard = {goToAdvertisementCreationWizard}/>
      {/* <Advertisement {...advertisementData} /> */}
      {/* Other content goes here */}
    </div>
  );
};

export default MyAds;