import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import data from "../Json/data.json";
import { Box, Container, MenuItem, makeStyles } from "@material-ui/core";
import Modal from '@mui/material/Modal';
import DrawerAppBar from "./Navbarcomp";
import { Select } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  Box: {
    width: "30%",
    margin: "10px",
    boxShadow: "2px 2px 10px 2px",
    borderRadius: "10px",
  },
  zendaya: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: "10px",
    
  },
  fontstart: {
    textAlign: "start",
  },
  fontstar: {
    display: "flex",
    marginTop: theme.spacing(4),

  },

}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'White',
  padding:"50px",
  border: '2px solid #000',
  borderRadius:"12px",
  boxShadow: 24,
  p: 4,
};

export default function ImgMediaCard() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectValue, setSelectValue] = React.useState("all");

  const filtered =
    selectValue === "all"
      ? data
      : data.filter((item) => {
          return item.car_name === selectValue;
        });

  return (
    <Container>
      <DrawerAppBar />
      <Box className={classes.fontstar}>
        {" "}
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

      {/* < DrawerAppBar/> */}
      <Card className={classes.zendaya}>
        {filtered.map((animals) => {
          return (
            <Box className={classes.Box}>
              <CardMedia
                component="img"
                alt="green iguana"
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
                <Button size="small">Share</Button>
                <Button size="small" onClick={handleOpen}>Learn More</Button>
              </CardActions>
            </Box>
          );
        })}
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>

          <div style={style}>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          </div>

        </Box>
      </Modal>
    </Container>
  );
}
