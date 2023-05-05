import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import data from "../Json/data.json";
import { Box, Container, MenuItem, makeStyles } from "@material-ui/core";
import Modal from "@mui/material/Modal";
import DrawerAppBar from "./Navbarcomp";
import { Alert, Select } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "stretch",
  },
  card: {
    width: "100%",
    maxWidth: "300px",
    margin: "10px",
    boxShadow: "2px 2px 10px 2px",
    borderRadius: "10px",
  },
  fontstart: {
    textAlign: "start",
  },
  fontstar: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    backgroundColor: "White",
    padding: "50px",
    border: "2px solid #000",
    borderRadius: "12px",
    boxShadow: 24,
    outline: "none",
  },
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "White",
  padding: "50px",
  border: "2px solid #000",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

export default function ImgMediaCard() {
  const classes = useStyles();
  const [count, setcount] = React.useState(0);
  const [cardata,setcardata]=React.useState()

  const [alert, setalert] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [Id, setid] = React.useState("");
 
  function handleOpeN(e) {
    setid(e);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const [selectValue, setSelectValue] = React.useState("all");

  const filtered =
    selectValue === "all"
      ? data
      : data.filter((item) => {
          return item.car_name === selectValue;
        });
  function handlehello(e) {
    setcount(count + 1);
     
     
    setcardata(data[Id-1])
    setalert(true);
  }
   console.log(cardata);
  function oncross(e) {
    setOpen(false);
    setalert(false);
  }

  return (
    <Container>
      <DrawerAppBar COUNTING={count} />

      <Box className={classes.fontstar}>
        <Select
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
          className={classes.fontstar}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="Mercedes">Mercedes</MenuItem>
          <MenuItem value="Audi">Audi</MenuItem>
          <MenuItem value="Toyata">Toyata</MenuItem>
          <MenuItem value="Mahindra">Mahindra</MenuItem>
          <MenuItem value="Jeep">Jeep</MenuItem>
          <MenuItem value="Porsche">Porsche</MenuItem>
        </Select>
      </Box>

      <Box className={classes.root}>
        {filtered.map((animals) => {
          return (
            <Card key={animals.id} className={classes.card}>
              <CardMedia
                component="img"
                alt={animals.car_name}
                height="210"
                image={animals.image}
              />
              <CardContent className={classes.fontstart}>
                <Typography gutterBottom variant="h5" component="div">
                  {animals.car_name}-{animals.model}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {animals.car_type}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">share</Button>
                <Button size="small" onClick={(e) => handleOpeN(animals._id)}>
                  Buy
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
      {open == true ? 
      (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <div style={style}>
              <i
                class="fa fa-times"
                onClick={(e) => oncross(e)}
                aria-hidden="true"
                style={{
                  position: "relative",
                  marginLeft: "283px",
                  fontSize: "32px",
                  color: "red",
                }}
              ></i>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {data[Id - 1].car_name}-{data[Id - 1].model}
              </Typography>
              <Typography id="modal-modal-description">
                acceleration: {data[Id - 1].acceleration}
              </Typography>
              <Typography id="modal-modal-description">
                type: {data[Id - 1].car_type}
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: 900 }}
              >
                PRICE: ${data[Id - 1].price}
              </Typography>
              <br />
              {alert == true ? (
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert severity="success">
                    This product is added successfully— check your Cart!
                  </Alert>
                </Stack>
              ) : (
                <Button
                  value={count}
                  onClick={(e) => handlehello(e)}
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  {" "}
                  add to cart
                </Button>
              )}
            </div>
          </Box>
        </Modal>
      ) : (
        " "
      )}
    </Container>
  );
}
