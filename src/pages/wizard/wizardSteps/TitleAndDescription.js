import React from 'react';
import { TextField, Box } from '@mui/material';

const TitleAndDescription = ({ setTitle, setDescription, title, description }) => {

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
  };

  return (
    <Box>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={description}
        onChange={handleDescriptionChange}
      />
    </Box>
  );
};

export default TitleAndDescription;