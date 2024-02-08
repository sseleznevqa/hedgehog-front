import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './header/Header'
import Home from './pages/home/Home';
import AdvertisementCreationWizard from './pages/wizard/AdvertisementCreationWizard';
import Wishlist from './pages/wishlist/Wishlist';
import DealConfirmation from './pages/dealConfirmation/DealConfirmation';
import Suggesting from './pages/suggesting/Suggesting';
import MyAds from './pages/myAds/MyAds';
import MyDeals from './pages/myDeals/MyDeals';

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [dealInfo, setDealInfo] = useState({});
  const [interestedItem, setInterestedItem] = useState("");
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    console.log("Updated dealInfo:", dealInfo);
  }, [dealInfo]);

  const handleHomeClick = () => {
    setCurrentPage("Home");
  };

  const goToWishlist = () => {
    setCurrentPage("Wishlist");
  };

  const goToAdvertisementCreationWizard = (data ={}) => {
    setItemData(data);
    setCurrentPage("Wizard");
  };

  const goToDealConfirmation = (strict, free, image, desired, addition, title) => {
    setDealInfo({ strict, free, image, desired, addition, title });
    setCurrentPage("DealConfirmation");

  };

  const goToSuggesting = (title) => {
    setInterestedItem(title);
    setCurrentPage("Suggesting");
  };

  const goToMyAds = () => {
    setCurrentPage("MyAds");
  }

  const goToMyDeals = () => {
    setCurrentPage("MyDeals");
  }

  return (
    <div className="App">
      <Header 
         onHomeClick={handleHomeClick}
         onAdvertisementCreationWizardClick={goToAdvertisementCreationWizard}
         onWishlistClick={goToWishlist}
         goToMyAds = {goToMyAds}
         goToMyDeals = {goToMyDeals}/>
      {currentPage === "Home" && <Home goToDealConfirmation={goToDealConfirmation} goToSuggesting={goToSuggesting} />}
      {currentPage === "Wizard" && <AdvertisementCreationWizard onHomeClick={handleHomeClick} itemData = {itemData} />}
      {currentPage === "Wishlist" && <Wishlist />}
      {currentPage === "DealConfirmation" && <DealConfirmation dealInfo={dealInfo} />}
      {currentPage === "Suggesting" && <Suggesting title={interestedItem} onHomeClick={handleHomeClick} goToAdvertisementCreationWizard = {goToAdvertisementCreationWizard}/>}
      {currentPage === "MyAds" && <MyAds onHomeClick={handleHomeClick} goToAdvertisementCreationWizard = {goToAdvertisementCreationWizard}/>}
      {currentPage === "MyDeals" && <MyDeals goToDealConfirmation={goToDealConfirmation}/>}
    </div>
  );
}

export default App;
