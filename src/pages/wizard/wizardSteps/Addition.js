import React from 'react';
import { TextField, Box } from '@mui/material';

const Addition = ({ setAddition, addition, title }) => {
  const handleAdditionChange = (event) => {
    const newAddition = event.target.value;
    setAddition(newAddition);
  };

  return (
    <Box>
      <TextField
        label={"Addition to your " + title}
        variant="outlined"
        fullWidth
        margin="normal"
        value={addition}
        onChange={handleAdditionChange}
        placeholder="Hug, 10 euro, chocolate"
      />
    </Box>
  );
};

export default Addition;