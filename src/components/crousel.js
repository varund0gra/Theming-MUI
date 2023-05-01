import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { makeStyles } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import DrawerAppBar from './Navbarcomp';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const useStyles = makeStyles((theme) => ({
    Box: {
      margin: "0 auto"  ,
      paddingTop: "90px"
    },
    head : {

    }
    
  }));

const images = [
  {
  
    imgPath:
      "https://c4.wallpaperflare.com/wallpaper/396/974/515/2019-ducati-diavel-1260-s-4k-wallpaper-preview.jpg",
  },
  {
  
    imgPath:
      'https://c4.wallpaperflare.com/wallpaper/346/934/540/2019-ducati-diavel-1260-s-4k-wallpaper-preview.jpg',
  },
  {

    imgPath:
      "https://c4.wallpaperflare.com/wallpaper/37/954/464/2019-ducati-diavel-1260-s-4k-wallpaper-preview.jpg",
  },
  {
  
    imgPath:
           "https://c4.wallpaperflare.com/wallpaper/402/956/846/ducati-diavel-1260-s-4k-2019-wallpaper-preview.jpg"  },
];

function SwipeableTextMobileStepper() {
    const navigate =useNavigate();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  function handlesubmit(){
    navigate("/details")
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const classes = useStyles()
  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }} className={classes.Box}>
        <DrawerAppBar/>
        <Typography  variant='h3'>Premium bicycles for all ages.</Typography>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /><br/>
       <Button
     
      variant="contained"
      color="secondary"
      size="large"
      style={{ borderRadius: 10, fontSize: 20 }}
     onClick={handlesubmit}
    >
      Next Page
    </Button>
    </Box>
  );
}

export default SwipeableTextMobileStepper;