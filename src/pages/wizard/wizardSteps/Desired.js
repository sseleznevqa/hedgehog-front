import React from 'react';
import { TextField, Box, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

const Desired = ({ setDesired, desired, setSwapOption, swapOption, title}) => {
  const handleDesiredChange = (event) => {
    const newDesired = event.target.value;
    if ((newDesired.length>0) && (swapOption === "free")) {
        setSwapOption("forSwap");
    }
    setDesired(newDesired);
  };

  const handleSwapOptionChange = (event) => {
    setSwapOption(event.target.value);
  };

  return (
    <Box>
      <TextField
        label="What do you want?"
        variant="outlined"
        fullWidth
        margin="normal"
        value={desired}
        onChange={handleDesiredChange}
        placeholder="Hug, 10 euro, chocolate"
      />

      <FormControl component="fieldset" margin="normal">
        <RadioGroup
          aria-label="swapOption"
          name="swapOption"
          value={swapOption}
          onChange={handleSwapOptionChange}
        >
          <FormControlLabel
            value="forSwap"
            control={<Radio />}
            label={title + " is for swap"}
          />
          <FormControlLabel style ={{display: (desired.length === 0) ? "inline-flex" : "none"}}
            value="free"
            control={<Radio />}
            label={title + " is free"}
          />
          <FormControlLabel style ={{display: (desired.length === 0) ? "none" : "inline-flex"}}
            value="swapOnly"
            control={<Radio />}
            label={"Will swap "+title+" only for " + desired}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Desired;