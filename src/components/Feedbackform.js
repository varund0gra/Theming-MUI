import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import DrawerAppBar from "./Navbarcomp";
const useStyles = makeStyles((theme) => ({
  Box: {
    // marginTop: theme.spacing(15),
    border: "1px solid grey",
    borderRadius: "20px",
    padding: "40px",
    width: "70% !important",
    margin: "0 auto",
  },
  Bo: {
    marginTop: theme.spacing(2),
  },
  Container: {
    marginTop:"7rem"
  },
}));

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Feedback: ${feedback}`);
  };
  const classes = useStyles();
  return (
    <>
      <DrawerAppBar />
      <Box className={classes.Container}>
        <Box className={classes.Box}>
          <Container >
            <Typography
              variant="h1"
              color="primary"
              style={{ fontSize: 50, fontWeight: 700 }}
            >
              Feedback
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                InputLabelProps={{
                  style: { color: "grey" },
                }}
                InputProps={{
                  style: {
                    border: "2px solid grey",
                  },
                }}
                label="E-mail"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <TextField
                label="Feedback"
                multiline
                rows={6}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                margin="normal"
                fullWidth
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
                type="submit"
                className={classes.Bo}
                fullWidth
              >
                Submit
              </Button>
            </form>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default FeedbackForm;
