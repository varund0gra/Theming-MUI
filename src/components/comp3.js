import { useNavigate } from "react-router-dom";
import { Button, Typography, TextField, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Footer from "./Footer";
import DrawerAppBar from "./Navbarcomp";
const useStyles = makeStyles((theme) => ({
  Box: {
    margin: theme.spacing(8),  
  },
  
}));

function Comp3() {
  const route = useNavigate();
  function handlesubmit() {
    route("/home");
  }
  const classes = useStyles()
  return (
    <Box className={classes.Box}>
      <DrawerAppBar/>
      <br/><br/>
      <Typography variant="h2" color="primary" align="center">
        LOGIN
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TextField
          InputLabelProps={{
            style: { color: "grey" },
          }}
          InputProps={{
            style: {
              border: "1px solid grey",
            },
          }}
          label="E-mail"
          variant="outlined"
          margin="normal"
          style={{ width: 400 }}
        />
        <TextField
          InputLabelProps={{
            style: { color: "grey" },
          }}
          InputProps={{
            style: {
              border: "1px solid grey",
            },
          }}
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          style={{ width: 400 }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handlesubmit}
        >
          Submit
        </Button><br/><br/><hr/>
        <Footer/>
      </Box>
    </Box>
  );
}

export default Comp3;
