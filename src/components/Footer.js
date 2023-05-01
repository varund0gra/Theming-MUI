import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    backgroundColor:"inherit"
  },
}));
function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="subtitle1" align="center" >
        Let us fix your car!
      </Typography>
      <Typography variant="body2" align="center">
        {'© '}
        <Link color="inherit" href="#">
          CarCo
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
}
export default Footer;
