import { useNavigate } from "react-router-dom";
import { Button, Typography, TextField, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Footer from "./Footer";
import DrawerAppBar from "./Navbarcomp";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  Box: {
    margin: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2),
    },
  },
  submitButton: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));

function Comp3() {
  const route = useNavigate();
  const classes = useStyles();
  const { handleSubmit, register, formState: { errors } } = useForm();

  function onSubmit() {
    route("/home");
  }

  return (
    <Box className={classes.Box}>
      <DrawerAppBar />
      <br />
      <br />
      <Typography
        variant="h2"
        color="primary"
        align="center"
        style={{ fontSize: "4rem" }}
      >
        LOGIN
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", maxWidth: 400 }}>
          <TextField
            style={{ width: "100%", maxWidth: 400 }}
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
            {...register("email", { required: true })}
            error={Boolean(errors.email)}
            helperText={errors.email ? "Email is required" : ""}
          />
          <TextField
            style={{ width: "100%", maxWidth: 400 }}
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
            {...register("password", { required: true })}
            error={Boolean(errors.password)}
            helperText={errors.password ? "Password is required" : ""}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            className={classes.submitButton}
            style={{ width: "100%", maxWidth: 400 }}
          >
            Submit
          </Button>
        </form>
        <br />
        <br />
        <hr />
        <Footer />
      </Box>
    </Box>
  );
}

export default Comp3;
