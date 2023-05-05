import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function Muipractice() {
    const [count,setcount]=useState(0)
    const [open,setopen]=useState(false)

    
      const handleOpen = () => {
        setopen(true);
      };
      const handleClickOpen = () => {
        setopen(true);
      };
    
      const handleClose = () => {
        setopen(false);
      };
    
  return (
    <div>
        <br/><br/>
       <Badge badgeContent={count} color="primary">
      <MailIcon color="action" />
    </Badge>
    <Button
      value={count}
      onClick={(e)=>setcount(count+1)}
      variant="contained"
      color="secondary"
      size="large"
  
     
    >
      add to cart
    </Button><br/><br/><br/>

    <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Add">
    <Button
      variant="contained"
      color="secondary"
      size="large"
    >
      openclose
    </Button>
    </Tooltip>
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
    <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  
    </div>
  )
}

export default Muipractice
