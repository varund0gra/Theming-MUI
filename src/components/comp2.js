import { useNavigate } from "react-router-dom";
import { Button, Typography, TextField } from "@mui/material";
import Footer from "./Footer";
import DrawerAppBar from "./Navbarcomp";

function Comp2() {
  const route = useNavigate();
  function handlesubmit() {
    route("/login");
  }
  return (
    <div style={{ padding: '70px'  , width : '50%' , margin : 'auto'}}>
      <DrawerAppBar/>
      <Typography component="h1" variant="h2" color="primary">
        SIGN UP
      </Typography>
      <form onSubmit={handlesubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          InputLabelProps={{
            style: { color: "grey" },
          }}
          InputProps={{
            style: {
              border: "1px solid grey",
              color: "#FF7F7F",
            },
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="E-mail"
          name="email"
          autoComplete="email"
          InputLabelProps={{
            style: { color: "grey" },
          }}
          InputProps={{
            style: {
              border: "1px solid grey",
              color: "#FF7F7F",
            },
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          InputLabelProps={{
            style: { color: "grey" },
          }}
          InputProps={{
            style: {
              border: "1px solid grey",
              color: "#FF7F7F",
            },
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="phone"
          label="Phone No"
          type="number"
          id="phone"
          autoComplete="tel"
          InputLabelProps={{
            style: { color: "grey" },
          }}
          InputProps={{
            style: {
              border: "1px solid grey",
              color: "#FF7F7F",
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handlesubmit}
        >
          Submit
        </Button>
        <Footer/>
      </form>
    </div>
  );
}

export default Comp2;
