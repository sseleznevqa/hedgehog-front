import React, { useState, useRef } from 'react';
import { Autocomplete, TextField, Box, Button, Typography } from '@mui/material';

const Wishlist = () => {
  const [wishes, setWishes] = useState([]);
  const [interests, setInterests] = useState([]);

  // Create refs for the input fields
  const wishInputRef = useRef(null);
  const interestInputRef = useRef(null);

  const handleAddWish = () => {
    if ((wishes.length < 20) && (!wishes.includes(wishInputRef.current.value) && (wishInputRef.current.value !== ''))) {
      setWishes([...wishes, wishInputRef.current.value]);
      // Focus on the wish input field
      wishInputRef.current.focus();
    }
    setTimeout(() => {wishInputRef.current.value = ''},0);
    setTimeout(() => {interestInputRef.current.value = ''},0);
  };

  const handleAddInterest = () => {
    if ((interests.length < 20) && (!interests.includes(`#${interestInputRef.current.value.toLowerCase()}`) && (interestInputRef.current.value !== ''))) {
      setInterests([...interests, `#${interestInputRef.current.value.toLowerCase()}`]);
      interestInputRef.current.focus();
    }
    setTimeout(() => {wishInputRef.current.value = ''},0);
    setTimeout(() => {interestInputRef.current.value = ''},0);
  };

  return (
    <Box>
       <Typography variant="h4" gutterBottom>
        My Wishes
      </Typography>
      <Typography variant="body1" paragraph>
        Add your wishes, and we'll notify you if someone adds a matching advertisement.
      </Typography>
      <Autocomplete
        multiple
        id="wishlist"
        options={[]}
        freeSolo
        value={wishes}
        onChange={(event, newValue) => {setWishes(newValue); handleAddWish()}}
        renderInput={(params) => (
          <TextField
            {...params}
            inputRef={wishInputRef}
            onClick = {(e) => {interestInputRef.current.value = ''; wishInputRef.current.value = ''}}
            label="New Wish"
            variant="outlined"
            margin="dense"
            fullWidth
          />
        )}
      />

      <Button variant="outlined" onClick={handleAddWish}>
        Add Wish
      </Button>

      <Autocomplete
        style={{ marginTop: "10vh" }}
        multiple
        id="interests"
        options={[]}
        freeSolo
        value={interests}
        onChange={(event, newValue) => {setInterests(newValue); handleAddInterest()}}
        renderInput={(params) => (
          <TextField
            {...params}
            inputRef={interestInputRef}
            onClick = {(e) => {interestInputRef.current.value = ''; wishInputRef.current.value = ''}}
            label="New Interest"
            variant="outlined"
            margin="dense"
            fullWidth
          />
        )}
      />

      <Button variant="outlined" onClick={handleAddInterest}>
        Add Interest
      </Button>

      <Button onClick={() => console.log('Wishes:', wishes, 'Interests:', interests)}>
        Log Wishlist
      </Button>
    </Box>
  );
};

export default Wishlist;