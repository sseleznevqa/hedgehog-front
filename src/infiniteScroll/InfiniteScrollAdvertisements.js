// InfiniteScrollAdvertisements.js
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Advertisement from './advert/Advertisement';

const InfiniteScrollAdvertisements = ({goToDealConfirmation, goToSuggesting, my, suggesting, goToAdvertisementCreationWizard }) => {
  const [advertisements, setAdvertisements] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  // BACKEND
  // Simulated data fetching function (replace with your data fetching logic)
  const fetchAdvertisements = () => {
    // Simulating asynchronous data fetching
    setTimeout(() => {
      // Distance should be replaced with actual coords returned from backend
      const newAdvertisements = [
        {
            title: 'Nice Hedgehog',
            images: [
                '/images/h1.jpg',
                '/images/h2.jpg',
                '/images/h3.jpg',
              ],
              description: 'Really short description',
              strict: false,
              free: true,
              addition: "Hug",
              desired: "Pillow",
              distance: "1km away",
              blocked: true
          },
          {
            title: 'Nice Hedgehog',
            images: [
                '/images/h1.jpg',
                '/images/h2.jpg',
                '/images/h3.jpg',
              ],
              description: '',
              strict: true,
              free: false,
              addition: "",
              desired: "Rabbit",
              distance: "300m away",
          },
          {
            title: 'Nice Hedgehog',
            images: [
                '/images/h1.jpg',
                '/images/h2.jpg',
                '/images/h3.jpg',
              ],
              description: "Really long description. That is description of the hedgehog.\n New lines are included/ Lorem Ipsum and different other things",
              strict: false,
              free: false,
              addition: "",
              desired: "",
              distance: "2km away",
          },
          {
            title: 'Nice Hedgehog',
            images: [
                '/images/h1.jpg',
                '/images/h2.jpg',
                '/images/h3.jpg',
              ],
              description: 'Really short description',
              strict: false,
              free: false,
              addition: "",
              desired: "Banana",
              distance: "1km away",
          },
          {
            title: 'Nice Hedgehog',
            images: [
                '/images/h1.jpg',
                '/images/h2.jpg',
                '/images/h3.jpg',
              ],
              description: 'Really short description',
              strict: false,
              free: true,
              addition: "",
              desired: "",
              distance: "2.5km away",
          },
      ];

      setAdvertisements((prevAds) => [...prevAds, ...newAdvertisements]);
      setHasMore(true); // Set to true if there is more data, false otherwise
    }, 1000);
  };

  // Initial data fetching
  useEffect(() => {
    fetchAdvertisements();
  }, []);

  return (
    <InfiniteScroll
      dataLength={advertisements.length}
      next={fetchAdvertisements}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {advertisements.map((advertisement, index) => (
        <Advertisement key={index} {...advertisement}
        goToDealConfirmation = {goToDealConfirmation} my = {my} suggesting = {suggesting}
        goToSuggesting = {goToSuggesting}
        goToAdvertisementCreationWizard = {goToAdvertisementCreationWizard} />
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteScrollAdvertisements;
