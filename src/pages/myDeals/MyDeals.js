import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const MyDeals = ({goToDealConfirmation}) => {
  // Mocked data for deals
  const deals = [
    { title: 'Item 1 for Item 2', image: '/images/h3.jpg' },
    { title: 'Item 3 for Item 4', image: '/images/h1.jpg' },
    // Add more deals as needed
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        My Deals
      </Typography>

      {deals.map((deal, index) => (
        <Card key={index} style={{ marginBottom: '16px' }} onClick={() => {
            goToDealConfirmation(true, false, deal.image, "Item1", null, "Hedgehog");
        }}>
          <CardMedia
            component="img"
            alt={deal.title}
            height="140"
            image={deal.image}
          />
          <CardContent>
            <Typography variant="body1">{deal.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default MyDeals;