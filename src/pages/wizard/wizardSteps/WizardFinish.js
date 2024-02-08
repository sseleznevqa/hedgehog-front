import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import Confetti from 'react-confetti';

const WizardFinish = ({ onHomeClick }) => {
  const [celebration, setCelebration] = useState(true);

  const handleConfettiComplete = () => {
    setCelebration(false);
  };

  return (
    <div>
      {celebration && <Confetti
        onConfettiComplete={handleConfettiComplete}
        recycle={false} // Make confetti stay on the ground after falling
      />}
      <div>
        <Typography variant="h5" gutterBottom>
          Advertisement creation completed.
        </Typography>
        <Typography variant="h6" gutterBottom>
          People will see it soon.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => onHomeClick()}>
          Look for things.
        </Button>
      </div>
    </div>
  );
};

export default WizardFinish;