import React, { useState } from 'react';
import { TextField, Box, InputAdornment } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import ViberIcon from '@mui/icons-material/AlternateEmail';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const YourContacts = ({ setContacts, contacts }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [telegram, setTelegram] = useState('');
  const [viber, setViber] = useState('');
  const [validationError, setValidationError] = useState(false);

  const handlePhoneNumberChange = (value) => {
    // Allow only numeric input for phone number
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
      saveContacts();
      setValidationError(false);
    } else if (value === '' ) {
      setValidationError(true);
    } else {
      setValidationError(true);
    }
  };

  const isFormValid = () => {
    return !validationError;
  };

  const saveContacts = () => {
    // Check if the form is valid before saving contacts
    if (isFormValid()) {
      const newContacts = {
        phoneNumber,
        whatsApp,
        telegram,
        viber,
      };
      setContacts(newContacts);
    }
  };

  const renderValidationIcon = () => {
    if (validationError) {
      return <ErrorOutlineIcon color="error" />;
    } else {
      return <CheckCircleIcon color="success" />;
    }
  };

  return (
    <Box>
      <TextField
        label="Phone Number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={phoneNumber}
        onChange={(e) => handlePhoneNumberChange(e.target.value)}
        InputProps={{
            startAdornment: (
            <InputAdornment position="start">
              {renderValidationIcon()}
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
        error={validationError}
        helperText={validationError ? 'Only numbers are allowed' : ''}
      />

      <TextField
        label="WhatsApp"
        variant="outlined"
        fullWidth
        margin="normal"
        value={whatsApp}
      
        onChange={(e) => {setWhatsApp(e.target.value); saveContacts();}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <WhatsAppIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Telegram"
        variant="outlined"
        fullWidth
        margin="normal"
        value={telegram}
        onChange={(e) => {setTelegram(e.target.value); saveContacts();}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TelegramIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Viber"
        variant="outlined"
        fullWidth
        margin="normal"
        value={viber}
        onChange={(e) => {setViber(e.target.value); saveContacts();}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ViberIcon />
            </InputAdornment>
          ),
        }}
      />

    </Box>
  );
};

export default YourContacts;