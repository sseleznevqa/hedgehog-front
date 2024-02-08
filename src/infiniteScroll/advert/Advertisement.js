import React, { useRef, useEffect, useState } from 'react';
import { Typography, Paper, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const Advertisement = ({
  title,
  images,
  description,
  strict,
  free,
  addition,
  desired,
  distance,
  goToDealConfirmation,
  my,
  suggesting,
  blocked,
  goToSuggesting,
  goToAdvertisementCreationWizard,
}) => {
  const [descriptionHeight, setDescriptionHeight] = useState('34.5vh');
  const descriptionRef = useRef(null);

  const calculateDescriptionHeight = () => {
    if (descriptionRef.current) {
      const imageHeight = descriptionRef.current.offsetHeight;
      setDescriptionHeight(`${imageHeight}px`);
    }
  };

  useEffect(() => {
    calculateDescriptionHeight();
    window.addEventListener('resize', calculateDescriptionHeight);
    return () => {
      window.removeEventListener('resize', calculateDescriptionHeight);
    };
  }, []);

  const allSlides = images.map((image, index) => (
    <img 
    key={index}
    src={image}
    alt={`Advertisement ${index + 1}`}
    style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ));

  if (description) {
    allSlides.push(
      <div
        key="description"
        style={{
          textAlign: 'center',
          width: '100%',
          maxHeight: descriptionHeight,
          minHeight: descriptionHeight,
          overflowY: 'auto',
          margin: '0 auto', // Center horizontally
        }}
        ref={descriptionRef}
      >
        <Typography variant="body1">{description}</Typography>
      </div>
    );
  }

  const handleInterested = (strict, free, image, desired, addition, title) => {
    if (free || strict) {
      goToDealConfirmation(strict, free, image, desired, addition, title);
    } else {
      goToSuggesting(title);
    }
  };

  return (
    <Paper elevation={3} sx={{ height: '80vh', padding: 2, marginBottom: 2 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Carousel swipe={false} autoPlay={false} index={1}>
        {allSlides}
      </Carousel>
      {my ? (
        <Typography variant="body1">Your item.</Typography>
      ) : (
        <div style={{ marginTop: 20 }}>
          {!free ? (
            <Typography variant="body1">
              {!desired ? 'Suggest something!' : 'Can swap for ' + desired + (strict ? ' only' : '')}
            </Typography>
          ) : (
            <Typography variant="body1">For free!</Typography>
          )}

          {!addition ? (
            <Typography variant="body1">Hurry Up!</Typography>
          ) : (
            <Typography variant="body1">{'+ ' + desired + ' included!'}</Typography>
          )}
          <Typography variant="body1">{'It is ' + distance}</Typography>
        </div>
      )}

      {(!my && suggesting) && (
        <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={() => handleInterested(strict, free, images[0], desired, addition, title)}>
          Interested
        </Button>
      )}
      {suggesting && (
        <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
          Suggest
        </Button>
      )}
      {my && (
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 20 }}
          onClick={() => {
            goToAdvertisementCreationWizard({ title, images, description, strict, free, addition, desired, distance });
          }}
        >
          Edit
        </Button>
      )}
      {my && !blocked && (
        <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
          Hide Ad
        </Button>
      )}
      {my && blocked && (
        <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
          Make visible
        </Button>
      )}
    </Paper>
  );
};

export default Advertisement;