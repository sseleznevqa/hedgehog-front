import React from 'react';
import { Button, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

const SocialLoginButtons = ({ setAuthorized, authorized }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {authorized ? "Logged as userAbrakadabra2567" : "Login with:"}
      </Typography>
      <div style={authorized ? { display: 'none' } : { display: 'flex-grid' }}>
      <Button
        onClick = {() => {setAuthorized(!authorized)}}
        variant="contained"
        color="primary"
        startIcon={<GoogleIcon />}
        style={{ marginBottom: "5vh"}}
      >
        Google Account
      </Button>
      <Button variant="contained" color="primary" startIcon={<AppleIcon />} onClick = {() => {setAuthorized(!authorized)}}>
        Apple ID
      </Button>
      </div>
    </div>
  );
};

export default SocialLoginButtons;