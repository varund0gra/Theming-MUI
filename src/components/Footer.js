import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import { Container } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(6),
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
   
    backgroundColor:"inherit",
   
  },
}));
function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer} > 
      <Typography variant="h6" gutterBottom>
        Contact Us
      </Typography>
      <Typography  >
        Let us fix your car!
      </Typography>
      <Typography >
        {'© '}
        <Link color="inherit" href="#">
          VechicleCo
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
     
    </footer>
  );
}
export default Footer;
