import React from 'react';
import InfiniteScrollAdvertisements from '../../infiniteScroll/InfiniteScrollAdvertisements';
import { Button } from '@mui/material';

const Suggesting = ({goToDealConfirmation, title,onHomeClick, goToAdvertisementCreationWizard }) => {
    
  return (
    <div>
      <h2>Suggest something for {title}</h2>
      <Button variant="contained" color="primary" onClick={onHomeClick}>Back</Button>
      <Button variant="contained" color="primary" onClick={goToAdvertisementCreationWizard}>Suggest something new</Button>
        <InfiniteScrollAdvertisements 
           goToDealConfirmation = {goToDealConfirmation} 
           my = {true} 
           suggesting = {true}
           goToAdvertisementCreationWizard = {goToAdvertisementCreationWizard} />
      {/* <Advertisement {...advertisementData} /> */}
      {/* Other content goes here */}
    </div>
  );
};

export default Suggesting;