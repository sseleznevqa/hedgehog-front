import React, { useState, useEffect } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import PhotoUploadAndCrop from './wizardSteps/PhotoUploadAndCrop';
import TitleAndDescription from './wizardSteps/TitleAndDescription';
import Addition from './wizardSteps/Addition';
import Desired from './wizardSteps/Desired';
import LocationPickerMap from './wizardSteps/LocationPickerMap';
import SocialLoginButtons from './wizardSteps/SocialLoginButtons';
import YourContacts from './wizardSteps/YourContacts';
import WizardFinish from './wizardSteps/WizardFinish';

const steps = [
  'Upload Photos',
  'What is it?',
  'Add Something',
  'You want for it',
  'Where is it?',
  'Login',
  'Contacts',
];

const AdvertisementCreationWizard = ({onHomeClick, itemData}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [croppedImages, setCroppedImages] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [addition, setAddition] = useState('');
  const [desired, setDesired] = useState('');
  const [swapOption, setSwapOption] = useState('forSwap');
  const [position, setPosition] = useState(null);
  const [authorized, setAuthorized] = useState(null);
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    if (itemData.title) {
      setAddition(itemData.addition);
      setDescription(itemData.description);
      setDesired(itemData.desired);
      // distance\coords
      if (itemData.free) {
        setSwapOption("free");
      } else if (itemData.free) {
        setSwapOption("swapOnly");
      } else {
        setSwapOption("forSwap");
      }
      setCroppedImages(itemData.images);
      setTitle(itemData.title);
    }
  }, []);


  const handleNext = () => {
    if (activeStep === 0) {
      console.log(croppedImages);
    }
    if (activeStep === 4) {
      console.log(position);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>

        <div style={{ marginTop: 20 }}>
          {activeStep === steps.length ? (
            <WizardFinish onHomeClick = {onHomeClick}/>
          ) : (
            <div>
              <Typography variant="h5" gutterBottom style={{ marginBottom: 20 }}>
                {steps[activeStep]}
              </Typography>
              <div style={{ marginBottom: 20 }}>
              {activeStep === 0 && <PhotoUploadAndCrop setCroppedImages={setCroppedImages} croppedImages = {croppedImages}/>}
              {activeStep === 1 && <TitleAndDescription setTitle={setTitle} setDescription = {setDescription} title ={title} description ={description}/>}
              {activeStep === 2 && <Addition setAddition={setAddition} addition = {addition} title ={title}/>}
              {activeStep === 3 && <Desired setDesired={setDesired} desired ={desired} setSwapOption ={setSwapOption} swapOption = {swapOption} title = {title}/>}
              {activeStep === 4 && <LocationPickerMap setPosition={setPosition} position ={position}/>}
              {activeStep === 5 && <SocialLoginButtons setAuthorized={setAuthorized} authorized ={authorized}/>}
              {activeStep === 6 && <YourContacts setContacts={setContacts} contacts ={contacts}/>}
              </div>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  style={{ marginRight: 10 }}
                >
                  Back
                </Button>
                <Button 
                  disabled={(
                    ((activeStep === 0) && (croppedImages.length === 0)) ||
                    ((activeStep === 1) && (title.length<3)) ||
                    ((activeStep === 5) && (!authorized)) ||
                    ((activeStep === 6) && (!contacts))
                  )}
                  variant="contained" 
                  color="primary" 
                  onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Paper>
    </Container>
  );
};

export default AdvertisementCreationWizard;