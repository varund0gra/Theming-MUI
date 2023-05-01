import { useNavigate } from "react-router-dom";
import {Box, Button , Container, Typography} from '@mui/material';

import { makeStyles } from "@material-ui/core";
import Footer from "./Footer";
import DrawerAppBar from "./Navbarcomp";

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120,
    },

  
    center: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding : theme.spacing(20)
    },
    button: {
      transition: theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeinOut,
    }),
    '&:hover': {
      transform: 'scale(1.1)'
    }
    },
  }));

function Comp1() {
  
  const route = useNavigate();
  function handlesignup() {
    route("/signup");
  }
  function handlelogin() {
    route("/login");
  }
  
  const classes = useStyles()
  return (
    <Box className={classes.center}>
      <Container maxWidth="sm">
      <DrawerAppBar/>
  
    <Typography variant="h1" color="primary" style={{ fontSize: 100 }} >
      Welcome
    </Typography> <br/>
    <Button
      onClick={handlesignup}
      variant="contained"
      color="primary"
      size="large"
      className={classes.button}
      style={{ borderRadius: 10, fontSize: 20, marginRight: 20 }}
    >
      Signup
    </Button> 
    <Button
      onClick={handlelogin}
      variant="contained"
      color="secondary"
      size="large"
      style={{ borderRadius: 10, fontSize: 20 }}
      className={classes.button}
    >
      Login
    </Button>

    <Footer/>
    </Container>
  </Box>
  );
}

export default Comp1;
