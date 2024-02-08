import React, {useState} from 'react';
import { Box, Typography, Avatar, List, ListItem, ListItemText } from '@mui/material';
import Confetti from 'react-confetti';

const DealConfirmation = ({ dealInfo }) => {
  // BACKEND: Here we are checking by item that there is a match.
  let swapItem = {
    image: "/images/h3.jpg",
    title: "Another hedgehog"
  };
  let contacts = {
    phoneNumber: "987787654",
    whatsApp: "@whatsup",
    telegram: "@telegram",
    viber: "@viber"
  };
  const [celebration, setCelebration] = useState(true);

  const handleConfettiComplete = () => {
    setCelebration(false);
  };

  return (
    <>
    <div>
      {celebration && <Confetti
        onConfettiComplete={handleConfettiComplete}
        recycle={false} // Make confetti stay on the ground after falling
      />}
      </div>
      
    
    <Box>
      <Typography variant="h4" gutterBottom>
        You are ready to make the deal!
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center">
        {/* Main Item */}
        <Box display="flex" alignItems="center">
          <Avatar src={dealInfo.image} alt={dealInfo.title} sx={{ width: 200, height: 200, marginRight: 2 }} />

          {/* "Swap For" Text or Swap Item */}
          {swapItem ? (
            <React.Fragment>
              <Typography variant="body1" gutterBottom>
                swap for
              </Typography>
              <Avatar src={swapItem.image} alt={swapItem.title} sx={{ width: 100, height: 100, marginLeft: 2 }} />
            </React.Fragment>
          ) : (
            <Typography variant="body1" gutterBottom>
              Free
            </Typography>
          )}
        </Box>

        {/* "Getting Item1 for Item2" Text */}
        <Typography variant="body1" gutterBottom>
          Getting {dealInfo.title} for {swapItem ? swapItem.title : 'free'}
        </Typography>
      </Box>

      {/* "Contacts of the Other Side" Text */}
      <Typography variant="h6" gutterBottom>
        Contacts of the other side:
      </Typography>

      {/* List of Contacts */}
      <List>
        <ListItem>
          <ListItemText primary={`Phone Number: ${contacts.phoneNumber}`} />
        </ListItem>
        {contacts.whatsApp && (
          <ListItem>
            <ListItemText primary={`WhatsApp: ${contacts.whatsApp}`} />
          </ListItem>
        )}
        {contacts.telegram && (
          <ListItem>
            <ListItemText primary={`Telegram: ${contacts.telegram}`} />
          </ListItem>
        )}
        {contacts.viber && (
          <ListItem>
            <ListItemText primary={`Viber: ${contacts.viber}`} />
          </ListItem>
        )}
      </List>

      {/* Add any other necessary information or actions */}
    </Box>
    </>
    
  );
};

export default DealConfirmation;
